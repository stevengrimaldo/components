// @flow
import React, { Children, cloneElement, isValidElement } from 'react';
import styled from 'styled-components';
import type { RepeatProps } from '../../../global/flow';

const Container = styled.div`
  // container props
  ${p => p.container && `display: ${p.inline ? 'inline-flex' : 'flex'};`}

  ${p => p.justifyContent && `justify-content: ${p.justifyContent};`}

  ${p => p.alignContent && `align-content: ${p.alignContent};`}
  ${p => p.alignItems && `align-items: ${p.alignItems};`}

  ${p => p.flow && `flex-flow: ${p.flow};`}
  ${p => p.direction && `flex-direction: ${p.direction};`}
  ${p => p.wrap && `flex-wrap: ${p.wrap};`}

  ${p => p.gap && `gap: ${p.gap};`}
  ${p => p.rowGap && `row-gap: ${p.rowGap};`}
  ${p => p.columnGap && `column-gap: ${p.columnGap};`}

  // children props

  ${p => p.alignSelf && `align-self: ${p.alignSelf};`}

  ${p => p.order && `order: ${p.order};`}

  ${p => p.flex && `flex: ${p.flex};`}
  ${p => p.grow && `flex-grow: ${p.grow};`}
  ${p => p.shrink && `flex-shrink: ${p.shrink};`}
  ${p => p.basis && `flex-basis: ${p.basis};`}
`;

const Flex = ({ children, compRef, repeat, ...props }: FlexProps) => {
  let content = children;

  if (repeat) {
    const { component: Component, data, props, ...extra } = repeat;

    content = data.map((d, i) => (
      <Container {...extra} key={i}>
        <Component {...{ ...d, ...props }} key={i} />
      </Container>
    ));
  }

  return (
    <Container {...props} ref={compRef}>
      {content}
    </Container>
  );
};

type ContainerProps = {
  alignContent?:
    | 'normal'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'start'
    | 'end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe'
    | 'unsafe',
  alignItems?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'start'
    | 'end'
    | 'self-start'
    | 'self-end'
    | 'safe'
    | 'unsafe',
  columnGap?: string,
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
  flow?: string,
  gap?: string,
  inline?: boolean,
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly',
  rowGap?: string,
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse',
};

type ChildrenProps = {
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch',
  basis?: string,
  flex?: string,
  grow?: number,
  order?: number,
  shrink?: number,
};

export type FlexProps = ContainerProps &
  ChildrenProps & {
    children?: any,
    className?: string,
    compRef?: Function,
    container?: boolean,
    repeat?: RepeatProps,
  };

export default Flex;
