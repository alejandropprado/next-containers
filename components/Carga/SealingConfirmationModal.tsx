import { FC, useState } from 'react';

import { useContainerDispatch, useContainerState } from 'hooks/useContainer';
import { Modal } from 'components/common/Modal';
import { Button } from 'components/common/Button';
import PackageDoneIcon from 'components/icons/PackageDone';
import SealingModal from './SealingModal';

import styles from './sealingConfirmationModal.module.css';

type PropsType = {
  isOpen: boolean;
  toggleModal: () => void;
};

const SealingConfirmationModal: FC<PropsType> = ({ isOpen, toggleModal }) => {
  const { newContainer } = useContainerState();
  const { updateNewContainer } = useContainerDispatch();
  const [showSealingModal, setShowSealingModal] = useState<boolean>(false);

  return (
    <>
      <Modal isOpen={isOpen} toggleModal={toggleModal}>
        <div className={styles.modal}>
          <h6>Contenedor ID: {newContainer.osCode}</h6>
          <div className={styles.detail}>
            <div>
              <span>OS</span>
              <div>
                <div className={styles.icon}>
                  <PackageDoneIcon />
                </div>
                <span>{newContainer.payload.length}</span>
              </div>
            </div>
            <div>
              <span>Bultos</span>
              <div>
                <div className={styles.icon}>
                  <PackageDoneIcon />
                </div>
                <span>{newContainer.payload.length}</span>
              </div>
            </div>
            <div>
              <span>Origen</span>
              <div>{newContainer.origen}</div>
            </div>
            <div>
              <span>Destino</span>
              <div>{newContainer.destino}</div>
            </div>
          </div>
          <div className={styles.contentButton}>
            <Button
              fullWidth
              variant="secondary"
              onClick={() => {
                toggleModal();
                setShowSealingModal(true);
              }}
            >
              Sellar Contenedor
            </Button>
          </div>
        </div>
      </Modal>
      <SealingModal
        isOpen={showSealingModal}
        toggleModal={() => setShowSealingModal(false)}
      />
    </>
  );
};

export default SealingConfirmationModal;
