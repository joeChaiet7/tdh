import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  Seo,
  Layout,
  HeroCircle,
  IconGrid,
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
  sliderData,
} from '../../../data/pages/organizations/health-plans/health-plans-primary-care';

import * as styles from '../../../styles/pages/healthPlansPrimaryCare.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

export default function HealthPlansPrimaryCare() {
  return (
    <Layout>
      <div className={styles.healthPlansPrimaryCare}>
        <HeroCircle {...heroData} />
        
        <IconGrid {...iconData} />

        <StatsGrid {...statsData} />

        <TeaserApp {...teaserData} />

        <AccordionFaq {...accordionData} />
 
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
