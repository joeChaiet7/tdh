import React, { Suspense } from "react";
import { 
  SiteHeader, 
  SiteFooter,
  Modal,
  Loader
} from "../";

import * as styles from "./layout.module.scss";
import '../../styles/global.scss';

export default function Layout(props) {
  let { children, location, theme, propelId } = props

  return (
    <Suspense fallback={<Loader />}>
      <Modal location={location}/>
      <SiteHeader theme={theme} />

      <main className={styles.layout}>
        {props && (
          <div className={styles.content}>{children}</div>
        )}
      </main>

      <SiteFooter propelId={propelId} />
    </Suspense>
  )
}
