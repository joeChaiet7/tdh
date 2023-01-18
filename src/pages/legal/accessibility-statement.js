import React from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { 
  Seo,
  Layout,
} from "../../components";

import {
  metaData,
  textData
} from '../../data/pages/legal/accessibility-statement';

import * as styles from '../../styles/pages/legal.module.scss'

export const Head = () => (
  <Seo {...metaData} />
)

export default function AccessibilityStatement() {
  return (
    <>
      <Layout>
        <div className={styles.legalPage}>
          <ReactMarkdown children={textData.text} remarkPlugins={[remarkGfm]} />
        </div>
      </Layout>
    </>
  )
}
