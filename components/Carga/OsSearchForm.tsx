import { FC, FormEvent, useRef, useState } from 'react';

import { useContainerDispatch, useContainerState } from 'hooks/useContainer';
import SearchIcon from 'components/icons/Search';

import styles from './osSearchForm.module.css';
import { toDate } from 'utils/formatDate';

const OsSearchForm: FC = () => {
  const { newContainer } = useContainerState();
  const { updateNewContainer } = useContainerDispatch();
  const [osId, setOsId] = useState('');
  const inputRef = useRef<HTMLInputElement>();

  const onSubmitForm = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    if (!osId.trim().length) {
      return;
    }

    updateNewContainer({
      payload: [
        {
          state: 'activo',
          id: osId,
          cliente: 'joan',
          fecha: toDate(new Date()),
          destino: 'Unknow',
        },
        ...newContainer.payload,
      ],
    });

    setOsId('');
    inputRef.current.focus();
  };

  return (
    <form onSubmit={onSubmitForm} className={styles.form}>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        onChange={(event) =>
          setOsId(event.target.value.replace(/[^0-9]+/g, ''))
        }
        placeholder="Buscar Contenedor"
        value={osId}
      />
      <button className={styles.button} type="submit">
        <SearchIcon size={18} />
      </button>
    </form>
  );
};

export default OsSearchForm;
