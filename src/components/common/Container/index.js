// @flow
import React from 'react';
import styled from 'styled-components';
import { grid } from '../../../global/theme';

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 1px dotted green;

  ${p => p.stretch && `height: inherit;`}

  ${p =>
    p.contain &&
    `
    max-width: ${grid.maxWidth + grid.outerSpacing * 2}px;
    padding-left: ${grid.outerSpacing}px;
    padding-right: ${grid.outerSpacing}px;
  `}
`;

const Container = ({ children, compRef, ...props }: ContainerProps) => {
  return (
    <Wrapper {...props} ref={compRef}>
      {children}
    </Wrapper>
  );
};

export type ContainerProps = {
  children: any,
  className?: string,
  compRef?: Function,
  contain: boolean,
  stretch?: boolean,
};

export default Container;
