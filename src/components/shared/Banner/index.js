/**
 * Banner (CTA Banner)
 * Full width banner section.
 * @typedef {object} Props
 * @property {string} theme - The theme of the Banner Component. Controls background color, text color, etc.
 * @property {string} title - The title of the Banner Component 
 * @property {string} subtitle - The subtitle of the Banner Component 
 * @property {object} cta - The call to action used in the Banner Component 
 * @property {boolean} showBackgroundImage - Toggle to show the Connector Web background image. 
 */

import React from 'react';
import ReactMarkdown from 'react-markdown';
import useGetIcon from '../../../hooks/useGetIcon';

import { 
  CallToAction
} from '../../';

import * as styles from './banner.module.scss';

export default function Banner(props) {
  const { handleGetIcon } = useGetIcon();
  
  let {
    theme,
    title,
    subtitle,
    text_align,
    icon,
    cta,
    orientation,
    additional_text,
    additional_icon,
    additional_icon_position
  } = props;

  return (
    <section className={`${styles.banner} ${styles[theme]} ${styles[orientation]}`}>
      <article className={styles.container}>
        <div className={`${styles.left} ${styles[text_align]}`}>
          { icon && handleGetIcon(icon) }
          {title && <div className={`${styles.title} ${styles[text_align]}`}>{ title }</div>}
          {subtitle && <ReactMarkdown>{ subtitle }</ReactMarkdown>}

          {additional_text &&
            <div className={`${styles.additional} ${styles[text_align]} ${styles[additional_icon_position]}`}>
              <ReactMarkdown>{additional_text}</ReactMarkdown>
              {additional_icon && handleGetIcon(additional_icon)}
            </div>
          }
        </div>

        <div className={styles.right}>
          { cta && 
            <CallToAction cta={cta} />
          }
        </div>
      </article>
    </section>
  )
}
 