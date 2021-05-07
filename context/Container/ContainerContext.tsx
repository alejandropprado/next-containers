import { createContext } from 'react';
import { ContainerType } from 'types/ContainerType';

export type ContainerContextStateType = {
  containers: ContainerType[];
  newContainer: ContainerType | null;
  containerFound: undefined | null | ContainerType;
  containersKeyedById: { [key: string]: ContainerType };
};

export const ContainerContextState = createContext<ContainerContextStateType>({
  containers: [],
  newContainer: null,
  containerFound: undefined,
  containersKeyedById: {},
});

export type ContainerContextDispatchType = {
  addContainers: (containers: ContainerType[]) => void;
  updateNewContainer: (container: Partial<ContainerType>) => void;
  setContainerFound: (container: ContainerType) => void;
};

export const ContainerContextDispatch = createContext<ContainerContextDispatchType>(
  {} as ContainerContextDispatchType
);
