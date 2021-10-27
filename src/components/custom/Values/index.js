import React, {
  useCallback,
  useMemo,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import Hammer from 'react-hammerjs';
import { media, theme } from '../../../global';
import { useInView, useResize } from '../../../hooks';
import { Section } from '../../common';
import Value from './Value';

const { color, grid } = theme;

const initialSlide = 0;
let currentSlide = 0;
let flag = false;
let running = false;

const LEFT = 37;
const RIGHT = 39;

const Slides = styled.div`
  width: calc(100% - 40px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: 40px;

  ${media.down.lg`
    margin-left: 10px;
    width: calc(100% - 10px);
  `}
`;

const Wrapper = styled.section`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  min-height: 1000px;
  width: 100%;
  overflow: hidden;
  background-color: grey;
  z-index: 2;

  > section {
    height: 100%;
    width: 100%;

    > div {
      height: 100%;
      width: 100%;
    }
  }

  ${media.down.lg`
    height: calc(100vh + ${grid.sectionSpacing / 2}px + 48px);
    min-height: auto;
  `}
`;

const Values = ({ label, values, ...props }) => {
  const { inView, inViewRef } = useInView();
  const { size } = useResize({ wait: 150 });
  const isMobile = useMemo(() => size.width <= 959, [size]);
  const [activeSlide, setActiveSlide] = useState(0);
  const finalSlide = values.length - 1;

  const resetProps = () => {
    flag = false;
  };

  const goTo = useCallback(
    slide => () => {
      if (!flag) {
        flag = true;
        currentSlide = slide;
        setActiveSlide(currentSlide);

        setTimeout(() => {
          resetProps();
        }, 1000);
      }
    },
    []
  );

  const handleKeys = useCallback(
    e => {
      e.preventDefault();

      if (e.keyCode === LEFT && activeSlide > initialSlide && inView) {
        goTo(activeSlide - 1)();
      }

      if (e.keyCode === RIGHT && activeSlide < finalSlide && inView) {
        goTo(activeSlide + 1)();
      }
    },
    [activeSlide, finalSlide, goTo, inView]
  );

  const handleSwipe = ({ direction, ...props }) => {
    // push right / pull left
    if (direction === 2 && activeSlide < finalSlide) {
      goTo(activeSlide + 1)();
    }

    // push left / pull right
    if (direction === 4 && activeSlide > initialSlide) {
      goTo(activeSlide - 1)();
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeys);

    return () => {
      window.removeEventListener('keyup', handleKeys);
    };
  }, [handleKeys, inView, size]);

  return (
    <Wrapper ref={inViewRef}>
      <Section {...props}>
        <Hammer
          direction={'DIRECTION_LEFT' | 'DIRECTION_RIGHT'}
          onSwipe={handleSwipe}
        >
          <Slides>
            {values.map((value, i) => {
              const prev = i < activeSlide;
              const active = activeSlide === i;
              const next = i > activeSlide;
              return (
                <Value
                  {...value}
                  active={active}
                  activeIndex={activeSlide}
                  bgColor={props?.bg?.color}
                  clickHandler={goTo}
                  index={i}
                  key={i}
                  label={label}
                  length={values.length}
                  next={next}
                  prev={prev}
                />
              );
            })}
          </Slides>
        </Hammer>
      </Section>
    </Wrapper>
  );
};

export default Values;
