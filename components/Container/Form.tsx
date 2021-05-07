import { FC, useEffect } from 'react';

import { Card } from 'components/common/Card';
import styles from './form.module.css';
import { useContainerDispatch, useContainerState } from 'hooks/useContainer';
import ContainerFormDatail from 'components/common/ContainerDatail/Form';
import { ContainerType } from 'types/ContainerType';

type PropsType = {
  bases: string[];
  osCode: number;
};

const Form: FC<PropsType> = ({ bases, osCode }) => {
  const { newContainer } = useContainerState();
  const { updateNewContainer } = useContainerDispatch();

  useEffect(() => {
    updateNewContainer({ ...newContainer, osCode });
  }, [osCode]);

  const onChangeForm = (data: Partial<ContainerType>) => {
    updateNewContainer({ ...data });
  };

  console.log('container', { newContainer });

  return (
    <Card marginBottom>
      <h6 className={styles.title}>Contenedor ID: {newContainer.osCode}</h6>
      <div>
        <ContainerFormDatail
          bases={bases}
          osCode={newContainer.osCode}
          contenedorOf={newContainer.contenedorOf}
          createdAt={newContainer.createdAt}
          origen={newContainer.origen}
          destino={newContainer.destino}
          tipoContenedor={newContainer.tipoContenedor}
          onChangeForm={onChangeForm}
        />
      </div>
    </Card>
  );
};

export default Form;
