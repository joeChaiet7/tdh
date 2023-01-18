import React, { useState, useEffect } from 'react'

import OverflowContext from '../context/OverflowContext';

export const OverflowProvider = ({ children }) => {
  const [siteOverflow, setSiteOverflow] = useState("unset");

  useEffect(() => {
    document.body.style.overflowY = siteOverflow;
  }, [siteOverflow])

  return (
    <OverflowContext.Provider
      value={{ siteOverflow, setSiteOverflow }}
    >
      {children}
    </OverflowContext.Provider>
  )
}
