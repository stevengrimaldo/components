// @flow
import React from 'react';
import { asyncComponent } from '@jaredpalmer/after';

export default [
  {
    component: asyncComponent({
      loader: () => import('./Home'),
    }),
    exact: true,
    path: '/',
  },
  {
    component: asyncComponent({
      loader: () => import('./New'),
    }),
    exact: true,
    path: '/new',
  },
  {
    component: asyncComponent({
      loader: () => import('./Work'),
    }),
    exact: true,
    path: '/work',
  },
  {
    component: asyncComponent({
      loader: () => import('./Test'),
    }),
    exact: true,
    path: '/test',
  },
  {
    component: asyncComponent({
      loader: () => import('./Content'),
    }),
    exact: true,
    path: '/content',
  },
  {
    component: asyncComponent({
      loader: () => import('./ContentCarousel'),
    }),
    exact: true,
    path: '/content-carousel',
  },
  {
    component: asyncComponent({
      loader: () => import('./Values'),
    }),
    exact: true,
    path: '/values',
  },
  {
    component: asyncComponent({
      loader: () => import('./Services'),
    }),
    exact: true,
    path: '/services',
  },
  {
    component: asyncComponent({
      loader: () => import('./Recent'),
    }),
    exact: true,
    path: '/recent',
  },
];
