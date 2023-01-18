import React from 'react'
import ReactMarkdown from 'react-markdown'
import useGetIcon from '../../../hooks/useGetIcon';

import { 
  Layout
} from '../../'

import * as styles from '../../../styles/pages/bioPage.module.scss';

export default function BioTemplate(props) {
  let { handleGetIcon } = useGetIcon();

  let {
    //id,
    name,
    role,
    image,
    linkedIn,
    bio
  } = props.pageContext;

  return (
    <Layout>
      <div className={styles.bioPage}>
        <section className={styles.container}>
          <div className={styles.content}>
            {bio &&
              <div className={styles.bio}>
                {image && 
                  <div className={styles.image} >
                    <img src={image.url} alt={image.alt} />
                  </div>
                }

                <div className={styles.text}>
                  {name && <div className={styles.title}>{name}</div> }
                  {role && <p className={styles.role}>{role}</p>}

                  {linkedIn &&
                    <div className={styles.links}>
                      <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                        { handleGetIcon("brand linkedIn") }
                      </a>
                    </div>
                  }
                  
                  <ReactMarkdown>{bio}</ReactMarkdown>
                </div>
              </div>
            }
          </div>
        </section>
        <div style={{ clear: "both" }} />
      </div>
    </Layout>
  )
}
