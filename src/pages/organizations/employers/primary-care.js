import React from 'react'
import ReactMarkdown from 'react-markdown';

import {
  Seo,
  Layout,
  WaveBackground,
  HeroPill,
  IconGrid,
  StatsGrid,
  TeaserApp,
  TestimonialsCarousel,
  AccordionSegment,
  Slider
} from '../../../components'

import {
  metaData,
  pageData,
  heroData ,
  iconData,
  statsData,
  teaserData,
  testimonialsData,
  accordionData,
  sliderData,
} from '../../../data/pages/organizations/employers/employers-primary-care';

import * as styles from '../../../styles/pages/employersPrimaryCare.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

export default function EmployersPrimaryCare() {
  return (
    <Layout>
      <div className={styles.employersPrimaryCare}>
        <HeroPill {...heroData} />
        
        <IconGrid {...iconData} />

        <WaveBackground
          top={{
            flipX: false
          }}
          bottom={{
            flipX: false,
            fill_color: "dark"
          }}
          color="lightPurple"
        >
          <div className={styles.stats}>
            <StatsGrid {...statsData} />
          </div>
        </WaveBackground>

        <div className={styles.teaser}>
          <WaveBackground
            bottom={{
              flipX: true,
            }}
            color="dark"
          >
            <TeaserApp {...teaserData} />
          </WaveBackground>
        </div>

        <TestimonialsCarousel {...testimonialsData} />

        <WaveBackground
          top={{
            flipX: false
          }}
          bottom={{
            flipX: false,
          }}
          color="lightPurple"
        >
          <AccordionSegment {...accordionData} />
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
