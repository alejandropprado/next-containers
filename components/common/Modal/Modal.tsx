import { FC, useEffect, useState } from 'react';
import cs from 'classnames';

import { Card } from 'components/common/Card';
import XIcon from 'components/icons/X';
import styles from './modal.module.css';

type propsTypes = {
  isOpen: boolean;
  toggleModal?: () => void;
};

const Modal: FC<propsTypes> = ({ isOpen, toggleModal, children }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    }
    return () => {
      setShowModal(false);
    };
  }, [isOpen]);

  return (
    <div className={cs(styles.modal, showModal && styles.showModal)}>
      <Card>
        {toggleModal && (
          <div className={styles.closeModalContent}>
            <span onClick={toggleModal}>
              <XIcon />
            </span>
          </div>
        )}
        <div className={styles.modalBody}>{children}</div>
      </Card>
    </div>
  );
};

export default Modal;
