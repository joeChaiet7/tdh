import React from 'react'

import {
  Seo,
  Layout,
  HeroQuote,
  LeadershipGrid,
} from '../../../components'

import {
  metaData,
  heroData,
  gridData,
} from '../../../data/pages/about/leadership';

//import * as styles from '../../../styles/pages/leadership.module.scss';

export const Head = () => (
  <Seo {...metaData} />
)

export default function Leadership() {
  return (
    <Layout>
      <div>
        <HeroQuote {...heroData} />

        <LeadershipGrid {...gridData} />

        {/*<WaveBackground
          top={{
            flipX: true,
            fill_color: "white"
          }}
          bottom={{
            flipX: true,
            fill_color: "white"
          }}
          color="dark"
        >
          <Banner {...bannerData} />
        </WaveBackground>*/}
      </div>
    </Layout>
  )
}
