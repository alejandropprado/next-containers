import { useState, useMemo } from 'react';

import { useContainerState } from 'hooks/useContainer';
import { AuthenticatedLayout } from 'components/layout/Authenticated';
import { Breadcrumbs } from 'components/common/Breadcrumbs';
import { ModalGoBack } from 'components/common/Modal';
import { Card } from 'components/common/Card';
import { Table } from 'components/common/Table';
import ContainerSearchForm from 'components/Buscar/ContainerSearchForm';
import TableOptions from 'components/Buscar/TableOptions';

import Styles from 'components/Buscar/buscar.module.css';

export default function Container(): JSX.Element {
  const { containerFound, containers } = useContainerState();
  const [showExitModal, setShowExitModal] = useState<boolean>(false);
  const columns = [
    { title: 'Estado', accesor: 'state', id: 'state' },
    { title: 'ID', accesor: 'osCode', id: 'state' },
    { title: 'Usuario', accesor: 'userWasCreated', id: 'state' },
    { title: 'Base/Origen', accesor: 'origen', id: 'state' },
    { title: 'Base/Destino', accesor: 'destino', id: 'state' },
    {
      title: 'Opciones',
      id: 'options',
      children: (value) => <TableOptions id={value?.osCode} />,
    },
  ];
  const dataTable = useMemo(() => {
    if (containerFound === undefined) {
      return containers;
    } else if (containerFound === null) {
      return [];
    }

    return [containerFound];
  }, [containerFound, containers]);

  return (
    <>
      <ModalGoBack
        isOpen={showExitModal}
        toggleModal={() => setShowExitModal(false)}
      />
      <Breadcrumbs
        routes={[
          { title: 'Home', onClick: () => setShowExitModal(true) },
          { title: 'Buscar Contenedor' },
        ]}
      />
      <Card>
        <div className={Styles.header}>
          <h6>Busca tu Contenedor</h6>
          <ContainerSearchForm />
        </div>
        <div>
          <Table columns={columns} data={dataTable} />
        </div>
      </Card>
    </>
  );
}

Container.Layout = AuthenticatedLayout;
