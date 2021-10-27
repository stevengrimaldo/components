// @flow
import React from 'react';
import styled from 'styled-components';
import { matchIcon } from '../../../icons';

const Wrapper = styled.div`
  svg {
    height: auto;
    width: auto;
    max-height: 100%;
    max-width: 100%;
  }
`;

const Icon = ({ compRef, icon, ...props }: IconProps) => {
  const Icon = matchIcon[icon];

  return (
    <Wrapper {...props} ref={compRef}>
      <Icon />
    </Wrapper>
  );
};

export type IconProps = {
  className?: string,
  compRef?: Function,
  icon: Function,
  inverted?: boolean,
  onClick?: Function,
};

export default Icon;
