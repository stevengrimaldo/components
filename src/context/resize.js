// @flow
import React, { createContext, useContext, useMemo } from 'react';
import { useResize } from '../hooks';

const WAIT = 150;
const RESIZE_DIRECTION = {
  Decreased: 'decreased',
  Increased: 'increased',
  None: 'none',
};

const ResizeContext = createContext<{
  amountChanged: {
    height: number,
    width: number,
  },
  direction: 'increased' | 'none' | 'decreased',
  previousSize: {
    height: number,
    width: number,
  },
  size: {
    height: number,
    width: number,
  },
  time: number,
  velocity: {
    height: number,
    width: number,
  },
}>({
  amountChanged: {
    height: 0,
    width: 0,
  },
  direction: RESIZE_DIRECTION.None,
  previousSize: {
    height: 0,
    width: 0,
  },
  size: {
    height: 0,
    width: 0,
  },
  time: WAIT,
  velocity: {
    height: 0,
    width: 0,
  },
});

export const ResizeProvider = ({ children }: Props) => {
  const { previousSize, size, time } = useResize({
    wait: WAIT,
  });

  const amountChanged = useMemo(
    () => ({
      height: size.height - previousSize.height,
      width: size.width - previousSize.width,
    }),
    [previousSize, size]
  );

  const direction = useMemo(() => {
    if (amountChanged.height < 0) {
      return RESIZE_DIRECTION.Decreased;
    } else if (amountChanged.height > 0) {
      return RESIZE_DIRECTION.Increased;
    } else if (amountChanged.width < 0) {
      return RESIZE_DIRECTION.Decreased;
    } else if (amountChanged.width > 0) {
      return RESIZE_DIRECTION.Increased;
    }
    return RESIZE_DIRECTION.None;
  }, [amountChanged]);

  const velocity = useMemo(
    () => ({
      height: Math.abs(amountChanged.height / time),
      width: Math.abs(amountChanged.width / time),
    }),
    [amountChanged, time]
  );

  const value = useMemo(
    () => ({
      amountChanged,
      direction,
      previousSize,
      size,
      time,
      velocity,
    }),
    [amountChanged, direction, previousSize, size, time, velocity]
  );

  return (
    <ResizeContext.Provider value={value}>{children}</ResizeContext.Provider>
  );
};

type Props = {
  children: Function,
};

export const ResizeConsumer = ResizeContext.Consumer;
export const useResizeContext = () => useContext(ResizeContext);
