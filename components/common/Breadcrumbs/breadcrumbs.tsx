import { FC } from 'react';

import styles from './breadcrumbs.module.css';

type propsTypes = {
  routes: Array<{ title: string; onClick?: () => void }>;
};

const Breadcrumbs: FC<propsTypes> = ({ routes }) => {
  return (
    <div className={styles.breadcrumbs}>
      {routes.map((route, index) => (
        <span
          key={route.title}
          onClick={route.onClick}
          className={route.onClick ? styles.pointer : ''}
        >
          {route.title}
          {index !== routes.length - 1 ? ' > ' : ''}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
