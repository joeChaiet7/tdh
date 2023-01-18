import React from "react";
import ReactMarkdown from 'react-markdown'

import { 
  Seo,
  HeroService,
  Layout,
  Slider,
  WaveBackground,
  AccordionSegment,
  AccordionFaq,
  GenericText,
  IconGrid,
  Banner,
  TeaserImage,
  TeaserVideo,
  Stats,
  ProductSteps
} from "../../components"

import {
  metaData,
  pageData,
  heroData, 
  iconData,
  accordionData, 
  textData,
  statsData,
  productStepsData,
  teaserData,
  teaserVideoData,
  carouselData,
  bannerData,
  faqData, 
} from '../../data/pages/expert-care/condition-management';

import * as styles from '../../styles/pages/conditionManagement.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

export default function ConditionManagement() {
  /*const [showHeading, setShowHeading] = useState(false);
  const [headingHeight, setHeadingHeight] = useState(0);

  const headingRef = useRef();

  useEffect(() => {
    if(headingRef.current){
      let targetY = headingRef.current.getBoundingClientRect().top - headingRef.current.getBoundingClientRect().top/2;

      function handleScroll(){
        if(window.scrollY > targetY) {
          setShowHeading(true);
        }
      }

      function handleResize() {
        setHeadingHeight(headingRef.current.getBoundingClientRect().height - 100)
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
  }, [headingRef])*/

  return (
    <Layout propelId={pageData.propelId}>
      <div className={styles.conditionManagement}>

        <HeroService {...heroData} />

        <IconGrid {...iconData} />  

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
        />

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
          <Stats {...statsData} />
        </WaveBackground>
        
        <div className={styles.coach}>
          <GenericText {...textData} />
          <TeaserImage {...teaserData} />
        </div>

        <WaveBackground 
          top={{
            flipX: false,
            flipY: true
          }} 
          bottom={{
            flipX: false,
            flipY: false
          }}
          color="lightBlue"
        >
          <TeaserVideo {...teaserVideoData} />
        </WaveBackground>

        <Slider {...carouselData} />

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