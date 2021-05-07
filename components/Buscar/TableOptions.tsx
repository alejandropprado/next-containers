import { FC } from 'react';

import InfoIcon from 'components/icons/Info';
import LabelIcon from 'components/icons/Label';
import FormIcon from 'components/icons/Form';

import styles from './tableOptions.module.css';

type PropsType = {
  id: string;
};

const TableOptions: FC<PropsType> = () => {
  return (
    <div className={styles.container}>
      <span className={styles.iconContent}>
        <InfoIcon />
      </span>
      <span className={styles.iconContent}>
        <LabelIcon />
      </span>
      <span className={styles.iconContent}>
        <FormIcon />
      </span>
    </div>
  );
};

export default TableOptions;
