import React from 'react';

import { OverflowProvider } from './src/providers/OverflowProvider';
import { ModalProvider } from './src/providers/ModalProvider';

export const wrapRootElement = ({ element }) => (
  <ModalProvider>
    <OverflowProvider>
      {element}
    </OverflowProvider>
  </ModalProvider>
)

//Force browser to scroll to top on page change
export const shouldUpdateScroll = () => {
  return false; 
}