import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from "gatsby"

import { 
  Layout,
  Loader
} from '../../';

import * as styles from './regCodeTemplate.module.scss';

export default function RegCodeTemplate({ location, pageContext }) {
  const [destination, setDestination] = useState();

  let {
    keyword,
    params
  } = pageContext;

  let currentRoutes = [];

  currentRoutes = location.pathname !== '/' ? location.pathname.split('/') : [];

  if(currentRoutes.length > 0) {
    currentRoutes.splice(0, 5);
  }

  return (
    <Layout>
      <div className={styles.regCodeTemplate}>
        <div className={styles.message}>
          <div className={styles.title}>One moment</div>
          <p>We're loading your experience</p>
          <Loader />
        </div>
      </div>
    </Layout>
  )
}
