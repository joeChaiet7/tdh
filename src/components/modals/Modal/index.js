import React, { useEffect, useContext } from 'react';
import OverflowContext from '../../../context/OverflowContext';
import ModalContext from '../../../context/ModalContext';

import {
  FormModal,
  VideoModal 
} from '../../';

import * as styles from './modal.module.scss';

export default function Modal({ location }) {
  const { setSiteOverflow } = useContext(OverflowContext);

  const {
    showModal,
    actionType,
    actionUrl
  } = useContext(ModalContext);

  useEffect(() => {
    if(showModal) {
      setSiteOverflow('hidden');
    }else{
      setSiteOverflow('unset');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal])

  return (
    <div className={`${styles.modal} ${showModal ? styles.show : styles.hide}`}>
      <div className={styles.container}>
        {actionType === "video" && 
          <VideoModal videoUrl={actionUrl} />
        }

        {actionType === "form" && 
          <FormModal location={location} formId={actionUrl} />
        }
      </div>
    </div>
  )
}
