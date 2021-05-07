import { FC } from 'react';
import { useRouter } from 'next/router';

import { useUser } from 'hooks/useUser';
import LogoIcon from 'components/icons/Logo';
import UserIcon from 'components/icons/User';
import ArrowIcon from 'components/icons/Arrow';

import styles from './authenticated.module.css';

export const AuthenticatedLayout: FC = ({ children }) => {
  const { user } = useUser();
  const { push } = useRouter();
  const year = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.contentLogo} onClick={() => push('/home')}>
          <LogoIcon />
        </div>
        <div className={styles.dropdown}>
          <UserIcon size={38} color="var(--bx-color-white)" />
          <ul>
            <li>
              <span style={{ marginRight: '10px' }}>{user?.name}</span>{' '}
              <ArrowIcon />
            </li>
          </ul>
        </div>
      </nav>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <b>© {year} Blue Express</b> - Todos los derechos reservados
      </footer>
    </div>
  );
};

export default AuthenticatedLayout;
