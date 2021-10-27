// @flow
import React from 'react';
import styled from 'styled-components';
import { ConditionalWrapper, parseContent } from '../../../global';
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
`;

const Title = ({
  compRef,
  featuredText,
  headline,
  label,
  link,
  mainHeadline,
  pageTitle,
  subHeadline,
  text,
  tag,
  ...props
}: TitleProps) => {
  let type = 'default';

  if (label) {
    type = 'label';
  } else if (featuredText) {
    type = 'featuredText';
  } else if (headline) {
    type = 'headline';
  } else if (mainHeadline) {
    type = 'mainHeadline';
  } else if (pageTitle) {
    type = 'pageTitle';
  } else if (subHeadline) {
    type = 'subHeadline';
  } else if (text) {
    type = 'text';
  }

  const tagMap = {
    default: {
      tag: null,
      value: null,
    },
    featuredText: {
      tag: 'h5',
      value: featuredText,
    },
    headline: {
      tag: 'h3',
      value: headline,
    },
    label: {
      tag: 'h6',
      value: label,
    },
    mainHeadline: {
      tag: 'h2',
      value: mainHeadline,
    },
    pageTitle: {
      tag: 'h1',
      value: pageTitle,
    },
    subHeadline: {
      tag: 'h4',
      value: subHeadline,
    },
    text: {
      tag: 'p',
      value: text,
    },
  };

  const Tag = tagMap[type].tag;
  const Text = tagMap[type].value;

  if (Tag == null || Text == null) return null;

  const header = link ? (
    <Tag as={tag}>
      <a
        dangerouslySetInnerHTML={parseContent(Text)}
        download={link.download ? '' : null}
        href={link.path}
        rel="noreferrer"
        target={link.external || link.download ? '_blank' : '_self'}
      />
    </Tag>
  ) : (
    <Tag as={tag} dangerouslySetInnerHTML={parseContent(Text)} />
  );

  return (
    <Container {...props} ref={compRef}>
      {header}
    </Container>
  );
};

type LinkProps = {
  download?: boolean,
  external?: boolean,
  path: string,
};

export type TitleProps = {
  align?: AlignProps,
  className?: string,
  compRef?: Function,
  featuredText?: string,
  headline?: string,
  inverted?: boolean,
  label?: string,
  link?: LinkProps,
  mainHeadline?: string,
  pageTitle?: string,
  subHeadline?: string,
  text?: string,
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p',
};

export default Title;
