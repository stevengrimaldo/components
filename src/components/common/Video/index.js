// @flow
import React, { useEffect, useRef } from 'react';

const Video = ({
  compRef,
  files,
  hideControls = false,
  onEnd,
  ...props
}: VideoProps) => {
  const ref = useRef(compRef ? compRef.current : null);

  useEffect(() => {
    if (ref.current) {
      ref.current.onended = () => {
        if (onEnd) {
          onEnd();
        }
      };
    }
  }, [onEnd, ref]);

  return (
    <video {...props} controls={!hideControls} ref={compRef}>
      {files.map((file, i) => (
        <source
          key={`source-${i}`}
          src={file}
          type={`video/${file.split('.').pop()}`}
        />
      ))}
    </video>
  );
};

export type VideoProps = {
  className?: string,
  compRef?: Function,
  files: string[],
  hideControls?: boolean,
  onEnd?: Function,
  poster?: string,
};

export default Video;
