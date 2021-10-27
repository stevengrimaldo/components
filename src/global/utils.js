// @flow
import React from 'react';
import { css } from 'styled-components';
import { darken, lighten, rgba, stripUnit } from 'polished';
import { grid } from './theme';

const { columnWidth, gutterWidth, maxWidth } = grid;

export const isServer = typeof window === 'undefined';
export const isBrowser = !isServer;

export const breakpoints = {
  lg: 960,
  md: 768,
  sm: 667,
  xl: 1024,
  xs: 480,
  xxl: 1440,
  xxs: 375,
  xxxl: 1950,
  xxxs: 320,
};

type ConditionWrapper = {
  children: any,
  condition: any,
  wrapper: any,
};

export const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionWrapper) => (condition ? wrapper(children) : <>{children}</>);

/**
 * Searches through a string and wraps all iframes in a div to maintain aspect ratio
 */
export const convertIframeEmbed = (str: string) =>
  str
    .replace(/<iframe/g, '<div class="maintain-ratio video"><iframe')
    .replace(/<\/iframe>/g, '</iframe></div>');

/**
 * Searches through a string and converts special characters to superscripts
 */
export const convertSpecialCharacters = (str: string): string =>
  str.replace(/®/g, '<sup>&reg;</sup>').replace(/™/g, '<sup>&trade;</sup>');

export const darkenColor = (color: string, number: number): string =>
  darken(number, color);

/**
 * Based on the number of columns you want, this will determine the pixel size it takes up including the gutters.
 */
export const getColumnSpanSize = (columns: number): number => {
  const columnTotal = columns * columnWidth;
  const gutterCount = columns < 1 ? columns : Math.round(columns) - 1;
  const gutterTotal = gutterCount > 0 ? gutterCount * gutterWidth : 0;
  return columnTotal + gutterTotal;
};

/**
 * Returns a percentage based value for setting horizontal based css rules.
 */
export const getPercentValue = (
  size: number | string,
  container?: number = maxWidth
) => {
  const value = isPx(size) ? toUnitless(size) : Number(size);
  return `${(value / container) * 100}%`;
};

export const isPx = (value: string | number): boolean => {
  return value.toString().indexOf('px') > -1;
};

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units
const bpSize = (value, breakpoints) => {
  if (breakpoints[value] != null) {
    return `${breakpoints[value]}px`;
  }

  if (isPx(value)) {
    return value;
  }

  return `${value}px`;
};

export const lightenColor = (color: string, number: number): string =>
  lighten(number, color);

export const media = {
  between: (fbp: string, sbp: string) => (...args: Object) =>
    css`
      @media (min-width: ${bpSize(fbp, breakpoints)}) and (max-width: ${bpSize(
          sbp,
          breakpoints
        )}) {
        ${css(...args)}
      }
    `,
  down: Object.keys(breakpoints).reduce((acc, label) => {
    const size = breakpoints[label] - 1;
    acc[label] = (...args: Object) => css`
      @media (max-width: ${size}px) {
        ${css(...args)}
      }
    `;
    return acc;
  }, {}),
  greaterThan: (bp: string) => (...args: Object) =>
    css`
      @media (min-width: ${bpSize(bp, breakpoints)}) {
        ${css(...args)}
      }
    `,
  lessThan: (bp: string) => (...args: Object) =>
    css`
      @media (max-width: ${bpSize(bp, breakpoints)}) {
        ${css(...args)}
      }
    `,
  up: Object.keys(breakpoints).reduce((acc, label) => {
    const size = breakpoints[label];
    acc[label] = (...args: Object) => css`
      @media (min-width: ${size}px) {
        ${css(...args)}
      }
    `;
    return acc;
  }, {}),
};

type InnerHtml = {
  __html: string,
};

export const parseContent = (content: string, max?: number): InnerHtml => {
  let richText;

  if (content == null) {
    richText = '';
  } else {
    richText = convertSpecialCharacters(content);
    richText = convertIframeEmbed(richText);
  }

  return {
    __html: max ? truncateWithEllipses(richText, max) : richText,
  };
};

/**
 * Utilizes the getColumnSpanSize function with the getPercentValue function to return a combined value of the amount of columns you want to span across.
 */
export const setColumnSpanSize = (
  columns: number,
  container?: number = maxWidth
): string => {
  const totalWidth = getColumnSpanSize(columns);
  return getPercentValue(totalWidth, container);
};

export const setWidth = (
  width: number,
  container: number = maxWidth
): string => {
  return getPercentValue(width, container);
};

export const shadeOf = (color: string, opacity: number): string =>
  rgba(color, opacity);

export const toUnitless = (value: string | number): number =>
  Number(stripUnit(value));

/**
 * Trims the text based off of the number you pass to it and adds an ellipses
 */
export const truncateWithEllipses = (text: string, max: number): string =>
  text.substr(0, max - 1) + (text.length > max ? '&hellip;' : '');

export const throttle = (fn: Function, wait: number) => {
  let time = Date.now();

  return () => {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
};

export const debounce = (fn: Function, wait: number) => {
  let interval;

  return () => {
    clearTimeout(interval);

    interval = setTimeout(() => {
      interval = null;
      fn();
    }, wait);
  };
};
