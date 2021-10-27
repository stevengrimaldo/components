// @flow
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { shadeOf } from '../../../global';
import { color, grid } from '../../../global/theme';

const Close = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0;
  right: -12px;
  z-index: 5;
  cursor: pointer;

  &::before,
  &::after {
    display: block;
    content: '';
    width: 5px;
    height: 30px;
    border-radius: 10px;
    background-color: ${color.white};
    position: absolute;
    top: 50%;
    left: 50%;
    transition: transform 300ms;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover {
    &::before,
    &::after {
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }
`;

// prettier-ignore
const Container = styled.div`
  max-width: ${p => (p.isGallery ? 1450 : grid.maxWidth)}px;
  width: calc(100% - 40px);
  position: relative;
  padding-top: 50px;
  max-height: 82vh;

  ${p => p.hasChildren && `
    height: 100%;
  `}
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  height: calc(100% - 20px);
  justify-content: center;
  overflow: auto;
  padding-top: 20px;
  width: 100%;
  -webkit-overflow-scrolling: touch;
`;

// prettier-ignore
const Media = styled.div`
  display: ${p => (p.ended ? 'none' : 'block')};

  ${p => p.hasChildren && `
    height: 100%;
  `}
`;

// the feedback banner has a crazy high z-index, so we set this to be 1 higher
// prettier-ignore
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2147483641;
  background-color: ${shadeOf(color.black, 0.5)};
  padding-bottom: 30px;
  width: 100%;
  height: 100%;
  overflow: auto;
  transition: opacity 250ms ease-in-out;

  ${p => p.open ? `
    opacity: 1;
  ` : `
    opacity: 0;
    pointer-events: none;
    cursor: none;
  `}
`;

const Modal = ({ children, closeHandler, ...props }: ModalProps) => {
  const handleChildClick = (e: SyntheticMouseEvent<>) => e.stopPropagation();

  return (
    <Wrapper {...props} onClick={closeHandler}>
      <Content>
        <Container hasChildren={Boolean(children)} onClick={handleChildClick}>
          <Close onClick={closeHandler} />
          {children}
        </Container>
      </Content>
    </Wrapper>
  );
};

export type ModalProps = {
  className?: string,
  children?: Node,
  closeHandler: Function,
  open?: boolean,
  youtubeId?: string,
};

export default Modal;
