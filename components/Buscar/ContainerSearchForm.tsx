import { FC, FormEvent, useState } from 'react';

import { useContainerDispatch } from 'hooks/useContainer';
import SearchIcon from 'components/icons/Search';

import styles from './containerSearchForm.module.css';

const OsSearchForm: FC = () => {
  const { setContainerFound } = useContainerDispatch();
  const [osId, setOsId] = useState('');

  const onSubmitForm = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    setContainerFound(null);
  };

  return (
    <form onSubmit={onSubmitForm} className={styles.form}>
      <input
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
