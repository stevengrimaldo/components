// @flow
import React from 'react';
import styled from 'styled-components';
import Flex from '../Flex';
import Grid from '../Grid';
import Card from '../Card';
import Container from '../Container';
import type { BgProps } from '../../../global/flow';
import type { CardProps } from '../Card';
import type { FlexProps } from '../Flex';
import type { GridProps } from '../Grid';

const Intro = styled.header`
  + *:not(:empty) {
    margin-top: 40px;
  }
`;

const Wrapper = styled.section`
  counter-reset: section;
  border: 1px dotted red;

  ${p =>
    p.bg &&
    `
    ${p.bg.image ? `background-image: url(${p.bg.image});` : ``}
    ${p.bg.size ? `background-size: ${p.bg.size};` : ``}
    ${p.bg.color ? `background-color: ${p.bg.color};` : ``}
    ${p.bg.position ? `background-position: ${p.bg.position};` : ``}
  `}
`;

const Section = ({
  children,
  compRef,
  flex,
  grid,
  intro,
  stretch,
  unContain = false,
  ...props
}: SectionProps) => {
  return (
    <Wrapper {...props} ref={compRef}>
      {intro && (
        <Intro as={Container} contain={!unContain}>
          <Card {...intro} htmlAs="div" />
        </Intro>
      )}
      {(children || flex || grid) && (
        <Container
          {...(flex || grid || {})}
          as={flex ? Flex : grid ? Grid : null}
          contain={!unContain}
          container
          stretch={stretch}
        >
          {children}
        </Container>
      )}
    </Wrapper>
  );
};

export type SectionProps = {
  bg?: BgProps,
  children?: any,
  compRef?: Function,
  flex?: boolean | FlexProps,
  grid?: boolean | GridProps,
  halfPadding?: boolean,
  halfBottomPadding?: boolean,
  halfTopPadding?: boolean,
  intro?: CardProps,
  noPadding?: boolean,
  noBottomPadding?: boolean,
  noTopPadding?: boolean,
  stretch?: boolean,
  unContain?: boolean,
};

export default Section;
