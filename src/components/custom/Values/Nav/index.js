import React from 'react';
import styled from 'styled-components';
import { media, theme } from '../../../../global';
import { Card } from '../../../common';

const { color } = theme;

const Box = styled.span`
  border: 2px solid red;
  height: 40px;
  position: absolute;
  transition: all 900ms ease;
  z-index: 0;
  width: 55px;
  top: 0;
  left: 0;
`;

// prettier-ignore
const NavItem = styled.div`
  width: 55px;
  height: 40px;
  border: 2px solid transparent;
  text-align: center;
  cursor: pointer;
  z-index: 1;

  ${p => media.up.lg`
    ${p.active ? `
      ~ span {
        transform: translateX(${p.activeIndex * 55}px);
      }
    ` : ``}

    &:hover {
      ~ span {
        transform: translateX(${p.index * 55}px);
      }
    }
  `}

  ${p => media.down.lg`
    transition: transform 900ms ease;
    transform: translateX(-${p.activeIndex * 55}px);
  `}
`;

const NavItems = styled.div`
  display: flex;
  position: relative;
  margin-top: 32px;
  transform: translateX(20px);
  width: calc(100% - 20px);

  ${media.down.lg`
    margin-top: 16px;
  `}
`;

// prettier-ignore
const NavItemText = styled.p`
  line-height: 36px;

  ${p => p.active && `
    color: red;
  `}

  ${media.down.lg`
    line-height: 36px;
  `}
`;

const NavWrapper = styled.div`
  transform: translateX(-40px);
  width: calc(100% + 40px);

  ${media.down.lg`
    transform: translateX(-10px);
    width: calc(100% + 10px);
  `}
`;

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 6;
  width: 100%;

  ${media.up.lg`
    padding-top: 3.5vw;
  `}

  ${media.down.lg`
    height: calc(110px + 24px);
    padding-top: 16px;
    background-color: white;
  `}
`;

const Nav = ({ activeIndex, clickHandler, label, length }) => (
  <Wrapper>
    <NavWrapper>
      <Card title={{ subHeadline: label }} />
      <NavItems>
        {Array.from({ length }, (v, i) => (
          <NavItem
            active={activeIndex === i}
            activeIndex={activeIndex}
            index={i}
            key={i}
            onClick={clickHandler(i)}
          >
            <NavItemText>0{i + 1}</NavItemText>
          </NavItem>
        ))}

        <Box />
      </NavItems>
    </NavWrapper>
  </Wrapper>
);

export default Nav;
