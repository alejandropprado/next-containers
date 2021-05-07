import React, { FC } from 'react';

import { Card } from 'components/common/Card';
import { Button, ButtonLink } from 'components/common/Button';
import styles from './actions.module.css';

type PropsType = {
  osCode: string;
};

const Actions: FC<PropsType> = ({ osCode }) => {
  return (
    <Card>
      <h6 className={styles.title}>Tu Contenedor</h6>
      <p className={styles.subtitle}>
        Elige que necesitas hacer con el contenedor creado
      </p>
      <br />
      <div className={styles.contentButtons}>
        <div>
          <Button fullWidth>Guardar</Button>
        </div>
        <div>
          <ButtonLink fullWidth to={`/cargar/${osCode}`}>
            Agregar OS
          </ButtonLink>
        </div>
      </div>
    </Card>
  );
};

export default Actions;
