import React, { useState } from 'react'

import ModalContext from '../context/ModalContext';

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [actionUrl, setActionUrl] = useState();
  const [actionType, setActionType] = useState();
  const [actionOrigin, setActionOrigin] = useState();
  const [isFromFooter, setIsFromFooter] = useState();

  const handleToggleModal = (type, url, origin, e) => {
    if(showModal){
      setActionOrigin()
      setActionUrl()
      setActionType()  
      setShowModal(false)
    }else{
      setActionUrl(url);
      setActionType(type);
      setActionOrigin(origin);

      if(e && e.currentTarget){
        if(e.currentTarget.closest('footer')){
          setIsFromFooter(true);
        }else{
          setIsFromFooter(false);
        }
      }

      setShowModal(true)
    }
  }

  return (
    <ModalContext.Provider
      value={{ handleToggleModal, showModal, setActionType, actionType, setActionUrl, actionUrl, setActionOrigin, actionOrigin, isFromFooter }}
    >
      {children}
    </ModalContext.Provider>
  )
}
