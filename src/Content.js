import React from 'react';
import { FeaturedContent } from './components';

const Content = () => (
  <FeaturedContent
    columns={3}
    content={[
      {
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
        text: {
          text: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui quam, consectetur eu risus sit amet, imperdiet aliquam nisl. Phasellus convallis nisi non risus malesuada interdum. Fusce suscipit vehicula orci, sit amet rhoncus lectus iaculis ut.</p>
          `,
        },
        title: {
          subHeadline: 'One Other Thing',
        },
      },
    ]}
    flex={{
      justifyContent: 'flex-end',
      wrap: 'wrap',
    }}
    push="left"
  />
);

export default Content;
