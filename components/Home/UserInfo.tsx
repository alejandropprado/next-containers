import { FC } from 'react';

import { useUser } from 'hooks/useUser';
import { Card } from 'components/common/Card';
import PlaceIcon from 'components/icons/Place';
import UserIcon from 'components/icons/User';

import styles from './userInfo.module.scss';

const UserInfoComponent: FC = () => {
  const { user } = useUser();

  return (
    <Card marginBottom>
      <ul className={styles.info}>
        <li>
          <UserIcon size={38} color="var(--bx-color-black)" />
        </li>
        <li>
          Operador: <b>{user?.name}</b>
        </li>
        <li>
          Supervisor: <b>{user?.supervisor}</b>
        </li>
        <li>
          <PlaceIcon size={14} />
          <span>
            {' '}
            {user?.base} <span className={styles.bxText}>Blue Express</span>
          </span>
        </li>
        <li>
          <div>{user?.turn}</div>
        </li>
      </ul>
    </Card>
  );
};

export default UserInfoComponent;
