/**
 * SiteFooterSecondary
 * The group of primary navigation links in the footer
 * @typedef {object} Props
 * @property {Array} socialItems - The social menu items to be used in the footer
 * @property {Array} legalItems - The legal menu items to be used in the footer
 */

import React from 'react'

import * as styles from './siteFooterSecondary.module.scss';

export default function SiteFooterSecondary() {
  return (
    <section className={styles.siteFooterSecondary}>
      <div className={styles.legal}>
        <ul>
          <li>
            &copy; Teladoc Health, Inc.
          </li>
        </ul>
      </div>

      <div className={styles.apps}>
        <a className={styles.apple} href="https://itunes.apple.com/app/apple-store/id656872607?pt=1032497&ct=corporateSite&mt=8" target="_blank" rel="noreferrer noopener">
          <img src="https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/misc/badges/app-store-badge.png" alt="Apple App Store" />
        </a>

        <a className={styles.google} href="https://play.google.com/store/apps/details?id=com.teladoc.members&referrer=utm_source%3Dgoogle%26utm_medium%3DCorporateSite%26utm_term%3DFooter" target="_blank" rel="noreferrer noopener">
          <img src="https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/misc/badges/google-play-badge.png" alt="Google Play Store" />
        </a>
      </div>
    </section>
  )
}
 