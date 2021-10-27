// @flow
import React, { useEffect, useRef, useState } from 'react';
import { throttle } from '../global/utils';
import useScroll from './useScroll';

const useInView = () => {
  const { position } = useScroll({});
  const inView: { current: boolean } = useRef(false);
  const [ready, setReady] = useState(false);
  const inViewRef = useRef<?HTMLDivElement>(null);

  useEffect(() => {
    if (inViewRef.current) {
      const { bottom, top } = inViewRef.current.getBoundingClientRect();
      const eTop = top;
      const cBottom = window.innerHeight;
      const eBottom = bottom;
      const inVertically = eTop <= cBottom && eBottom >= 0;

      if (inVertically) {
        inView.current = true;
      } else {
        inView.current = false;
      }

      setReady(true);
    }
  }, [position.y]);

  return { inView: inView.current, inViewRef };
};

export default useInView;
