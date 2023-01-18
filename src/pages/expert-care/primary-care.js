import React, { useRef, useEffect } from "react";
import  ReactMarkdown from "react-markdown";

import { 
  Seo,
  HeroService,
  Layout,
  WaveBackground,
  AccordionSegment,
  Stats,
  ProductSteps,
  VideoEmbed,
  TeaserVideo,
  AccordionFaq,
  Banner
} from "../../components"

import {
  metaData,
  pageData,
  heroData, 
  accordionData,
  statsData, 
  productStepsData, 
  productFeaturesData, 
  videoData,
  teaserData,
  faqData, 
  bannerData,
} from '../../data/pages/expert-care/primary-care';

import * as styles from '../../styles/pages/primary360.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

export default function PrimaryCare() {
  //const [showHeading, setShowHeading] = useState(false);
  //const [headingHeight, setHeadingHeight] = useState(0);

  const headingRef = useRef();

  useEffect(() => {
    if(headingRef.current){
      let targetY = headingRef.current.getBoundingClientRect().top - headingRef.current.getBoundingClientRect().top/2;

      function handleScroll(){
        if(window.scrollY > targetY) {
          //setShowHeading(true);
        }
      }

      function handleResize() {
        //setHeadingHeight(headingRef.current.getBoundingClientRect().height - 100)
      }

      handleResize();
      handleScroll();
      
      window.addEventListener('scroll', handleScroll);
      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener("resize", handleResize);
      }
    }
  }, [headingRef])

  return (
    <Layout propelId={pageData.propelId}>
      <div className={styles.primaryCare}>

        <HeroService {...heroData} />

        {/*<div style={{ height: `${headingHeight && headingHeight}px` }}>
          <SegmentHeading
            ref={headingRef}
            showHeading={showHeading}
            {...headingData}
          />
        </div>*/}

        <WaveBackground 
          top={{
            flipX: false,
            flipY: true
          }} 
          bottom={{
            flipX: false,
            flipY: false
          }}
          color="lightPurple"
        >
          <AccordionSegment {...accordionData} />
        </WaveBackground>

        <ProductSteps
          {...productStepsData}
          features={productFeaturesData}
        />

        {/*<TestimonialsCarousel {...testimonialsData} />*/}

        <WaveBackground 
          top={{
            flipX: false,
            flipY: true
          }} 
          bottom={{
            flipX: false,
            flipY: false
          }}
          color="dark"
        >
          <div className={styles.stats}>
            <Stats {...statsData} />
          </div>
        </WaveBackground>

        <VideoEmbed {...videoData} />

        <WaveBackground 
          top={{
            flipX: false,
            flipY: true
          }} 
          bottom={{
            flipX: false,
            flipY: false
          }}
          color="lightGrey"
        >
          <TeaserVideo {...teaserData} />
        </WaveBackground>
       
        <AccordionFaq {...faqData} />

        <Banner {...bannerData} />

        {pageData.disclaimer && 
          <div className={styles.disclaimer}>
            <ReactMarkdown>{pageData.disclaimer}</ReactMarkdown>
          </div>
        }
      </div>

    </Layout>
  )
}
