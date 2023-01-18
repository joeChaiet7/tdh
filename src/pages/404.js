import * as React from "react"

import { 
  Seo,
  Layout,
  CallToAction 
} from "../components"

import {
  metaData
} from '../data/pages/404';

import * as styles from '../styles/pages/404.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

const NotFoundPage = () => {
  const browser = typeof window !== "undefined" && window;

  return (
    browser &&
    <Layout>
      <div className={styles.notFound}>
        <div className={styles.error}>
          <h1 className={styles.title}>404</h1>
          <div>Page not found</div>

          <div className={styles.message}>
            <p>The page you're looking for is out sick.</p>
            <p>Luckily, it has access to Teladoc Health so it can feel better, faster.</p>
          </div>

          <div className={styles.cta}>
            <CallToAction 
              cta={[
                {
                  type: "anchor",
                  text: "Back to home",
                  icon: "arrow back",
                  icon_position: "start",
                  action_type: "link",
                  action_url: "/",
                  theme: "purple"
                }
              ]}
            />
          </div>
          
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
