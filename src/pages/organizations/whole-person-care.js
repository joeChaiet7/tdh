import React from 'react'

import {
  Seo,
  Layout,
  HeroPill,
  TabsKeyword,
  VideoGrid,
  TeaserImage,
  Banner
} from '../../components'

import {
  metaData,
  pageData,
  heroData,
  tabsData,
  videoGridData,
  teaserData,
  bannerData
} from '../../data/pages/organizations/whole-person-care';

//import * as styles from '../../styles/pages/wholePersonCare.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

export default function WholePersonCare() {
  return (
    <Layout propelId={pageData.propelId}>
      <div>
        <HeroPill {...heroData} />

        <TabsKeyword {...tabsData} />

        <VideoGrid {...videoGridData} />

        <TeaserImage {...teaserData} />

        <Banner {...bannerData} />
      </div>
    </Layout>
  )
}
