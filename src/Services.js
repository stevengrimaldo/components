import React from 'react';
import { MicroServices } from './components';

const Services = () => (
  <MicroServices
    columns={4}
    services={[
      'Behavioral Research',
      'Persona Development',
      'Workshop Facilitation',
      'Content Auditing & Strategy',
      'Information Architecture',
      'Wireframing',
      'Prototyping',
      'User Interface Design',
      'User Experience Design',
      'Animation and Motion Design',
      'Interactive Installations',
      'AR & VR',
    ]}
  />
);

export default Services;
