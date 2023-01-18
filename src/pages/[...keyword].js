import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby';

import codes from '../../ccm-regcodes.json';

import { 
  Layout,
  Seo,
  Loader
} from '../components';

import * as styles from '../styles/pages/splat.module.scss';

const metaData = {
  title: "One moment...",
}

export const Head = () => (
  <Seo {...metaData} />
)

export default function SplatPage(props) {
  const [destination, setDestination] = useState();
  let {
    location
  } = props;

  useEffect(() => {
    if(location){
      let arr = location.pathname.split('/')

      let paths = arr.filter(el => el !== '');

      let redirect = codes.find(el => el.keyword.toLowerCase() === paths[0].toLowerCase());
      let regcode = paths[1];

      if(paths[0].includes('sitemap')){
        navigate('/sitemap/sitemap-0.xml');
      }else if(!redirect){
        navigate('/404');
      }else{
        //Production
        setDestination(`
          https://member.teladoc.com/registrations/get_started/?${redirect.parameters}${regcode ? '&ccm_reg_code=' + regcode : ""}
        `)

        //Development
         /*setDestination(`
          https://member.cxp.integration.teladoc.io/registrations/get_started/?${redirect.parameters}${regcode ? '&ccm_reg_code=' + regcode : ""}
        `)*/

      } 
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(destination){
      let timer = setTimeout(() => {
        window.location.replace(destination);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [destination])

  return (
    <Layout>
      <div className={styles.splat}>
        {destination && 
          <div className={styles.message}>
            <div className={styles.title}>One moment</div>
            <p>We're loading your experience</p>
            <Loader />
          </div>
        }
      </div>
    </Layout>
  )
}
