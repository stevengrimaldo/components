import React from 'react';
import { FeaturedContent } from './components';
import parachuteImage from './images/parachute.png';

const Values = () => (
  <FeaturedContent
    columns={4}
    content={[
      {
        items: [
          {
            image: {
              alt: '',
              src: parachuteImage,
            },
            text: {
              text: `
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui quam, consectetur eu risus sit amet, imperdiet aliquam nisl. Phasellus convallis nisi non risus malesuada interdum. Fusce suscipit vehicula orci, sit amet rhoncus lectus iaculis ut.</p>
              `,
            },
            title: {
              subHeadline: 'Hard Refresh',
            },
          },
          {
            image: {
              alt: '',
              src: parachuteImage,
            },
            text: {
              text: `
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui quam, consectetur eu risus sit amet, imperdiet aliquam nisl. Phasellus convallis nisi non risus malesuada interdum. Fusce suscipit vehicula orci, sit amet rhoncus lectus iaculis ut.</p>
              `,
            },
            title: {
              subHeadline: 'Amplify',
            },
          },
          {
            image: {
              alt: '',
              src: parachuteImage,
            },
            text: {
              text: `
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui quam, consectetur eu risus sit amet, imperdiet aliquam nisl. Phasellus convallis nisi non risus malesuada interdum. Fusce suscipit vehicula orci, sit amet rhoncus lectus iaculis ut.</p>
              `,
            },
            title: {
              subHeadline: 'Amplify',
            },
          },
        ],
        itemsProps: {
          alignMedia: 'left',
          templateColumns: '80px 1fr',
        },
      },
      {
        items: [
          {
            image: {
              alt: '',
              src: parachuteImage,
            },
            text: {
              text: `
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui quam, consectetur eu risus sit amet, imperdiet aliquam nisl. Phasellus convallis nisi non risus malesuada interdum. Fusce suscipit vehicula orci, sit amet rhoncus lectus iaculis ut.</p>
              `,
            },
            title: {
              subHeadline: 'Hard Refresh',
            },
          },
          {
            image: {
              alt: '',
              src: parachuteImage,
            },
            text: {
              text: `
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui quam, consectetur eu risus sit amet, imperdiet aliquam nisl. Phasellus convallis nisi non risus malesuada interdum. Fusce suscipit vehicula orci, sit amet rhoncus lectus iaculis ut.</p>
              `,
            },
            title: {
              subHeadline: 'Amplify',
            },
          },
        ],
        itemsProps: {
          alignMedia: 'left',
          templateColumns: '80px 1fr',
        },
      },
    ]}
    flex={{
      justifyContent: 'flex-end',
      wrap: 'wrap',
    }}
    push="right"
  />
);

export default Values;
