/**
 * SiteFooterSecondary
 * The group of primary navigation links in the footer
 * @typedef {object} Props
 * @property {Array} socialItems - The social menu items to be used in the footer
 * @property {Array} legalItems - The legal menu items to be used in the footer
 */

import React from 'react'

import * as styles from './siteFooterLegal.module.scss';

export default function SiteFooterLegal({ legalItems, propelId }) {

  return (
    <section className={styles.siteFooterLegal}>
      <div className={styles.legal}>
        <ul>
          { legalItems && legalItems.map(item => (
            <li key={item.id}>
              <a href={item.action_url} aria-label={item.label} target={item.action_target} rel={item.action_rel}>{item.label}</a>
            </li>
          ))}
        </ul>

        {propelId && <p className={styles.propel}>{ propelId }</p>}
      </div>
    </section>
  )
}
 