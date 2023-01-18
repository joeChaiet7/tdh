import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  Seo,
  Layout,
  WaveBackground,
  HeroCircle,
  ImageGrid,
  Stats,
  TeaserApp,
  AccordionFaq,
  Slider
} from '../../../components'

import {
  metaData,
  pageData,
  heroData,
  gridData,
  statsData,
  testimonialData,
  teaserData,
  accordionData,
  resourcesData
} from '../../../data/pages/organizations/employers/employers-chronic-care';

import * as styles from '../../../styles/pages/employersChronicCare.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

export default function EmployersChronicCare() {
  return (
    <Layout>
      <div className={styles.employersChronicCare}>
        <HeroCircle {...heroData} />

        <ImageGrid {...gridData} />

        <WaveBackground
          top={{
            flipX: true
          }}
          bottom={{
            flipX: true,
            fill_color: "grey"
          }}
          color="dark"
        >
          <div className={styles.stats}>
            <Stats {...statsData} />
          </div>
        </WaveBackground>

        <div className={styles.slider}>
          <WaveBackground
            bottom={{
              flipX: true,
            }}
            color="grey"
          >
            <Slider {...testimonialData} />
          </WaveBackground>
        </div>

        <TeaserApp {...teaserData} />

        <AccordionFaq {...accordionData} />

        <Slider {...resourcesData} />

        {pageData.disclaimer && 
          <div className={styles.disclaimer}>
            <ReactMarkdown>{pageData.disclaimer}</ReactMarkdown>
          </div>
        }
      </div>
    </Layout>
  )
}
