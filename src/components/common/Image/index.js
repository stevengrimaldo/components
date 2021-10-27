// @flow
import React from 'react';
import styled from 'styled-components';
import type { AlignProps } from '../../../global/flow';

const Img = styled.img`
  width: auto;
  height: auto;
  max-height: ${p => (p.height ? p.height : 'none')};
  max-width: ${p => (p.width ? p.width : '100%')};
  display: inline-block;
  vertical-align: middle;
`;

const Container = styled.figure`
  text-align: ${p => (p.align ? p.align : 'center')};

  a {
    display: block;
    vertical-align: middle;
  }
`;

const Image = ({
  alt,
  height,
  link,
  onLoad,
  src,
  width,
  ...props
}: ImageProps) => {
  const imageEl = <Img alt={alt} onLoad={onLoad} src={src} width={width} />;
  const image = Boolean(link) ? <a {...link}>{imageEl}</a> : imageEl;
  return <Container {...props}>{image}</Container>;
};

export type ImageProps = {
  align: AlignProps,
  alt: string,
  className?: string,
  height?: number,
  link?: {
    href: string,
    rel?: string,
    target?: '_self' | '_blank' | '_parent' | '_top',
  },
  onClick?: Function,
  onLoad?: Function,
  src: string,
  width?: number,
};

export default Image;
