import React from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkExtendedTable from 'remark-extended-table'

import { 
  Seo,
  Layout,
} from "../../components";

import {
  metaData,
  textData
} from '../../data/pages/legal/privacy-policy';

import * as styles from '../../styles/pages/legal.module.scss'

export const Head = () => (
  <Seo {...metaData} />
)

export default function PrivacyPolicy() {
  return (
    <>
      <Layout>
        <div className={styles.legalPage}>
          <ReactMarkdown children={textData.text} remarkPlugins={[remarkGfm, remarkExtendedTable]} />
        </div>
      </Layout>
    </>
  )
}
