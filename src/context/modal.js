// @flow
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext<{
  component: ?Function,
  hideModal: Function,
  props: Object,
  showModal: Function,
}>({
  component: null,
  hideModal: () => {},
  props: {},
  showModal: () => {},
});

export const ModalProvider = ({ children }: Props) => {
  const showModal = (component, props = {}) => {
    setState(prev => ({
      ...prev,
      component,
      props: { ...props, open: true },
    }));
  };

  const hideModal = () => {
    setState(prev => ({
      ...prev,
      component: null,
      props: {
        open: false,
      },
    }));
  };

  const [state, setState] = useState({
    component: null,
    hideModal,
    props: {
      open: false,
    },
    showModal,
  });

  return (
    <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
  );
};

type Props = {
  children: Function,
};

export const ModalConsumer = ModalContext.Consumer;
export const useModalContext = () => useContext(ModalContext);
