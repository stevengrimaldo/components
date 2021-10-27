// @flow
export type AlignProps = 'left' | 'center' | 'right';

export type GradientProps = {
  colors: {
    color: string,
    location: string,
  }[],
  position: string,
  type: 'linear' | 'radial',
};

export type BgProps = {
  color?: string,
  gradient?: GradientProps,
  image?: string,
  position?: string,
  repeat?: string,
  size?: string,
};

export type RepeatProps = {
  component: any,
  data: any[],
  props?: Object,
};
