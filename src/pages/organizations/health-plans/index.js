import React from 'react'
import ReactMarkdown from 'react-markdown';

import {
  Seo,
  Layout,
  WaveBackground,
  HeroPill,
  IconGrid,
  AccordionSegment,
  Slider,
  Marquee,
  Banner,
  TeaserApp
} from '../../../components'

import {
  metaData,
  pageData,
  heroData,
  iconData,
  bannerData,
  accordionData,
  sliderData,
  teaserData,
  marqueeData,
  bannerCtaData,
  caseStudyData
} from '../../../data/pages/organizations/health-plans/health-plans';

import * as styles from '../../../styles/pages/healthPlans.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

export default function HealthPlans({ location }) {
  return (
    <Layout location={location} propelId={pageData.propelId}>
      <div className={styles.healthPlans}>

        <HeroPill {...heroData} />
    
        <IconGrid {...iconData} />

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
          <Banner {...bannerData} />
        </WaveBackground>

        <AccordionSegment {...accordionData} />
        
        <WaveBackground
          top={{
            flipX: false,
            flipY: true
          }} 
          bottom={{
            flipY: false
          }}
          color="grey"
        >
          <Slider {...sliderData} />
        </WaveBackground>

        <TeaserApp {...teaserData} />
        
        <Marquee {...marqueeData} />

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

        {pageData.disclaimer && 
          <div className={styles.disclaimer}>
            <ReactMarkdown>{pageData.disclaimer}</ReactMarkdown>
          </div>
        }

      </div>
    </Layout>
  )
}
