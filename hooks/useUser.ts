import { useContext } from 'react';

import {
  AuthContextState,
  UserContextStateType,
} from 'context/User/UserContext';

export const useUser = (): UserContextStateType => {
  const context = useContext(AuthContextState);
  if (!context) {
    throw new Error('useUser must be user within a UserProvider');
  }
  return context;
};
