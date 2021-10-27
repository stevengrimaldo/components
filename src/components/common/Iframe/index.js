// @flow
import React from 'react';
import styled from 'styled-components';

const Frame = styled.iframe`
  height: ${p => (p.height ? p.height : '100%')};
  width: ${p => (p.width ? p.width : '100%')};
`;

const Iframe = ({ embedUrl, params, ...props }: IframeProps) => {
  const encodeQueryData = par => {
    const ret = Object.keys(par).map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(par[key])}`
    );
    return ret.join('&');
  };

  const visualizerEmbedUrl = params
    ? `${embedUrl}?${encodeQueryData(params)}`
    : embedUrl;

  return <Frame {...props} src={visualizerEmbedUrl} />;
};

export type IframeProps = {
  className?: string,
  embedUrl: string,
  height?: string,
  params?: Object,
  props?: Object,
  width?: string,
};

export default Iframe;
