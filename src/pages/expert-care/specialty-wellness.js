import React from "react";

import { 
  Seo,
  HeroBlock,
  GenericText,
  TeaserImage,
  Layout,
  Banner,
} from "../../components"

import {
  metaData,
  pageData,
  heroData, 
  headingData,
  specialistData,
  wellnessData,
  disclaimerData,
  bannerData,
} from '../../data/pages/expert-care/specialty-wellness';

import * as styles from '../../styles/pages/specialtyWellness.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

export default function SpecialtyWellness() {
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
      <div className={styles.specialtyWellness}>

        <HeroBlock {...heroData} />

        <div className={styles.heading}>
          <GenericText {...headingData} />
        </div>

        <div className={styles.specialist}>
          <TeaserImage {...specialistData} />
        </div>

        <div className={styles.wellness}>
          <TeaserImage {...wellnessData} />
        </div>

        <div className={styles.disclaimer}>
          <GenericText {...disclaimerData} />
        </div>

        <Banner {...bannerData} />

      </div>

    </Layout>
  )
}