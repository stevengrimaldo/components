import React from 'react';
import { RecentWork } from './components';

const Recent = () => (
  <RecentWork
    columns={4}
    work={[
      {
        image: {
          align: 'center',
          src: 'https://via.placeholder.com/150x60',
        },
        link: {
          title: 'View Case Study',
          url: '/',
        },
        text: {
          text:
            'Weve created and maintain the full landscape of digital tool for the worlds largest water heater producer.',
        },
        title: {
          label: 'Website / Native App',
        },
      },
      {
        image: {
          align: 'center',
          src: 'https://via.placeholder.com/150x60',
        },
        link: {
          title: 'View Article',
          url: '/',
        },
        text: {
          text:
            'We shook things up in a major way at the years biggest trade show, with a fully branded 7D VR experience showcasing the full portfolio of LP products',
        },
        title: {
          label: '7D Interactive experience',
        },
      },
      {
        image: {
          align: 'center',
          src: 'https://via.placeholder.com/150x60',
        },
        text: {
          text:
            'We created a flexible, fully tested design system that was ready for rollout across a full line of smart thermostats and the associated app.',
        },
        title: {
          label: 'Hardware Interface Design',
        },
      },
      {
        image: {
          align: 'center',
          src: 'https://via.placeholder.com/150x60',
        },
        text: {
          text:
            'From mobile applications to video walls, weve created a suite of complex data-visualization dashboards that help leaders recognize problems and respond in real-time.',
        },
        title: {
          label: 'Revenue Dashboards',
        },
      },
      {
        image: {
          align: 'center',
          src: 'https://via.placeholder.com/150x60',
        },
        link: {
          title: 'View Article',
          url: '/',
        },
        text: {
          text:
            'Using the HypeBox, we prototyped what it might look like to use AR to create a NFL customized jersey creator.',
        },
        title: {
          label: 'AR Jersey Customizer',
        },
      },
      {
        image: {
          align: 'center',
          src: 'https://via.placeholder.com/150x60',
        },
        link: {
          title: 'View Article',
          url: '/',
        },
        text: {
          text:
            'Ever wanted to communicate like Will did from the Upside Down (sans the whole demogorgons chasing you)? Yeah, we did too.',
        },
        title: {
          label: 'Twitter Installation',
        },
      },
    ]}
  />
);

export default Recent;
