// @flow
import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import Icon from '../Icon';
import { ModalConsumer } from '../../../context';
import type { ModalProps } from '../Modal';

const Container = styled.div``;

const Button = ({
  children,
  compRef,
  download,
  external,
  mailTo,
  modal,
  onClick,
  path,
  tel,
  text,
  type,
  ...props
}: ButtonProps) => {
  let buttonType = type || 'normal';
  let mailToLink = null;
  let telLink = null;

  const isAction = Boolean(onClick);
  const isDownload = Boolean(download);
  const isModal = Boolean(modal);
  const target = external || isDownload ? '_blank' : '';

  if (isAction) buttonType = 'action';
  if (isDownload) buttonType = 'download';
  if (isModal) buttonType = 'modal';

  if (mailTo) {
    let subject;
    const email = mailTo.email ? mailTo.email : '';

    buttonType = 'mailTo';

    mailToLink = `mailto:${email}`;

    if (mailTo.subject) {
      subject = encodeURIComponent(mailTo.subject);

      mailToLink += `?subject=${subject}`;
    }

    if (mailTo.body) {
      const body = encodeURIComponent(mailTo.body);
      const addBody = subject ? `&body=${body}` : `?body=${body}`;

      mailToLink += addBody;
    }
  }

  if (tel) {
    buttonType = 'tel';
    telLink = `tel:${tel}`;
  }

  const cta = {
    action: <span onClick={onClick}>{text || children}</span>,
    download: (
      <a href={path} download="" rel="noopener noreferrer" target={target}>
        {text || children}
      </a>
    ),
    mailTo: <a href={mailToLink}>{text || children}</a>,
    modal: (
      <ModalConsumer>
        {({ showModal }) => (
          <span
            onClick={() => {
              showModal(Modal, modal);
            }}
          >
            {modal && modal.youtubeId && (
              <Icon className="play-icon" icon="Play" />
            )}
            {text || children}
          </span>
        )}
      </ModalConsumer>
    ),
    normal: (
      <a
        href={path}
        rel={external ? 'noopener noreferrer' : ''}
        target={target}
      >
        {text || children}
      </a>
    ),
    tel: <a href={telLink}>{text || children}</a>,
  };

  return (
    <Container {...props} ref={compRef}>
      {cta[buttonType]}
    </Container>
  );
};

export type ButtonProps = {
  children?: any,
  className?: string,
  compRef?: Function,
  download?: boolean,
  external?: boolean,
  inline?: boolean,
  inverted?: boolean,
  mailTo?: {
    body?: string,
    email: string,
    subject?: string,
  },
  modal?: ModalProps,
  onClick?: Function,
  path?: string,
  primary?: boolean,
  secondary?: boolean,
  tel?: string,
  text?: string,
  type?: 'action' | 'download' | 'mailTo' | 'modal' | 'normal' | 'tel',
};

export default Button;
