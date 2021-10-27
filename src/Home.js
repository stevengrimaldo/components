import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Container, Flex, Grid, Image, Section } from './components';
import bgImage from './images/bg.jpg';
import clientImage from './images/client.jpg';
import sideImage from './images/side.jpg';
import halfImage from './images/half.jpg';
import chairsImage from './images/chairs.jpg';

const Home = () => {
  return (
    <>
      {/* <Section
        flex={{
          repeat: {
            basis: '100%',
            component: Card,
            data: [1, 2, 3, 4, 5],
            props: {
              text: {
                text: `<p>Text.</p>`,
              },
              title: {
                headline: 'Headline',
              },
            },
          },
        }}
      />
      <Section
        grid={{
          autoFlow: 'column',
          repeat: {
            component: Card,
            data: [1, 2, 3, 4, 5],
            props: {
              text: {
                text: `<p>Text.</p>`,
              },
              title: {
                headline: 'Headline',
              },
            },
          },
          templateColumns: 'repeat(auto-fit, minmax(min-content, 1fr))',
        }}
      /> */}
      <Section>
        <Card
          title={{
            pageTitle: `We're into comfort. You're into comfort.`,
          }}
          text={{
            text: `
              <h5>It's only right we found each other. So welcome to the family&mdash;we're so glad you've got your hands on some new Brooklinen goods.</h5>
              <p>Since we started, our journey has taken us beyond the bedroom to bring comfort to every aspect of your home. We believe making aa beaautiful, relaxing space is one of the most important pieces to living well. Like thatt sign of relief when you get home after a long daay, the renewal you get from being cmfortable at home translates into bbeing your best outside of it, too. So whether you're lounging or sleeping, thanks for letting us bring comfort into your world.</p>
            `,
          }}
        />
      </Section>
      <Section>
        <Card
          title={{
            pageTitle: `Anatomy of Brooklinen Cottton`,
          }}
        >
          <Grid
            container
            gap="20px"
            repeat={{
              component: Card,
              data: [1, 2, 3, 4],
              props: {
                count: true,
                text: {
                  text: `
                    <p>The strongest, most durable cotton fabric comes from <strong>long-staple fibers</strong>. It can also be woven into finer yarns without breakage for an extra smooth finish.</p>
                  `,
                },
                title: {
                  featuredText: 'Long-staple Fibers',
                },
              },
            }}
            templateColumns="1fr 1fr"
          />
        </Card>
      </Section>
      <Section>
        <Card
          bg={{
            color: 'lightblue',
          }}
          text={{
            columns: 2,
            text: `
              <p>We're willing to bet our sheets are so comfy, you'll want to sleep au naturel. That's why we makee sure you won't be snuggling up witht any harmful chemicals. All our sheets are independently ttested and certified by the European eco-label OEKO-TEX® to be free of nasties like as Azo colorants, formaldehyde, pentachlorophenol, cadminum, nickel. Good for you. Good for Mother Earth. We wouldn't have it any other way.</p>
            `,
          }}
          title={{
            headline: 'Good for you, Good for Mother Earth',
          }}
        />
      </Section>
      <Section>
        <Grid container gap="40px" templateColumns="1fr 1fr">
          <Card
            text={{
              text: `
                <h5>With a degree in textile science, Product Development Manager, Katie, knows a thing or two about sheet care.</h5>
                <p>Ahh. There's nothing like the feeling of climbing into a brand new, freshly laundered and put together bed. Now if you could only recreate that feeling every day. Well, you can definitely get close iff you foloow a few tips to maintain your bedding.</p>
                <p>When it comes to sheets, it's important to change and launder your sheets weekly. And if that sounds daunting, know that the payoff is real. Our sheets get softer and softer with every wash, and here's a pro-tip: pull them from the dryer a little early and you can skip ironing. Sheets will flatten beautifully if they'ree not fully dry. If you're storing sheets for the season, or just between washes, make sure that they're fully dried, and don't store in plastic to precent moisture being trapped (which will create mildew, which is...ew).</p>
                <p>Cleaning pillows and comforters is as simple as adding an extra rinse cycle to ensure that all the detergent has been washed out. Tumble dry on the lowest heat settting, and viola. For your down pillows and comforteers, take those to the dry cleaner to maintain loft. All pillow and comforter types should be cleaned every 4 months. So change them with the seasons and you'll have comfort that lasts all year.</p>
              `,
            }}
            title={{
              mainHeadline: 'How to make nice with your bedding',
            }}
          />
          <Grid
            alignContent="end"
            className="first"
            container
            repeat={{
              component: Card,
              data: [1, 2, 3, 4, 5],
              props: {
                alignMedia: 'left',
                count: true,
                templateColumns: '80px 1fr',
                text: {
                  text: `
                    <h6>Unbox</h6>
                    <p>This one's simple. Take your sheets and spread 'em out.</p>
                  `,
                },
              },
            }}
          />
        </Grid>
      </Section>
      <Section
        bg={{
          color: 'forestgreen',
        }}
      >
        <Card
          text={{
            columns: 2,
            text: `
              <p>Make your whole bed feel like the cool side of the pillow with our signature long-staple cotton percale sheets.</p>
              <p>Our Classic Collection is the ultimate cool kid on the block. The 270 thread count, percale weave sheets have a fresh, matte finish and were developed with hot sleepers in mind.</p>
              <p>They're constructed to help you snooze soundly and sweat-free all night long.</p>
              <p>Our yarns are woven together to produce aan estremely lightweight and incredibly duraable fabric, aand the one-yarn-over and one-yran-under percaale weave ensures a perfectly crisp feel from the second you slip into bed.</p>
            `,
          }}
          subTitle={{
            featuredText: 'That hotel-sheet feel without leaving home.',
          }}
          title={{
            pageTitle: 'Classic Percale',
          }}
        />
      </Section>
      <Section
        flex={{
          gap: '40px',
          repeat: {
            basis: '100%',
            component: Card,
            data: [1, 2, 3],
            props: {
              text: {
                text: `<p>Turn your ordinary routines into a day-off with this over-the-top soft towel.</p>`,
              },
              title: {
                featuredText: 'The Super-Plush Towel Collection',
              },
            },
          },
        }}
      />
      <Section
        intro={{
          subTitle: {
            label: 'Your weekend (or anytime) uniform',
          },
          title: {
            pageTitle: 'Loungewear',
          },
        }}
      >
        <Grid container templateColumns="1fr 1fr">
          <Card
            text={{
              text: `
                <p>Our ultra-soft, ultra-cozy line of shirts, pants, shorts and nightshirts.</p>
                <p>We're moving beyond the bathroom to bring you comfort as you move, or don't, throughout your home. Wherever you are, we want you to be comfortable, so we created a colleection of simple, high-quality loungewear pieces you'll put on as soon as you get home, and never take off.</p>
              `,
            }}
          />
          <Grid
            className="first"
            container
            repeat={{
              component: Card,
              data: [1, 2, 3],
              props: {
                alignMedia: 'left',
                count: true,
                templateColumns: '80px 1fr',
                text: {
                  text: `
                    <h6>Ultra-Soft</h6>
                    <p>Cotton, terry and modal pieces so soft, you'll never want to take them off.</p>
                  `,
                },
              },
            }}
          />
        </Grid>
      </Section>
      <Section
        intro={{
          text: {
            text: `
              <h5>Luxuriuous and naturally cool to tthe touch, our pillowcases and eye masks enhance your hair, skin and sleep.</h5>
            `,
          },
          title: {
            pageTitle: 'Mulbrery Silk',
          },
        }}
      >
        <Card
          text={{
            columns: 2,
            text: `
              <p>Mulbrery Silk Sleep Masks and Pillowcases are our best-kept beauty secrett. The substantial, 22 momme Silk is cool to the touch, extra durable, and perfectly indulgent.</p>
              <p>These breathable accessories will help you sleep better and wake up looking flawless. Our Sleep Masks and Pillowcases are 100% Mulberry Silk with a luxurious charmeuse weave.</p>
            `,
          }}
        />
      </Section>
      <Section
        intro={{
          text: {
            text: `
              <h5>Our co-foundeer Vicki shares tips from her career in the world of beauty&mdash;and of course, beauty sleep.</h5>
            `,
          },
          title: {
            pageTitle: `Vicki's wake up & wind down routines`,
          },
        }}
      >
        <Card
          text={{
            columns: 3,
            text: `
              <h5>Give yourself a mini facial massage</h5>
              <p>Massaging the skin on your face boosts cell reproduction while you sleep.</p>
              <p><strong>Tip:</strong> Use a bit of lotion or pil with a calming scent to help you fall asleep!</p>
              <h5>Treat yourself to a steamy bath</h5>
              <p>Do this before applying your night creams to open your pores for better penetration.</p>
              <p><strong>Tip:</strong> For added relaxation, pamper yourself with dry pil to detoxify, soften, and even out skin tone.</p>
              <h5>Use essential oils in the shower</h5>
              <p>Don't have time for a full bath? Drop a few beads of your favorite essential oil on your chest for a mini aroma therapy session.</p>
              <p><strong>Tip:</strong> Use lavendar oil for an added calming effect.</p>
              <h5>Don't forget your hands!</h5>
              <p>Apply a heavy moiisturizer before bed to rejuvenate your hardworking hands (and make it harder to use your phone so you fall asleep faster).</p>
              <p><strong>Tip:</strong> Dry skin? Apply a hand mask once per week!</p>
              <h5>Get innto your favorite cozies</h5>
              <p>Might I suggest Loungewear? <em>Wink wink!</em></p>
            `,
          }}
        />
      </Section>
      <Section>
        <Grid container templateColumns="1fr 1fr">
          <Card
            subTitle={{
              label: 'Style Inspiration',
            }}
            text={{
              text: `
                <p>Inspired by naturee, this look includes touches of Scandinavian modernish with clean, functional pieces that are beautiful in their simplicity.</p>
                <p>Mix in natural, organic materials and earth tones to create a tailored but cozy feel. And though this look is also inspired by the deseerets of the southwest, crystals aren't required.</p>
              `,
            }}
            title={{
              mainHeadline: 'Earthy Minimalist',
            }}
          />
          <Card
            text={{
              text: `
                <ol>
                  <li>(Clockwise, left to right): Exit by Madelon Verdoorn for Eventide Collective $211, Santa Fe 01 by Wit & Delight $127, Sprout by Christopher David Ryan $132</li>
                  <li>The Sill Plants and Planters</li>
                  <li>Grid Mug $40, Dot Mug $40</li>
                  <li>Elle Side Table $230</li>
                  <li>Mini Bud Vases $40</li>
                  <li>Wideboy Alarm Clock $50</li>
                  <li>Plug-In Solo Sconce $190</li>
                  <li>Floyd Platform Bed $895 - $1,150</li>
                  <li>Slouch Shade Plug-In Pendant $85</li>
                  <li>Ace Lounge Chair $898</li>
                  <li>LeRoy Grannis. Surf Photogrophy $40</li>
                  <li>The Monocle Guide to Cosy Homes $60, Bon Voyage - Boutique Hotels for the Conscious Traveler $60, Evergreen - Living With Plants $60</li>
                </ol>
              `,
            }}
          />
        </Grid>
      </Section>
      <Section
        bg={{
          image: bgImage,
          size: 'cover',
        }}
        flex={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        stretch
        style={{
          height: '1000px',
        }}
      >
        <Card
          alignContent="center"
          bg={{
            color: 'white',
          }}
          text={{
            text: `
              <h5>#MYBROOKLINENSTYLE</h5>
            `,
          }}
          title={{
            mainHeadline: 'Show us your comforts of home',
          }}
        />
      </Section>
      <Section
        bg={{
          image: bgImage,
          size: 'cover',
        }}
        style={{
          height: '1000px',
        }}
      >
        <Card
          inverted
          text={{
            text: `
              <h6>Some of New York's finest tell us how they create comfort at home.</h6>
            `,
          }}
          title={{
            mainHeadline: 'Unbridled style, captured.',
          }}
        />
      </Section>
      <Section>
        <Grid
          container
          columnGap="40px"
          repeat={{
            component: Card,
            data: [1, 2],
            props: {
              children: (
                <Grid container columnGap="4vw" templateColumns="1fr 1fr">
                  <h5>Levi&rquo;s</h5>
                  <p>
                    We partnered with Levi&rquo;s, an icon of American industry
                    and culture, to reimagin levi.com for a new generation of
                    shoppers and the digital future of retail.
                  </p>
                </Grid>
              ),
              image: {
                alt: '',
                src: clientImage,
              },
            },
          }}
          templateColumns="1fr 1fr"
        />
      </Section>
      <Section>
        <Grid
          columnGap="20px"
          container
          templateColumns="1fr 1fr"
          alignItems="center"
        >
          <Image alt="" src={sideImage} />
          <Grid
            container
            repeat={{
              component: Card,
              data: [1, 2, 3, 4],
              props: {
                text: {
                  text: `
                    <p>We use the power of research and data to uncover insights that lead to transformational change.</p>
                  `,
                },
                title: {
                  subHeadline: 'Insight Driven',
                },
              },
            }}
            rowGap="40px"
          />
        </Grid>
      </Section>
      <Section
        grid={{
          columnGap: '4vw',
          repeat: {
            component: Card,
            data: [1, 2, 3],
            props: {
              alignContent: 'center',
              embed: {
                allow: 'autoplay; picture-in-picture',
                allowFullScreen: true,
                dimensions: {
                  height: 150,
                  width: 112,
                },
                frameBorder: '0',
                src:
                  '//player.vimeo.com/video/424930983?loop=1&background=1&app_id=122963',
              },
              text: {
                text: `
                <p>(503) 928-3188</p>
                <p>hello@instrument.com</p>
              `,
              },
              title: {
                label: 'General',
              },
            },
          },
          templateColumns: '1fr 1fr 1fr',
        }}
      />
      <Section grid={{ container: true, templateColumns: '1fr 1fr' }} unContain>
        <Image alt="" src={halfImage} />
        <Grid alignSelf="center" justifyContent="center">
          <Card
            links={[
              {
                path: '/',
                text: 'Who we are >',
              },
            ]}
            title={{
              headline:
                'We are strategists, designers, producers, engineers, writers, and researchers in Portland, Oregon and Brooklyn, New York.',
            }}
          />
        </Grid>
      </Section>
      <Section unContain>
        <Grid columnGap="4vw" container templateColumns="1fr 1fr">
          <Image alt="" src={chairsImage} />
          <Image alt="" src={chairsImage} />
        </Grid>
        <Container contain>
          <Card
            alignContent="center"
            text={{
              text: `<p>We are global in our vision and our ambition. Frankly, our favorite projects are the ones that create authentic connections across the world. This is about redefining the interactive space and creating new ways of communicating in a restless world. Headquartered in Paris, with offices in London and the US, we are available for worldwide collaboration.</p>`,
            }}
            title={{
              headline: 'Worldwide.',
            }}
          />
        </Container>
      </Section>
    </>
  );
};

Home.getInitialProps = async ({
  req,
  res,
  match,
  history,
  location,
  ...ctx
}) => {
  return { whatever: 'stuff' };
};

export default Home;
