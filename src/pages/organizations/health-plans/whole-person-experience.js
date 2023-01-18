import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  Seo,
  WaveBackground,
  Layout,
  HeroPill,
  IconGrid,
  TeaserApp,
  Slider
} from '../../../components'

import {
  metaData,
  pageData,
  heroData,
  iconData,
  teaserData,
  testimonialData,
  sliderData
} from '../../../data/pages/organizations/health-plans/health-plans-whole-person-care';

import * as styles from '../../../styles/pages/wpc.module.scss'

export const Head = () => (
  <Seo {...metaData} />
)

export default function HealthPlansWholePersonExperience() {
  return (
    <Layout propelId={pageData.propelId}>
      <div className={styles.wholePersonExperience}>
        <HeroPill {...heroData} />

        <IconGrid {...iconData} />

        <TeaserApp {...teaserData} />

        <WaveBackground
          top={{
            flipX: true,
          }} 
          bottom={{
            flipX: true,
          }} 
          color="grey"
        >
          <Slider {...testimonialData} />
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
