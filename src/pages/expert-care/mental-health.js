import React from "react";
import ReactMarkdown from "react-markdown";

import { 
  Seo,
  HeroService,
  Layout,
  Slider,
  WaveBackground,
  AccordionSegment,
  TestimonialsCarousel,
  TeaserVideo,
  AccordionFaq,
  GenericText,
  Banner
} from "../../components"

import {
  metaData,
  pageData,
  heroData, 
  textData,
  accordionData, 
  testimonialsData,
  teaserData,
  carouselData,
  bannerData,
  faqData, 
} from '../../data/pages/expert-care/mental-health';

import * as styles from '../../styles/pages/mentalHealth.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

export default function MentalHealth() {
  //const [showHeading, setShowHeading] = useState(false);
  //const [headingHeight, setHeadingHeight] = useState(0);

  //const headingRef = useRef();

  /*useEffect(() => {
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
      <div className={styles.mentalHealth}>

        <HeroService {...heroData} />

        <div className={styles.details}>
          <GenericText
            {...textData}
          />
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
          color="lightPurple"
        >
          <AccordionSegment {...accordionData} />
        </WaveBackground>

        <TestimonialsCarousel {...testimonialsData} />

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
          <TeaserVideo {...teaserData} />
        </WaveBackground>
        
        <Slider {...carouselData} />

        <Banner {...bannerData} />

        <AccordionFaq {...faqData} />
        
        {pageData.disclaimer &&
          <div className={styles.disclaimer}>
            <ReactMarkdown>{pageData.disclaimer}</ReactMarkdown>
          </div>
        }

      </div>

    </Layout>
  )
}