// @flow
import React, { createContext, useContext, useMemo } from 'react';
import { useScroll } from '../hooks';

const WAIT = 150;
const SCROLL_DIRECTION = {
  Down: 'down',
  Left: 'left',
  None: 'none',
  Right: 'right',
  Up: 'up',
};

const ScrollContext = createContext<{
  amountScrolled: {
    x: number,
    y: number,
  },
  direction: 'down' | 'left' | 'none' | 'right' | 'up',
  position: {
    x: number,
    y: number,
  },
  previousPosition: {
    x: number,
    y: number,
  },
  time: number,
  velocity: {
    x: number,
    y: number,
  },
}>({
  amountScrolled: {
    x: 0,
    y: 0,
  },
  direction: SCROLL_DIRECTION.None,
  position: {
    x: 0,
    y: 0,
  },
  previousPosition: {
    x: 0,
    y: 0,
  },
  time: WAIT,
  velocity: {
    x: 0,
    y: 0,
  },
});

export const ScrollProvider = ({ children }: Props) => {
  const { position, previousPosition, time } = useScroll({
    wait: WAIT,
  });

  const amountScrolled = useMemo(
    () => ({
      x: position.x - previousPosition.x,
      y: position.y - previousPosition.y,
    }),
    [position, previousPosition]
  );

  const direction = useMemo(() => {
    if (amountScrolled.y < 0) {
      return SCROLL_DIRECTION.Up;
    } else if (amountScrolled.y > 0) {
      return SCROLL_DIRECTION.Down;
    } else if (amountScrolled.x < 0) {
      return SCROLL_DIRECTION.Left;
    } else if (amountScrolled.x > 0) {
      return SCROLL_DIRECTION.Right;
    }
    return SCROLL_DIRECTION.None;
  }, [amountScrolled]);

  const velocity = useMemo(
    () => ({
      x: Math.abs(amountScrolled.x / time),
      y: Math.abs(amountScrolled.y / time),
    }),
    [amountScrolled, time]
  );

  const value = useMemo(
    () => ({
      amountScrolled,
      direction,
      position,
      previousPosition,
      time,
      velocity,
    }),
    [amountScrolled, direction, position, previousPosition, time, velocity]
  );

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};

type Props = {
  children: Function,
};

export const ScrollConsumer = ScrollContext.Consumer;
export const useScrollContext = () => useContext(ScrollContext);
