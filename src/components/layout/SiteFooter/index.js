/**
 * SiteFooter
 * Main footer component
 */

import React from 'react';
import SiteFooterPrimary from './SiteFooterPrimary';
import SiteFooterSecondary from './SiteFooterSecondary';
import SiteFooterLegal from './siteFooterLegal';

import footerMenuItems from '../../../data/navigation/siteFooter';
import { socialLinks, legalLinks } from '../../../data/navigation/siteFooter';

import * as styles from './siteFooter.module.scss';


export default function SiteFooter({ propelId }) {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <SiteFooterPrimary 
          menuItems={footerMenuItems} 
          socialItems={socialLinks} 
        />

        <SiteFooterSecondary />

        <SiteFooterLegal
          legalItems={legalLinks}
          propelId={propelId}
        />
      </div>
    </footer>
  )
}
