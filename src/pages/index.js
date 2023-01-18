import * as React from "react"

import { 
  Seo,
  Eyebrow,
  HeroHome, 
  Layout,
  TabsServices,
  WaveBackground,
  Slider,
  Marquee,
  AccordionTile,
  Banner
} from "../components";

import {
  metaData,
  pageData,
  eyebrowData,
  heroData, 
  tabsData, 
  testimonialsData, 
  accordionData,
  awardsData,
  bannerData
} from '../data/pages/home';

import * as styles from '../styles/pages/home.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

export default function HomePage({ location }) {
  return (
    <>
      <Layout location={location} propelId={pageData.propelId}>
        <Eyebrow {...eyebrowData} />
        <div className={styles.home}>

          <HeroHome {...heroData} />
          
          <TabsServices {...tabsData} />

          {/*<SearchSection />*/}

          <WaveBackground 
            top={{
              flipX: false
            }} 
            bottom={{
              flipX: false
            }}
            color="grey"
          >
            <Slider {...testimonialsData} />
          </WaveBackground>

          <AccordionTile {...accordionData} />

          <Marquee {...awardsData} />

          <div className={styles.banner} style={{ "--paddingValue": "2rem 2rem 5rem 2rem" }}>
            <WaveBackground 
              top={{
                flipX: true,
                fill_color: "white"
              }} 
              color="dark"
            >
              <Banner {...bannerData} />
            </WaveBackground>
          </div>
        </div>
      </Layout>
    </>
  )
}
