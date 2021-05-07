import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useUser } from 'hooks/useUser';
import BxLogo from 'components/icons/BlueExpress';

import styles from 'styles/root.module.css';
import type { UserType } from 'types/UserType';

type PropsType = {
  isLoaded: boolean;
  user: UserType | null;
};

export const Root = ({ isLoaded, user }: PropsType): JSX.Element => {
  const { replace } = useRouter();

  useEffect(() => {
    if (isLoaded) {
      if (user) {
        replace('/home');
      } else {
        replace('/auth/login');
      }
    }
  }, [isLoaded, user]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cargando...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BxLogo width={100} />
    </div>
  );
};

export default Root;
