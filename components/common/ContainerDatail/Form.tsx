import { ChangeEvent, FC, useEffect, useState } from 'react';

import styles from './form.module.css';
import { ContainerType } from 'types/ContainerType';

export type FormPropsType = {
  bases: string[];
  osCode: number;
  origen: string;
  destino: string;
  tipoContenedor: string;
  contenedorOf: string;
  createdAt: string;
  onChangeForm: (data: Partial<ContainerType>) => void;
};

const Form: FC<FormPropsType> = ({
  bases,
  osCode,
  origen,
  destino,
  tipoContenedor,
  contenedorOf,
  createdAt,
  onChangeForm,
}) => {
  const [container, setContainer] = useState<Partial<ContainerType>>({
    osCode,
    origen,
    destino,
    tipoContenedor,
    contenedorOf,
    createdAt,
  });

  useEffect(() => {
    setContainer((prev) => ({ ...prev, osCode }));
  }, [osCode]);

  const onChangeInput = <K extends keyof ContainerType>(attr: K) => (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setContainer((prev) => {
      onChangeForm({ ...prev, [attr]: event.target.value });
      return { ...prev, [attr]: event.target.value };
    });
  };

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <div className={styles.col}>
          <label>ID</label>
          <div className={styles.disabledInput}>{container.osCode}</div>
        </div>
        <div className={styles.col}>
          <label>Origen</label>
          <input type="text" readOnly value={container.origen} />
        </div>
        <div className={styles.col}>
          <label>Destino</label>
          <select
            name="Destino"
            id="Destino"
            onChange={onChangeInput('destino')}
            value={container.destino}
          >
            {bases.map((base, index) => (
              <option key={index} value={base}>
                {base}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <label>Tipo de Contendor</label>
          <input type="text" readOnly value={container.tipoContenedor} />
        </div>
        <div className={styles.col}>
          <label>Contendor de</label>
          <select
            name="container-type"
            id="container-type"
            onChange={onChangeInput('contenedorOf')}
          >
            <option value="Traslado">{container.contenedorOf}</option>
          </select>
        </div>
        <div className={styles.col}>
          <label>Fecha</label>
          <input
            type="text"
            readOnly
            value={new Date(container.createdAt).toLocaleString('es', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })}
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
