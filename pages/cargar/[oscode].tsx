import { useState } from 'react';
import { useRouter } from 'next/router';

import { useContainerState, useContainerDispatch } from 'hooks/useContainer';
import { AuthenticatedLayout } from 'components/layout/Authenticated';
import { Breadcrumbs } from 'components/common/Breadcrumbs';
import { ModalGoBack } from 'components/common/Modal';
import { Card } from 'components/common/Card';
import { Table } from 'components/common/Table';
import { Button } from 'components/common/Button';
import TrashIcon from 'components/icons/Trash';
import OsSearchForm from 'components/Carga/OsSearchForm';
import RemoveOsModal from 'components/Carga/RemoveOsModal';
import SealingConfirmationModal from 'components/Carga/SealingConfirmationModal';

import Styles from 'components/Carga/carga.module.css';
import { OsType } from 'types/OsType';

export default function Container(): JSX.Element {
  const { back } = useRouter();
  const { newContainer } = useContainerState();
  const { updateNewContainer } = useContainerDispatch();
  const [showExitModal, setShowExitModal] = useState<boolean>(false);
  const [osSelected, setOsSelected] = useState<{ os: OsType; index: number }>();
  const [showRemoveOsModal, setShowRemoveOsModal] = useState<boolean>(false);
  const [
    showSealingConfirmation,
    setShowSealingConfirmation,
  ] = useState<boolean>(false);

  const onRemoveOs = (os: OsType, index: number) => {
    setOsSelected({ os, index });
    setShowRemoveOsModal(true);
  };

  const columns = [
    { title: 'Estado', accesor: 'state', id: 'state' },
    { title: 'ID', accesor: 'id', id: 'id' },
    { title: 'Usuario', accesor: 'cliente', id: 'user' },
    { title: 'Fecha', accesor: 'fecha', id: 'fecha' },
    { title: 'Destino', accesor: 'destino', id: 'destino' },
    {
      title: 'Opciones',
      id: 'options',
      children: (value: OsType, index: number) => (
        <div className={Styles.tableOptionBtn}>
          <span onClick={() => onRemoveOs(value, index)}>
            <TrashIcon />
          </span>
        </div>
      ),
    },
  ];

  return (
    <>
      <Breadcrumbs
        routes={[
          { title: 'Home', onClick: () => setShowExitModal(true) },
          { title: 'Crear Contenedor', onClick: back },
          { title: 'Cargar Contenedor' },
        ]}
      />
      <Card>
        <div className={Styles.header}>
          <h6>Busca tu Contenedor</h6>
          <OsSearchForm />
        </div>
        <div>
          <Table columns={columns} data={newContainer.payload} />
        </div>
        <div className={Styles.contentBtn}>
          <Button variant="secondary" onClick={() => setShowExitModal(true)}>
            Cancelar
          </Button>
          <Button
            variant="secondary"
            disabled={!newContainer.payload.length}
            onClick={() => setShowSealingConfirmation(true)}
          >
            Finalizar
          </Button>
        </div>
      </Card>
      <ModalGoBack
        isOpen={showExitModal}
        toggleModal={() => {
          setShowExitModal(false);
          updateNewContainer({ payload: [], osCode: 0 });
        }}
      />
      <RemoveOsModal
        isOpen={showRemoveOsModal}
        toggleModal={() => setShowRemoveOsModal(false)}
        osSelected={osSelected}
      />
      <SealingConfirmationModal
        isOpen={showSealingConfirmation}
        toggleModal={() => setShowSealingConfirmation(false)}
      />
    </>
  );
}

Container.Layout = AuthenticatedLayout;
