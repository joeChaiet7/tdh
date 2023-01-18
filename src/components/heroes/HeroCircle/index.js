/**
 * HeroCircle
 * Hero component with an image in a circle shape positioned in the top right corner.
 * @typedef {object} Props
 * @property {string} title - The title of the Hero Component 
 * @property {string} subtitle - The subtitle of the Hero Component 
 * @property {string} text_position - The horizontal positioning of the Hero text
 * @property {string} text_align - The text alignment of the Hero Component
 * @property {string} image - The image used in the Hero Component
 * @property {object} cta - The call to action used in the Hero Component 
 */

import React from 'react';

import { 
  CallToAction
} from '../../';

import * as styles from  './heroCircle.module.scss';

export default function HeroCircle(props) {
  let {
    title,
    subtitle,
    text_position,
    cta,
    image
  } = props;

  return (
    <section className={`${styles.heroCircle} ${styles[text_position]}`}>
      <article className={styles.container}>      
        { image &&
          <div className={styles.image}> 
            <div 
              className={styles.imageShape}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
          </div>
        }

        <div className={styles.content}>
          <div>
            { title && <h1 className={styles.title}>{ title }</h1> }
            { subtitle && <p>{ subtitle }</p> }
          </div>

          { cta && 
            <div className={styles.cta}>
              <CallToAction cta={cta} />
            </div>
          }
        </div> 
      </article>
    </section>
  )
}
