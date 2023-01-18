import React from 'react'

import {
  Seo,
  Layout,
  WaveBackground,
  HeroPill,
  IconGrid,
  Slider,
  TeaserImage,
} from '../../../components'

import {
  metaData,
  heroData,
  iconData,
  sliderData,
  teaserData,
  pageData,
} from '../../../data/pages/organizations/hhs-solo';

//import * as styles from '../../../styles/pages/platform.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

export default function HospitalsHealthSystems({ location }) {
  return (
    <Layout location={location} propelId={pageData.propelId}>
      <div>

        <HeroPill {...heroData} />
    
        <IconGrid {...iconData} />

        <TeaserImage {...teaserData} />

        <WaveBackground
          top={{
            flipX: true
          }} 
          bottom={{
            flipX: true
          }} 
          color="lightPurple"
        >
          <Slider {...sliderData} />
        </WaveBackground>
      </div>
    </Layout>
  )
}
