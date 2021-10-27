// @flow
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { isBrowser, throttle } from '../global/utils';

const zeroPosition = { height: 0, width: 0 };
const getClientRect = el => el?.getBoundingClientRect();

const getSize = ({ element }) => {
  if (!isBrowser) {
    return { height: 0, width: 0 };
  }

  if (!element) {
    return { height: window.innerHeight, width: window.innerWidth };
  }

  const targetSize = getClientRect(element?.current);

  if (!targetSize) {
    return zeroPosition;
  }

  return { height: targetSize.height, width: targetSize.width };
};

type Props = {
  element?: ?any,
  wait?: number,
};

const useResize = ({ element, wait = 200 }: Props) => {
  const defaultSize = useMemo(() => getSize({ element }), [element]);
  const previousSize = useRef(defaultSize);
  const [currentSize, setCurrentSize] = useState(defaultSize);

  const handleResize = useCallback(() => {
    const size = getSize({ element });
    setCurrentSize(size);
    previousSize.current = size;
  }, [element]);

  const handleOrientation = useCallback(() => {
    const elementRef = element?.current;

    // After orientationchange, add a one-time resize event
    const afterOrientation = el => {
      handleResize();

      // Remove the resize event listener after it has executed
      if (elementRef) {
        elementRef.removeEventListener('resize', aftreOrientationThrottle);
      } else {
        window.removeEventListener('resize', aftreOrientationThrottle);
      }
    };

    const aftreOrientationThrottle = throttle(afterOrientation, wait);

    if (elementRef) {
      elementRef.addEventListener('resize', aftreOrientationThrottle);
    } else {
      window.addEventListener('resize', aftreOrientationThrottle);
    }
  }, [element, handleResize, wait]);

  const handleThrottledResize = throttle(handleResize, wait);
  const handleThrottledOrientation = throttle(handleOrientation, wait);

  useEffect(() => {
    const elementRef = element?.current;

    if (elementRef) {
      elementRef.addEventListener('resize', handleThrottledResize, {
        passive: true,
      });
      elementRef.addEventListener(
        'orientationchange',
        handleThrottledOrientation,
        {
          passive: true,
        }
      );
    } else {
      window.addEventListener('resize', handleThrottledResize, {
        passive: true,
      });
      window.addEventListener('orientationchange', handleThrottledOrientation, {
        passive: true,
      });
    }

    return () => {
      if (elementRef) {
        elementRef.removeEventListener('resize', handleThrottledResize);
        elementRef.removeEventListener(
          'orientationchange',
          handleThrottledOrientation
        );
      } else {
        window.removeEventListener('resize', handleThrottledResize);
        window.removeEventListener(
          'orientationchange',
          handleThrottledOrientation
        );
      }
    };
  }, [element, handleThrottledOrientation, handleThrottledResize, wait]);

  return {
    previousSize: previousSize.current,
    size: currentSize,
    time: wait,
  };
};

export default useResize;
