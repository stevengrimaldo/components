import React from 'react';
import styled from 'styled-components';
import {
  getColumnSpanSize,
  getPercentValue,
  media,
  parseContent,
  theme,
} from '../../../../global';
import { Image } from '../../../common';
import Nav from '../Nav';

const { color } = theme;

const Content = styled.div`
  transform: translateX(-40px);
  width: calc(100% + 40px);

  ${media.up.lg`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  `}

  ${media.down.lg`
    transform: translateX(-10px);
    width: calc(100% + 10px);
    text-align: center;
  `}
`;

const ContentImage = styled(Image)`
  width: 100%;
  flex: 1 1 ${getPercentValue(getColumnSpanSize(5))};
  max-width: ${getColumnSpanSize(5)}px;
  padding-left: 32px;

  ${media.down.lg`
    max-width: 100%;
    padding-left: calc(8vw + 10px);
    padding-right: 8vw;
    margin-bottom: -48px;
  `}
`;

const Copy = styled.div`
  padding-bottom: 4.5vw;
  width: 100%;
  flex: 1 1 ${getPercentValue(getColumnSpanSize(6))};
  max-width: ${getColumnSpanSize(6)}px;
  transition: padding 300ms;
  text-align: left;

  ${media.down.xl`
    padding-bottom: 0;
  `}

  ${media.down.lg`
    max-width: none;
    padding-bottom: 8vw;
  `}
`;

const Text = styled.p`
  margin-top: 32px;
  max-width: ${getColumnSpanSize(5)}px;
  width: 100%;
  margin-right: auto;

  ${media.down.lg`
    max-width: none;
    margin-top: 16px;
  `}
`;

const Title = styled.h1``;

// prettier-ignore
const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  padding: 4.5vw 4.5vw 4.5vw 0;
  z-index: ${p => (p.index - p.length) * -1};

  &:last-of-type {
    background-color: ${p =>
    p.bgColor && p.bgColor === 'white' ? 'grey' : 'white'};
  }

  ${Title}, ${Text}, ${ContentImage} {
    transition-property: opacity, transform;
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;
  }

  ${p => !p.active ? `
    ${Title}, ${Text}, ${ContentImage} {
      opacity: 0;
    }

    ${Title} {
      transition-delay: 100ms;
    }

    ${ContentImage} {
      transition-delay: 200ms;
    }
  ` : `
    ${ContentImage} {
      transition-delay: 500ms;
    }

    ${Title} {
      transition-delay: 600ms;
    }

    ${Text} {
      transition-delay: 700ms;
    }
  `}

  ${p => p.prev && `
    ${Title}, ${Text}, ${ContentImage} {
      opacity: 0;
      transform: translateY(40px);
    }
  `}

  ${p => p.next && `
    ${Title}, ${Text}, ${ContentImage} {
      opacity: 0;
      transform: translateY(40px);
    }
  `}

  ${media.down.lg`
    padding-right: 0;
    padding-top: calc(110px + 24px + 32px);
    padding-bottom: 0;
  `}
`;

const Value = ({
  active,
  activeIndex,
  bgColor,
  clickHandler,
  copy,
  image,
  index,
  label,
  length,
  next,
  prev,
}) => (
  <Wrapper
    active={active}
    bgColor={bgColor}
    index={index}
    length={length}
    next={next}
    prev={prev}
  >
    {index === 0 && (
      <Nav
        activeIndex={activeIndex}
        clickHandler={clickHandler}
        label={label}
        length={length}
      />
    )}
    <Content>
      <Copy>
        <Title as="h3" secondary>
          {copy.title}
        </Title>
        <Text dangerouslySetInnerHTML={parseContent(copy.text)} featured />
      </Copy>
      <ContentImage {...image} />
    </Content>
  </Wrapper>
);

export default Value;
