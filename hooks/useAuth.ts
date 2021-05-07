import { useContext } from 'react';

import {
  AuthContextDispatch,
  AuthContextDispatchType,
  AuthContextState,
  AuthContextStateType,
} from 'context/Auth/AuthContext';

export const useAuthState = (): AuthContextStateType => {
  const context = useContext(AuthContextState);
  if (!context) {
    throw new Error('useAuthState must be user within a AuthProvider');
  }
  return context;
};

export const useAuthDispatch = (): AuthContextDispatchType => {
  const context = useContext(AuthContextDispatch);
  if (!context) {
    throw new Error('useAuthDispatch must be user within a AuthProvider');
  }
  return context;
};
