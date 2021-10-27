// @flow
import React from 'react';
import styled from 'styled-components';

const Frame = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  padding-bottom: ${p => p.d.height / (p.d.width / 100)}%;

  ${p => p.maxHeight && `max-height: ${p.maxHeight};`}
  ${p => p.maxWidth && `max-width: ${p.maxWidth};`}
`;

const Embed = ({
  className,
  compRef,
  dimensions,
  height,
  width,
  ...props
}: EmbedProps) => (
  <Container
    className={className}
    d={dimensions}
    maxHeight={height}
    maxWidth={width}
    ref={compRef}
  >
    <Frame {...props} />
  </Container>
);

export type EmbedProps = {
  allow?: string,
  allowFullScreen?: boolean,
  className?: string,
  compRef?: Function,
  dimensions: {
    height: number,
    width: number,
  },
  height?: string,
  frameBorder?: string,
  src: string,
  width?: string,
};

export default Embed;
