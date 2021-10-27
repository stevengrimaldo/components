// @flow
import { useEffect, useMemo, useRef, useState } from 'react';
import { isBrowser, throttle } from '../global/utils';

const zeroPosition = { x: 0, y: 0 };
const getClientRect: any = (el?: HTMLDivElement) => el?.getBoundingClientRect();

const getScrollPosition = ({
  container,
  element,
}: {
  container?: { current: HTMLDivElement },
  element?: { current: HTMLDivElement },
}): { x: number, y: number } => {
  if (!container && !element) {
    if (isBrowser) {
      return { x: window.pageXOffset, y: window.pageYOffset };
    } else {
      return zeroPosition;
    }
  }

  const targetPosition: { left: number, top: number } = getClientRect(
    element?.current
  );
  const containerPosition: { x: number, y: number } = getClientRect(
    container?.current || document?.body
  );

  if (!targetPosition) {
    return containerPosition
      ? { x: containerPosition.x, y: containerPosition.y }
      : zeroPosition;
  } else {
    return containerPosition
      ? {
          x: (containerPosition.x || 0) - (targetPosition.left || 0),
          y: (containerPosition.y || 0) - (targetPosition.top || 0),
        }
      : { x: targetPosition.left, y: targetPosition.top };
  }
};

const useScroll = ({
  container = null,
  element = null,
  wait = 200,
}: {
  container?: { current: HTMLDivElement },
  element?: { current: HTMLDivElement },
  wait?: number,
}) => {
  const defaultPosition: { x: number, y: number } = useMemo(
    () => getScrollPosition({ container, element }),
    [container, element]
  );
  const previousPosition = useRef(defaultPosition);
  const [currentPosition, setCurrentPosition] = useState(defaultPosition);

  useEffect(() => {
    const handleScroll = () => {
      const position = getScrollPosition({ container, element });
      setCurrentPosition(position);
      previousPosition.current = position;
    };

    const handleThrottledScroll = throttle(handleScroll, wait);
    const containerRef = container?.current;

    if (containerRef) {
      containerRef.addEventListener('scroll', handleThrottledScroll, {
        passive: true,
      });
    } else {
      window.addEventListener('scroll', handleThrottledScroll, {
        passive: true,
      });
    }

    return () => {
      if (containerRef) {
        containerRef.removeEventListener('scroll', handleThrottledScroll);
      } else {
        window.removeEventListener('scroll', handleThrottledScroll);
      }
    };
  }, [container, element, wait]);

  return {
    position: currentPosition,
    previousPosition: previousPosition.current,
    time: wait,
  };
};

export default useScroll;
