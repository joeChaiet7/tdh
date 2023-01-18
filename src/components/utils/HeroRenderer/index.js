import React from 'react';

import {
  HeroHome,
  HeroService,
  HeroPill,
  HeroWave
} from '../../'

export default function HeroRenderer(props) {
  let {
    type
  } = props;

  return (
    type &&
    <>
      { type === 'service' && <HeroService {...props} /> }

      { type === 'home' && <HeroHome {...props} /> }

      { type === 'pill' && <HeroPill {...props} /> }

      { type === 'wave' && <HeroWave {...props}/> }
    </>
  )
}
