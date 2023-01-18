import React from 'react'

import {
  Seo,
  Layout,
  WaveBackground,
  HeroBubbles,
  Quote,
  TeaserImage,
  AccordionOverlap,
  Stats,
  Marquee,
  GenericText,
  SolutionGrid
} from '../../components'

import {
  metaData,
  heroData,
  missionData,
  visionData,
  jasonData,
  accordionData,
  valuesData,
  statsData,
  awardsData,
  gridData
} from '../../data/pages/about/about';

import * as styles from '../../styles/pages/about.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

export default function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <WaveBackground
          bottom={{
            flipX: false,
            fill_color: "white"
          }} 
          color="grey"
        >
          <HeroBubbles {...heroData} />
        </WaveBackground>

        <div className={styles.teasers}>
          <TeaserImage {...visionData} />
        </div>

        <WaveBackground
          top={{
            flipX: true,
            fill_color: "white"
          }}
          bottom={{
            flipX: true,
            fill_color: "white"
          }}
          color="dark"
        >
          <Quote {...jasonData} />
        </WaveBackground>

        <div className={styles.teasers}>
          <TeaserImage {...missionData} />
        </div>
        
        <AccordionOverlap {...accordionData} />

        <div className={styles.values}>
          <WaveBackground
            top={{
              flipX: false,
              fill_color: "white"
            }}
            bottom={{
              flipX: false,
              fill_color: "dark"
            }}
            color="grey"
          >
            <TeaserImage {...valuesData} />
          </WaveBackground>
        </div>

        <div className={styles.stats}>
          <WaveBackground
            bottom={{
              flipX: true,
              fill_color: "white"
            }}
            color="dark"
          >
            <Stats {...statsData} />
          </WaveBackground>
        </div>

        <div className={styles.awards}>
          <GenericText text={awardsData.text} />

          <Marquee {...awardsData} />

          {/*<div className={styles.cta}>
            <CallToAction 
              cta={
                [
                  {
                    type: "anchor",
                    text: "View more awards",
                    action_type: "link",
                    action_url: "/about/awards",
                    theme: "purple"
                  }
                ] 
              } 
            />
          </div>*/}
        </div>

        <SolutionGrid {...gridData} />

      </div>
    </Layout>
  )
}
