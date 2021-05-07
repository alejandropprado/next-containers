import { FC, useCallback, useEffect, useState, useMemo } from 'react';

import {
  ContainerContextDispatch,
  ContainerContextState,
} from './ContainerContext';
import type { ContainerType } from 'types/ContainerType';
import { useUser } from 'hooks/useUser';

export const ContainerProvider: FC = ({ children }) => {
  const { user } = useUser();
  const [containers, setContainers] = useState<ContainerType[]>([
    {
      osCode: 83392514,
      origen: 'IQQ - Iquique',
      destino: 'IQQ - Iquique',
      tipoContenedor: 'OS',
      contenedorOf: 'Traslado',
      createdAt: '26/05/2021',
      state: 'Created',
      userWasCreated: 'Ali pinto',
      payload: [],
    },
    {
      osCode: 85271730,
      origen: 'IQQ - Iquique',
      destino: 'IQQ - Iquique',
      tipoContenedor: 'OS',
      contenedorOf: 'Traslado',
      createdAt: '26/05/2021',
      state: 'Created',
      userWasCreated: 'Ali pinto',
      payload: [],
    },
  ]);
  const [newContainer, setNewContainer] = useState<ContainerType>({
    osCode: 0,
    createdAt: '',
    origen: '',
    destino: '',
    payload: [],
    state: '',
    tipoContenedor: '',
    userWasCreated: '',
    contenedorOf: '',
  });
  const [containerFound, setContainerFound] = useState<
    undefined | null | ContainerType
  >();

  useEffect(() => {
    if (user) {
      setNewContainer((prev) => ({
        ...prev,
        origen: user.base,
        state: 'Created',
        tipoContenedor: 'OS',
        userWasCreated: user.name,
        contenedorOf: 'Traslado',
        createdAt: new Date().toISOString(),
      }));
    }
  }, [user]);

  const addContainers = useCallback((newContainers: ContainerType[]) => {
    setContainers(newContainers);
  }, []);

  const containersKeyedById = useMemo(() => {
    return containers.reduce(
      (acum, container) => ({
        ...acum,
        [container.osCode]: container,
      }),
      {} as { [key: string]: ContainerType }
    );
  }, [containers]);

  const updateNewContainer = useCallback((update: Partial<ContainerType>) => {
    setNewContainer((prev) => ({
      ...prev,
      ...update,
    }));
  }, []);

  return (
    <ContainerContextState.Provider
      value={{ containers, newContainer, containerFound, containersKeyedById }}
    >
      <ContainerContextDispatch.Provider
        value={{ addContainers, updateNewContainer, setContainerFound }}
      >
        {children}
      </ContainerContextDispatch.Provider>
    </ContainerContextState.Provider>
  );
};
