import { FC, useEffect, useState } from 'react';

import { AuthContextState } from './UserContext';
import type { UserType } from 'types/UserType';

type PropsType = {
  user: UserType | null;
};

export const UserProvider: FC<PropsType> = ({ children, user }) => {
  const [userAuth, setUser] = useState<null | UserType>(null);

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user]);

  return (
    <AuthContextState.Provider value={{ user: userAuth, setUser }}>
      {children}
    </AuthContextState.Provider>
  );
};
