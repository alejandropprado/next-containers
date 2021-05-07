import { useContext } from 'react';

import {
  ContainerContextDispatch,
  ContainerContextDispatchType,
  ContainerContextState,
  ContainerContextStateType,
} from 'context/Container/ContainerContext';

export const useContainerState = (): ContainerContextStateType => {
  const context = useContext(ContainerContextState);
  if (!context) {
    throw new Error('useContainerState must be user within a ContainerProvider');
  }
  return context;
};

export const useContainerDispatch = (): ContainerContextDispatchType => {
  const context = useContext(ContainerContextDispatch);
  if (!context) {
    throw new Error('useContainerDispatch must be user within a ContainerProvider');
  }
  return context;
};
