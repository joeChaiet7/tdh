import React, { useRef, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import useInView from '../../../hooks/useInView';

import {
  CallToAction 
} from '../../'

import {
  FaCheck
} from 'react-icons/fa'

import * as styles from './productSteps.module.scss';

export default function ProductSteps(props) {
  const [activeStep, setActiveStep] = useState();
  const [activeIndex, setActiveIndex] = useState();
  const [startAnimation, setStartAnimation] = useState(false);

  const stepsRef = useRef();
  const isInView = useInView(stepsRef);

  let {
    title,
    steps,
    description,
    features,
    additional,
    cta
  } = props;

  let duration = 3000;

  useEffect(() => {
    if(startAnimation) {
      if(steps) {
        setActiveIndex(0);
        setActiveStep(steps[0]);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startAnimation])

  useEffect(() => {
    if(activeIndex < steps.length - 1) {
      const timer = setTimeout(() => {
        setActiveIndex(prevIndex => prevIndex + 1)
      }, duration);

      return () => clearTimeout(timer);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex])

  useEffect(() => {
    setActiveStep(steps[activeIndex])

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex])

  useEffect(() => {
    if(isInView){
      setStartAnimation(true);
    }
  }, [isInView])

  return (
    <section className={styles.productSteps}>
      <div className={styles.heading}>
        {title && <div className={styles.title}>{title}</div> }
        {description && <p>{description}</p>}
      </div>

      <div>
        {/*<div className='ProductSteps__line'>
          <svg viewBox="0 0 270 80" height="100%">
            <path d="M 270 0 L 270 80 L 150 80" />
          </svg>
        </div>*/}
        
        <div className={styles.container} ref={stepsRef}>
          {steps && steps.map((step, i) => (
            <div
              key={step.id}
              className={`${styles.step} ${activeStep && (activeStep.id === step.id) ? styles.active : activeStep && (step.order < activeStep.order) ? styles.done : styles.inactive}`}
              style={{
                "--duration": `${duration}ms`
              }}
            >
              <div className={styles.stepImage} style={{ width: `${step.image.type === "device" ? "255px" : "160px"}`}}>
                <img src={step.image.url} alt={step.image.alt} />
              </div>

              <div className={styles.stepNumber}>
                <span>{step.order}</span>
                {i < steps.length - 1 &&
                  <div className={styles.stepLine} />
                }
              </div>

              <div className={styles.stepDescription}><ReactMarkdown>{step.description}</ReactMarkdown></div>
            </div>
          ))}
        </div>

        {additional && 
          <div className={`${styles.additional} ${activeIndex >= steps.length - 1 ? styles.active : styles.inactive}`}>{additional}</div>
        }
      </div>

      { features && 
        <div className={styles.features}>
          {features && features.map((feature, i) => (
            <div
              key={feature}
              className={`${styles.feature} ${activeIndex >= steps.length - 1 ? styles.active : styles.inactive}`}
              style={{
                animationDelay: `${i * 0.25}s`
              }}
            >
              <div className={styles.checkmark}>
                <FaCheck/>
              </div>
              {feature}
            </div>
          ))}
        </div>
      }

      { cta &&
        <div className={styles.cta}>
          <CallToAction cta={cta} />
        </div>
      }
    </section>
  )
}
