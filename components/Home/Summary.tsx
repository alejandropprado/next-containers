import { FC, useEffect } from 'react';

import { Card } from 'components/common/Card';
import ArrowUpSvgIcon from 'components/icons/ArrowUpSvg';

import styles from './summary.module.css';
import { useFetch } from 'hooks/useFetch';

type MiniCardPropsType = {
  count: number;
  status: string;
};

const MiniCard: FC<MiniCardPropsType> = ({ count, status }) => (
  <div className={styles.miniCard}>
    <Card withoutPadding>
      <div className={styles.miniCardBody}>
        <div className={styles.miniCardTitle}>{count}</div>
        <div className={styles.minicardSubtitle}>Contenedores</div>
        <div className={styles.minicardDetail}>
          <span>{status}</span>{' '}
          <div>
            <ArrowUpSvgIcon /> {count}
          </div>
        </div>
      </div>
    </Card>
  </div>
);

type SumaryPropsType = {
  creados: number;
  sellados: number;
  rezagado: number;
  total: number;
};

const SummaryComponent: FC = () => {
  const { data, loading } = useFetch(
    'https://desa-api.bluex.cl/api/v1/container/label/statistic',
    {}
  );

  const summary = {
    ...(data || {}),
    rezagado: 0,
  } as SumaryPropsType;

  return (
    <Card>
      <div className={styles.header}>
        <p>Como vamos hoy</p>
        <p>Te mostraremos el recuento del dia</p>
      </div>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div className={styles.miniCardContainer}>
          <MiniCard count={summary?.creados} status="Creados" />
          <MiniCard count={summary?.sellados} status="Sellados" />
          <MiniCard count={summary?.rezagado} status="Rezagados" />
          <MiniCard count={summary?.total} status="Total" />
        </div>
      )}
    </Card>
  );
};

export default SummaryComponent;
