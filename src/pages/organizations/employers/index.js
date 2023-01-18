import React from 'react'
import ReactMarkdown from 'react-markdown';

import {
  Seo,
  Layout,
  WaveBackground,
  HeroPill,
  IconGrid,
  AccordionSegment,
  TeaserApp,
  Slider,
  Marquee,
  Banner
} from '../../../components'

import {
  metaData,
  pageData,
  heroData,
  iconData,
  bannerData,
  accordionData,
  teaserData,
  sliderData,
  marqueeData,
  bannerCtaData,
  caseStudyData
} from '../../../data/pages/organizations/employers/employers';

import * as styles from '../../../styles/pages/employers.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

export default function Employers({ location }) {
  return (
    <Layout location={location} propelId={pageData.propelId}>
      <div className={styles.employers}>

        <HeroPill {...heroData} />
    
        <IconGrid {...iconData} />

        <div className={styles.banner}>
          <WaveBackground
            top={{
              flipX: true,
              flipY: true
            }} 
            bottom={{
              flipY: false,
              flipX: true,
              fill_color: "grey"
            }}
            color="dark"
          >
            <Banner {...bannerData} />
          </WaveBackground>
        </div>

        <div className={styles.accordion}>
          <WaveBackground
            bottom={{
              flipX: false,
              flipY: false
            }}
            color="grey"
          >
            <AccordionSegment {...accordionData} />
          </WaveBackground>
        </div>

        <Slider {...sliderData} />

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

        <div className={styles.bottomBanner}>
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
