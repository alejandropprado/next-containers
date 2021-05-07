import { createContext } from 'react';
import { UserType } from 'types/UserType';

export type UserContextStateType = {
  user: UserType | null;
  setUser: (user: UserType) => void;
};

export const AuthContextState = createContext<UserContextStateType>(
  {} as UserContextStateType
);