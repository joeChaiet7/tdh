import React from 'react';

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
  heroData,
  iconData,
  teaserData,
  testimonialData,
  sliderData
} from '../../../data/pages/organizations/employers/employers-whole-person-care';

import * as styles from '../../../styles/pages/wpc.module.scss'

export const Head = () => (
  <Seo {...metaData} />
)

export default function EmployersWholePersonExperience() {
  return (
    <Layout>
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
      </div>
    </Layout>
  )
}
