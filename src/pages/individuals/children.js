import React from "react";
import ReactMarkdown from 'react-markdown';

import { 
  Seo,
  Layout,
  HeroWave,
  GenericText,
  VerticalCarousel,
  TileRow,
  TestimonialTile,
  Banner,
  WaveBackground
} from "../../components";

import {
  metaData,
  pageData,
  heroData,
  textData,
  carouselData,
  tileData,
  testimonialData,
  bannerData
} from '../../data/pages/for-individuals/children';

import * as styles from '../../styles/pages/children.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

export default function Children() {
  return (
    <Layout propelId={pageData.propelId}>
      <div className={styles.children}>
        <HeroWave {...heroData} />

        <div className={styles.text}>
          <GenericText {...textData} />
        </div>

        <VerticalCarousel {...carouselData} />

        <TileRow {...tileData} />
        
        <div className={styles.testimonial}>
          <TestimonialTile {...testimonialData} />
        </div>

        {pageData.disclaimer && 
          <div className={styles.disclaimer}>
            <ReactMarkdown>{pageData.disclaimer}</ReactMarkdown>
          </div>
        }

        <WaveBackground
          top={{
            flipX: true
          }} 
          color="dark"
        >
          <div className={styles.banner}>
            <Banner {...bannerData} />
          </div>
        </WaveBackground>
      </div>
    </Layout>
  )
}
