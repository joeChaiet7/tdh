import React from 'react'
import ReactMarkdown from 'react-markdown';

import {
  Seo,
  WaveBackground,
  Layout,
  HeroPill,
  ImageGrid,
  StatsGrid,
  TeaserApp,
  AccordionFaq,
  Slider
} from '../../../components'

import {
  metaData,
  pageData,
  heroData,
  iconData,
  statsData,
  teaserData,
  accordionData,
  testimonialData,
  sliderData
} from '../../../data/pages/organizations/employers/employers-mental-health';

import * as styles from '../../../styles/pages/employersMentalHealth.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

export default function EmployersMentalHealth() {
  return (
    <Layout>
      <div className={styles.employersMentalHealth}>
        <HeroPill {...heroData} />

        <ImageGrid {...iconData} />

        <WaveBackground
          top={{
            flipX: true,
          }} 
          bottom={{
            flipX: true,
          }} 
          color="lightPurple"
        >
          <div className={styles.stats}>
            <StatsGrid {...statsData} />
          </div>
        </WaveBackground>

        <TeaserApp {...teaserData} />

        <AccordionFaq {...accordionData} />

        <WaveBackground
          top={{
            flipX: true,
          }} 
          bottom={{
            flipX: true,
          }} 
          color="grey"
        >
          <div className={styles.slider}>
            <Slider {...testimonialData} />
          </div>
        </WaveBackground>

        <Slider {...sliderData} />

        {pageData.disclaimer && 
          <div className={styles.disclaimer}>
            <ReactMarkdown>{pageData.disclaimer}</ReactMarkdown>
          </div>
        }
      </div>
    </Layout>
  )
}
