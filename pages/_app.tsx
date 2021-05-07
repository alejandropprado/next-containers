import { FC, Fragment, useEffect, useState } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { USER_STORAGE_KEY } from 'config';
import { UserProvider } from 'context/User/UserProvider';
import { AuthProvider } from 'context/Auth/AuthProvider';
import { ContainerProvider } from 'context/Container/ContainerProvider';
import { getStorage } from 'utils/storage';
import { UserType } from 'types/UserType';

import 'styles/global.css';
import 'styles/base.css';

type AppPropsWithLayout = AppProps & {
  Component: NextComponentType<NextPageContext, any> & {
    Layout: any;
  };
};

const MyApp: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const Layout = Component.Layout ? Component.Layout : Fragment;
  const [userSession, setUserSession] = useState<{
    user: UserType | null;
    isLoaded: boolean;
  }>({
    isLoaded: false,
    user: null,
  });
  const { replace } = useRouter();

  useEffect(() => {
    const userStorage = getStorage(USER_STORAGE_KEY);

    if (userStorage) {
      setUserSession({
        user: userStorage,
        isLoaded: true,
      });
    } else {
      replace('/auth/login');
    }
  }, []);

  return (
    <UserProvider user={userSession.user}>
      <AuthProvider>
        <ContainerProvider>
          <Layout>
            <Component
              {...pageProps}
              isLoaded={userSession.isLoaded}
              user={userSession.user}
            />
          </Layout>
        </ContainerProvider>
      </AuthProvider>
    </UserProvider>
  );
};

export default MyApp;
