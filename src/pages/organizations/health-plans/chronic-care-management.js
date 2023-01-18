import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  Seo,
  Layout,
  WaveBackground,
  HeroPill,
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
} from '../../../data/pages/organizations/health-plans/health-plans-chronic-care';

import * as styles from '../../../styles/pages/healthPlansChronicCare.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

export default function HealthPlansChronicCare() {
  return (
    <Layout>
      <div className={styles.healthPlansChronicCare}>
        <HeroPill {...heroData} />

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
