import React from 'react';
import styled from 'styled-components';
import { Card, Flex, Section } from '../../common';
import {
  getColumnSpanSize,
  getPercentValue,
  media,
  theme,
  setColumnSpanSize,
} from '../../../global';

const { grid } = theme;

// prettier-ignore
const Content = styled.div`
  width: 100%;
  border: 1px dotted purple;

  ${p => p.offsetContent ? `
    ${p.justifyContent && p.justifyContent === 'center' ? `
      padding: 0 ${getPercentValue(grid.columnWidth / 2)};
    ` : `
      padding-${
        p.push && p.push === 'left' ? 'left' : 'right'
      }: ${getPercentValue(grid.columnWidth)};
    `}

    flex: 0 0 ${setColumnSpanSize(p.columns)};
    max-width: ${getColumnSpanSize(p.columns)}px;
  ` : `
    flex: 0 0 ${(1 / p.columns) * 100}%;
    max-width: ${(1 / p.columns) * 100}%;
    padding: 0 ${grid.outerSpacing / 2}px;
  `}

  ${media.down.xl`
    flex: 0 0 50%;
    max-width: 50%;
    padding-left: 0;
    padding-right: ${getPercentValue(grid.columnWidth / 2)};
    padding-bottom: ${grid.columnWidth / 2}px;

    div, img {
      display: block;
      width: 100%;
    }
  `}

  ${media.down.lg`
    flex: 0 0 100%;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: ${grid.outerSpacing}px;
  `}
`;

// prettier-ignore
const Container = styled(Flex)`
  ${p => !p.offsetContent && `
    margin: 0 -${grid.outerSpacing / 2}px;
  `}

  ${media.down.xl`
    justify-content: flex-start;
  `}

  ${media.down.sm`
    margin: 0;
  `}
`;

const FeaturedContent = ({
  children,
  columns,
  content,
  flex,
  push,
  removeOffset = false,
  ...props
}) => (
  <Section {...props}>
    <Container {...flex} container offsetContent={!removeOffset}>
      {content.map((item, i) => (
        <Content
          {...flex}
          columns={columns || content.length}
          key={i}
          offsetContent={!removeOffset}
          push={push}
        >
          <Card {...item} />
        </Content>
      ))}
    </Container>
  </Section>
);

export default FeaturedContent;
