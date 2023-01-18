import React from 'react'
import ReactMarkdown from 'react-markdown';

import { 
  CallToAction
} from '../../';

import * as styles from './testimonialTile.module.scss';

export default function TestimonialTile(props) {
  let {
    quote,
    person,
    image,
    cta,
    disclaimer
  } = props;

  return (
    <>
      <section className={styles.testimonialTile}>
        <article className={styles.container}>
          <div className={styles.content}>
            <div className={styles.quote}><span /></div>

            <div className={styles.text}>
              <p>{quote && quote}</p>

              {person && 
                <div className={styles.person}>
                  {person.name && <p className={styles.name}>{person.name}</p>}
                  {person.role && <p>{person.role}</p>}
                </div>
              }
            </div>

            {cta && 
              <div>
                <CallToAction cta={cta} />
              </div>
            }
          </div>
          <div className={styles.image} style={{ backgroundImage: `url(${image.url})`}} />
        </article>
      </section>

      {disclaimer && 
        <div className={styles.disclaimer}>
          <ReactMarkdown>{disclaimer}</ReactMarkdown>
        </div>
      }      
    </>
  )
}
