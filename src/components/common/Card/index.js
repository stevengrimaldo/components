// @flow
import React from 'react';
import styled from 'styled-components';
import { media } from '../../../global';
import Grid from '../Grid';
import Image from '../Image';
import Icon from '../Icon';
import Embed from '../Embed';
import Video from '../Video';
import Title from '../Title';
import Wysiwyg from '../Wysiwyg';
import Button from '../Button';
import type { AlignProps, BgProps } from '../../../global/flow';
import type { ImageProps } from '../Image';
import type { ButtonProps } from '../Button';
import type { TitleProps } from '../Title';
import type { WysiwygProps } from '../Wysiwyg';
import type { VideoProps } from '../Video';
import type { EmbedProps } from '../Embed';

const TIMING = 300;

// prettier-ignore
const CardCount = styled.div`
  &:before {
    counter-increment: section;
    content: counter(section, decimal-leading-zero);
  }

  ${p => p.alignMedia && `
    &:after {
      content: '\\2014';
      padding-left: 10px;
    }
  `}
`;

// prettier-ignore
const CardImage = styled(Image)`
  ${p => p.clipImage && `
    background-clip: content-box;
    clip-path: inset(0 0);
    transition: clip-path ${TIMING}ms;
  `}
`;

const CardIcon = styled(Icon)``;

const CardEmbed = styled(Embed)``;

const CardVideo = styled(Video)``;

const CardSubTitle = styled(Title)``;

const CardTitle = styled(Title)``;

const CardText = styled(Wysiwyg)``;

const CardButton = styled(Button)``;

// prettier-ignore
const Content = styled.div`
  ${p => p.equalHeight && `
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
  `}
`;

// prettier-ignore
const Container = styled.article`
  ${p => p.alignContent && `text-align: ${p.alignContent};`}
  ${p => p.bg && `
    padding: 20px;
    ${p.bg.color ? `background-color: ${p.bg.color};` : ``}
  `}

  ${p => p.equalHeight && `
    height: 100%;
    display: flex;
    flex-direction: column;

    ${CardText} {
      flex: 1 1 100%;
    }
  `}

  ${p => p.clip && `
    ${Content} {
      transition: padding ${TIMING}ms;
    }

    ${CardImage} {
      background-clip: content-box;
      clip-path: inset(0 0);
      transition: clip-path ${TIMING}ms;
    }
  `}

  ${p => media.up.xl`
    &:hover {
      ${p.clip ? `
        ${CardImage} {
          clip-path: inset(5px 5px);
        }

        ${Content} {
          padding: 0 5px;
        }
      ` : ``
      }
    }
  `}
`;

const Header = styled.header`
  h1 + *,
  h2 + *,
  h3 + *,
  h4 + *,
  h5 + * {
    margin-top: 10px;
  }
`;

const Card = ({
  alignMedia,
  children,
  clip,
  compRef,
  count,
  embed,
  equalHeight,
  htmlAs,
  icon,
  image,
  inverted,
  items,
  itemsProps,
  links,
  onClick,
  subTitle,
  text,
  title,
  video,
  ...props
}: CardProps) => {
  return (
    <Container
      {...props}
      as={htmlAs ? htmlAs : alignMedia === 'left' ? Grid : null}
      clip={clip}
      container
      equalHeight={equalHeight}
      ref={compRef}
    >
      {count && <CardCount alignMedia={alignMedia} inverted={inverted} />}
      {icon && <CardIcon icon={icon} />}
      {image && <CardImage {...image} />}
      {video && <CardVideo {...video} />}
      {embed && <CardEmbed {...embed} />}
      {(subTitle || title) && (
        <Header>
          {subTitle && <CardSubTitle {...subTitle} inverted={inverted} />}
          {title && <CardTitle {...title} inverted={inverted} />}
        </Header>
      )}
      {text && <CardText {...text} inverted={inverted} unContain />}
      {items &&
        items.map((item, i) => (
          <Card {...{ ...item, ...itemsProps }} key={i} />
        ))}
      {children}
      {links &&
        links.map((link, i) => (
          <CardButton {...link} inverted={link.inverted ?? inverted} key={i} />
        ))}
    </Container>
  );
};

type CardShape = {
  alignContent?: AlignProps,
  alignMedia?: 'left' | 'top',
  bg?: BgProps,
  children?: any,
  className?: string,
  clip?: boolean,
  compRef?: Function,
  count?: boolean,
  embed?: EmbedProps,
  equalHeight?: boolean,
  htmlAs?: string | Function,
  icon?: string,
  image?: ImageProps,
  inverted?: boolean,
  links?: ButtonProps[],
  onClick?: Function,
  path?: string,
  subTitle?: TitleProps,
  text?: WysiwygProps,
  title?: TitleProps,
  video?: VideoProps,
};

export type CardProps = CardShape & {
  items?: CardShape[],
  itemsProps?: CardShape,
};

export default Card;
