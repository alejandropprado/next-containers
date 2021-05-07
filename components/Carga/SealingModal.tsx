import { FC } from 'react';
import { useRouter } from 'next/router';

import { useContainerState } from 'hooks/useContainer';
import { Modal } from 'components/common/Modal';
import { Button } from 'components/common/Button';
import CheckIcon from 'components/icons/Check';

import styles from './sealingModal.module.css';

type PropsType = {
  isOpen: boolean;
  toggleModal: () => void;
};

const SealingModal: FC<PropsType> = ({ isOpen, toggleModal }) => {
  const { newContainer } = useContainerState();
  const { replace } = useRouter();

  return (
    <Modal isOpen={isOpen}>
      <div className={styles.modal}>
        <div className={styles.icon}>
          <CheckIcon />
        </div>
        <h6>Contenedor Sellado</h6>
        <h6>ID: {newContainer.osCode}</h6>
        <div className={styles.contentButton}>
          <Button
            fullWidth
            variant="secondary"
            onClick={() => {
              replace('/home');
              toggleModal();
            }}
          >
            Imprimir manifiesto
          </Button>
          <Button
            fullWidth
            variant="secondary"
            onClick={() => {
              replace('/home');
              toggleModal();
            }}
          >
            Imprimir etiqueta
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SealingModal;
