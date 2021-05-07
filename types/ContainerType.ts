import { OsType } from "./OsType";

export type ContainerType = {
  osCode: number;
  origen: string;
  destino: string;
  tipoContenedor: string;
  contenedorOf: string;
  createdAt: string;
  state: string;
  userWasCreated: string;
  payload: OsType[];
};
