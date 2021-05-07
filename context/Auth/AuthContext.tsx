import { createContext } from 'react';

export type AuthContextStateType = {
  isLoading: boolean;
  error: string | null;
};

export const AuthContextState = createContext<AuthContextStateType>({
  isLoading: false,
  error: null,
});

export type AuthContextDispatchType = {
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const AuthContextDispatch = createContext<AuthContextDispatchType>(
  {} as AuthContextDispatchType
);
