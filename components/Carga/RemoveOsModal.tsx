import { FC } from 'react';

import { useContainerDispatch, useContainerState } from 'hooks/useContainer';
import { Modal } from 'components/common/Modal';
import AlertIcon from 'components/icons/Alert';
import { Button } from 'components/common/Button';
import type { OsType } from 'types/OsType';

import styles from './removeOsModal.module.css';

type PropsType = {
  isOpen: boolean;
  toggleModal: () => void;
  osSelected: {
    os: OsType;
    index: number;
  };
};

const RemoveOsModal: FC<PropsType> = ({ isOpen, toggleModal, osSelected }) => {
  const { newContainer } = useContainerState();
  const { updateNewContainer } = useContainerDispatch();

  const OnDelete = () => {
    updateNewContainer({
      payload: newContainer.payload.filter(
        (os, index) =>
          !(index === osSelected.index && os.id === osSelected.os.id)
      ),
    });
    toggleModal();
  };

  return (
    <Modal isOpen={isOpen} toggleModal={toggleModal}>
      <div className={styles.modal}>
        <div className={styles.modalTitle}>
          <h5>
            <AlertIcon />
          </h5>
          <p className={styles.subtitle}>
            Estas seguro que quieres remover la OS
          </p>
          <h6 className={styles.title}>ID: {osSelected?.os?.id}</h6>
        </div>
        <div className={styles.contentButtons}>
          <div>
            <Button fullWidth variant="secondary" onClick={OnDelete}>
              Si, estoy seguro
            </Button>
          </div>
          <div>
            <Button fullWidth variant="primary" onClick={toggleModal}>
              No, continuar
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RemoveOsModal;
