import React from 'react';

import {
  HeroRenderer,
  TabsServices
} from '../..';

export default function BlockRenderer({ block }) {

  return (
    block &&
    <>
      {block.strapi_component === "blocks.hero" && <HeroRenderer {...block} />}
      {block.strapi_component === "blocks.tabs-services" && <TabsServices {...block} />}
    </>
  )
}
