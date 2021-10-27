// @flow
import React from 'react';
import styled from 'styled-components';
import { parseContent } from '../../../global';
import type { AlignProps } from '../../../global/flow';

const Container = styled.div`
  ${p => p.align && `text-align: ${p.align};`};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li {
    margin: 0;
    ${p => p.inverted && `color: white;`}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Shippori Mincho', serif;
  }

  h1,
  h2,
  h3 {
    font-weight: 800;
  }

  h4,
  h5,
  h6 {
    font-weight: 500;
  }

  h1 {
    font-size: 7rem;
    letter-spacing: -0.3rem;
  }

  h2 {
    font-size: 6rem;
    letter-spacing: -0.2rem;
  }

  h3 {
    font-size: 5rem;
    letter-spacing: -0.1rem;
  }

  h4 {
    font-size: 4rem;
  }

  h5 {
    font-size: 3rem;
  }

  h6 {
    font-size: 2rem;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 3rem;
    letter-spacing: 0.08rem;
  }

  ${p =>
    p.columns &&
    `
    columns: ${p.columns};
    column-gap: 40px;
    column-fill: balance;
  `}
`;

const Wysiwyg = ({ children, compRef, text, ...props }: WysiwygProps) => {
  return (
    <Container
      {...props}
      dangerouslySetInnerHTML={parseContent(text)}
      ref={compRef}
    >
      {children}
    </Container>
  );
};

export type WysiwygProps = {
  align?: AlignProps,
  children?: any,
  className?: string,
  columns?: number,
  compRef?: Function,
  inverted?: boolean,
  text: string,
};

export default Wysiwyg;
