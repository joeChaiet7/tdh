import React from 'react'

import {
  Seo,
  Layout,
  WaveBackground,
  HeroPill,
  IconGrid,
  Slider,
  TeaserImage,
  Banner
} from '../../../components'

import {
  metaData,
  pageData,
  heroData,
  iconData,
  sliderData,
  teaserData,
  caseStudyData,
  bannerCtaData
} from '../../../data/pages/organizations/hospitals-health-systems';

import * as styles from '../../../styles/pages/hospitalsHealthSystems.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

export default function HospitalsHealthSystems({ location }) {
  return (
    <Layout location={location} propelId={pageData.propelId}>
      <div className={styles.hospitalsHealthSystems}>

        <HeroPill {...heroData} />
    
        <IconGrid {...iconData} />

        <WaveBackground
          top={{
            flipX: true,
            flipY: true
          }} 
          bottom={{
            flipY: false,
            flipX: true
          }}
          color="grey"
        >
          <TeaserImage {...teaserData} />
        </WaveBackground>

        <Slider {...sliderData} />

        <div className={styles.slider}>
          <WaveBackground
            top={{
              flipX: true,
              flipY: true
            }} 
            color="grey"
          >
            <Slider {...caseStudyData} />
          </WaveBackground>
        </div>

        <div className={styles.banner}>
          <WaveBackground
            top={{
              flipX: false,
              flipY: true,
              fill_color: "grey"
            }} 
            color="dark"
          >
            <Banner {...bannerCtaData} />
          </WaveBackground>
        </div>
      </div>
    </Layout>
  )
}
