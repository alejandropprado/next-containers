import { FC } from 'react';
import { useRouter } from 'next/router';

import { Modal } from 'components/common/Modal';
import { Button } from 'components/common/Button';
import AlertIcon from 'components/icons/Alert';

import styles from './modalGoBack.module.css';

type PropsType = {
  isOpen: boolean;
  toggleModal: () => void;
};

const ModalGoBack: FC<PropsType> = ({ isOpen, toggleModal }) => {
  const { replace } = useRouter();

  return (
    <Modal isOpen={isOpen} toggleModal={toggleModal}>
      <div className={styles.modal}>
        <div className={styles.modalTitle}>
          <h5><AlertIcon /></h5>
          <p className={styles.subtitle}>
            Al salir de esta pantalla <br /> perderá todo el avance
          </p>
          <h6 className={styles.title}>¿Esta seguro que desea salir?</h6>
        </div>
        <div className={styles.contentButtons}>
          <div>
            <Button fullWidth variant="secondary" onClick={() => replace('/home')}>
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

export default ModalGoBack;
