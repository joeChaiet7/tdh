/**
 * SiteFooterPrimary
 * The group of primary navigation links in the footer
 * @typedef {object} Props
 * @property {Array} menuItems - The menu items to be used in the footer
 */

import React from 'react';
import useGetIcon from '../../../hooks/useGetIcon';

import SiteFooterMenuSection from './SiteFooterMenuSection';

import * as styles from './siteFooterPrimary.module.scss';

const  TeladocLogo = "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/logos/Teladoc_Health_Logo.png";

export default function SiteFooterPrimary({ socialItems, menuItems }) {
  const { handleGetIcon } = useGetIcon();

  return (
    <section className={styles.siteFooterPrimary}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src={TeladocLogo} alt="Teladoc Health" />
        </div> 

        <div className={styles.social}>
          <ul>
            { socialItems && socialItems.map(item => (
              <li key={item.id}>
                <a href={item.action_url} aria-label={item.label} target="_blank" rel="noreferrer noopener">{handleGetIcon(item.icon)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.location}>
          <div>Headquarters</div>
          <p>Teladoc Health, Inc.</p>
          <p>2 Manhattanville Road</p>
          <p>Purchase, NY 10577</p>
        </div>
        
        <div className={styles.mission}>
          <p>Empowering all people everywhere to live their healthiest lives by transforming the healthcare experience</p>
        </div>
      </div>

      <div className={styles.menu} style={{ "--sectionCount": menuItems ? menuItems.length : 6 }}>
        { menuItems && menuItems.map(section => (
          <SiteFooterMenuSection key={section.id} section={section} />
        ))}
      </div>
    </section>
  )
}
 