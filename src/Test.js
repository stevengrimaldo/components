import React from 'react';
import { useInView } from './hooks';

const Test = () => {
  const { inView, inViewRef } = useInView();

  return (
    <>
      <div style={{ height: '1000px' }} />
      <div
        className={inView ? 'in-view' : ''}
        style={{
          backgroundColor: inView ? 'blue' : 'red',
          height: '1000px',
        }}
        ref={inViewRef}
      />
      <div style={{ height: '1000px' }} />
    </>
  );
};

export default Test;
