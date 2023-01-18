import React, { useRef, useState, useEffect } from 'react'

import { 
  CallToAction
} from '../../';

import * as styles from './heroService.module.scss';

export default function HeroService(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [heights, setHeights] = useState({})
  const [offset, setOffset] = useState();
  const [productStyle, setProductStyle] = useState();
  const [shapeOffset, setShapeOffset] = useState();
  const shapeARef = useRef();

  useEffect(() => {
    if(shapeARef && shapeARef.current){
      setHeights({ shapeA: shapeARef.current.getBoundingClientRect().height })
    }

    function handleScroll(){
      setOffset(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [shapeARef, offset])

  useEffect(() => {
    if(shapeARef && shapeARef.current){
      setHeights({ shapeA: shapeARef.current.getBoundingClientRect().height })
    }

    setIsLoaded(true)
  }, [shapeARef])

  let {
    product,
    title,
    subtitle,
    text_position,
    image,
    strapi_component,
    cta,
    additional
  } = props;

  let imageUrl = strapi_component ? image[0].localFile.childImageSharp.fluid.src : image.url;

  useEffect(() => {
    let style, offsetVal = 0.25;

    switch(product){
      case "mental health":
        style = "mentalHealth";
        offsetVal = 0.3;
        break;
      case "wellness care":
        style = "wellnessCare";
        break;
      case "condition management":
        style = "conditionManagement";
        break;
      case "primary care":
        style = "primaryCare";
        //offsetVal = 0.7;
        offsetVal = 0.3;
        break
      default: 
        style = "conditionManagement";
    }

    setProductStyle(style);
    setShapeOffset(offsetVal);
  }, [product])

  useEffect(() => {

  })

  return (
    <>       
      <section className={`${styles.heroService} ${styles[text_position]} ${styles[productStyle]}`}>
        <article className={styles.container}>  
          <div className={styles.content}>
            <div>
              { product && <p className={styles.product}>{product}</p>}
              { title && <h1>{ title }</h1> }
              { subtitle && <p className={styles.subtitle}>{ subtitle }</p> }
            </div>

            { cta && 
              <div className={styles.cta}>
                <CallToAction cta={cta} />
              </div>
            }

            { additional &&
              <p className={styles.additional}>{additional}</p>
            }
          </div>      

          <div className={styles.imageMobile}>
            <img src={imageUrl} alt="" />
          </div>

          <div className={styles.image}>
            <div className={styles.imageInner}>
              <div 
                className={styles.shapeContainer}
                style={{
                  transform: `translateY(${offset * -0.25}px)`  
                }}
              >
                <div 
                  style={{ 
                    minHeight: heights && heights.shapeA,
                  }} 
                  className={`${styles.shapeA} ${isLoaded ? styles.loaded : ""}`}
                >
                  <img 
                    ref={shapeARef} 
                    src={imageUrl} alt={image.alt}
                    style={{ opacity: isLoaded ? 1 : 0 }} />
                </div>
              </div>
              <div 
                className={`${styles.shapeB} ${isLoaded ? styles.loaded : ""}`} 
                style={{ 
                  transform: `translateY(${offset * shapeOffset}px)`              
                }} 
              />
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
