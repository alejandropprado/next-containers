import { FC, useState, useCallback } from 'react';

import { ApiUrl, USER_STORAGE_KEY } from 'config';
import { AuthContextState, AuthContextDispatch } from './AuthContext';
import { jsonFetch } from 'utils/fetch';
import { useUser } from 'hooks/useUser';
import { setStorage } from 'utils/storage';
import type { ApiResponseType } from 'types/ApiResponseType';
import type { UserType } from 'types/UserType';

export const AuthProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setUser } = useUser();

  const login = useCallback(async (email, password): Promise<void> => {
    try {
      setIsLoading(true);
      const { payload: user } = (await jsonFetch(`${ApiUrl}/role`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        redirect: 'follow',
      })) as ApiResponseType<UserType>;

      setStorage(USER_STORAGE_KEY, user);
      setUser(user);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async (): Promise<void> => {}, []);

  const states = {
    isLoading,
    error,
  };
  const actions = {
    login,
    logout,
  };

  return (
    <AuthContextState.Provider value={states}>
      <AuthContextDispatch.Provider value={actions}>
        {children}
      </AuthContextDispatch.Provider>
    </AuthContextState.Provider>
  );
};
