/**
 * Breadcrumbs
 * AEM component
 * Set of links for each nested page a user navigates through.
 */

import React, { useState, useEffect } from 'react';

import * as styles from './breadcrumb.module.scss';

export default function Breadcrumb({ location }){
  const [breadcrumb, setBreadcrumb] = useState()

  useEffect(() => {
    if(location){
      let currentRoutes = [];

      currentRoutes = location.pathname !== '/' ? location.pathname.split('/') : [];
      currentRoutes = currentRoutes.filter(el => el.length > 0)
      setBreadcrumb(currentRoutes);

    }
  }, [location])

  function formatString(string){
    return string.replaceAll("-", " ");
  }

  return(
    <nav className={styles.breadcrumb}>
      <ol>
        { breadcrumb && breadcrumb.map((route, i) => (
          <li key={i}>
            <a href={route.destination}>{ formatString(route) }</a>
          </li>
        ))}
        </ol>
    </nav>
  )
}
