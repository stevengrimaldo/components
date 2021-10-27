import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  darkenColor,
  getColumnSpanSize,
  getPercentValue,
  media,
  theme,
  setColumnSpanSize,
} from '../../../global';
import { Card, Flex, Section } from '../../common';

const { color, grid } = theme;

const Container = styled(Flex)`
  margin: 0 -${grid.outerSpacing / 2}px;

  ${media.down.sm`
    margin: 0;
  `}
`;

const WorkCard = styled(Card)`
  position: relative;
  padding: ${grid.columnWidth}px ${grid.outerSpacing}px;
  z-index: 1;
  flex: 1 1 auto;

  > * {
    position: relative;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    border: 1px solid ${darkenColor('grey', 0.1)};
    box-shadow: 9px 9px 0 1px grey;
    z-index: 0;
    padding: 0;
    opacity: 0;
    transition: opacity 500ms, transform 500ms;
    transform: translate(5px, 5px);
  }

  ${p => media.up.xl`
    &:hover {
      &::before {
        opacity: 1;
        transform: translate(0, 0);
      }
    }
  `}
`;

const Work = styled.div`
  flex: 1 1 ${p => (1 / p.columns) * 100}%;
  max-width: ${p => (1 / p.columns) * 100}%;
  padding: 0 ${grid.outerSpacing / 2}px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const RecentWork = ({ columns, work, ...props }) => (
  <Section {...props}>
    <Container container wrap="wrap">
      {work.map((work, i) => (
        <Work columns={columns} hasLink={Boolean(work.link)} key={i}>
          <WorkCard {...work} equalText />
        </Work>
      ))}
    </Container>
  </Section>
);

export default RecentWork;
