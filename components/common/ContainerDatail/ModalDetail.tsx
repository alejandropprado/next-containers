import { FC } from 'react';

import { Modal } from 'components/common/Modal';
import Form, { FormPropsType } from './Form';
import InfoIcon from 'components/icons/Info';
import { Button } from 'components/common/Button';

import styles from './modalDetail.module.css';

type PropsTypes = FormPropsType & {
  status: string;
  isOpen: boolean;
  toggleMoodal: () => void;
};

const ModalDetail: FC<PropsTypes> = (props) => {
  return (
    <Modal isOpen={props.isOpen} toggleModal={props.toggleMoodal}>
      <div>
        <div className={styles.header}>
          <h6>Detalles del Contenedor</h6>
          <div className={styles.status}>
            <span>Estado</span>
            <div>
              {props.status} <InfoIcon color={'var(--bx-color-white)'} />
            </div>
          </div>
        </div>
        <div>
          <Form {...props} />
        </div>
        <div className={styles.contentButton}>
          <div className={styles.checkbox}>
            <input type="checkbox" />{' '}
            <span>
              Al hacer clic en Auditar Contenedor, se realizará la extracción
              del contenido. Una vez ejercida la acción no podrás volver atrás.
            </span>
          </div>
          <Button variant="secondary">Texto por estado</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDetail;
