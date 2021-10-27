import React from 'react';
import styled from 'styled-components';
import {
  getPercentValue,
  media,
  theme,
  setColumnSpanSize,
} from '../../../global';
import { Flex, Section } from '../../common';

const { color, grid } = theme;

const Container = styled(Flex)`
  margin: 0 -${grid.outerSpacing / 2}px;

  ${media.down.sm`
    margin: 0;
  `}
`;

const Service = styled(Flex)`
  flex: 0 1 ${p => (1 / p.columns) * 100}%;
  max-width: ${p => (1 / p.columns) * 100}%;
  padding: 0 ${grid.outerSpacing / 2}px;
  width: 100%;
  border: 1px dotted purple;

  ${media.down.xl`
    max-width: 50%;
    flex: 0 1 50%;
  `}

  ${media.down.sm`
    max-width: 100%;
    flex: 0 1 100%;
  `}
`;

const Text = styled.p`
  padding: ${grid.outerSpacing}px 0;
  border-bottom: 1px solid ${p => (p.inverted ? 'white' : 'grey')};
  color: ${p => (p.inverted ? 'white' : 'grey')};
  flex: 1 1 100%;
`;

const MicroServices = ({ bg, columns, services, ...props }) => (
  <Section {...props} bg={bg}>
    <Container container wrap="wrap">
      {services.map((s, i) => (
        <Service alignItems="flex-end" columns container key={i}>
          <Text inverted={bg && bg.color != null}>{s}</Text>
        </Service>
      ))}
    </Container>
  </Section>
);

export default MicroServices;
