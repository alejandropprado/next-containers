import { useEffect, useState } from 'react';

import { useContainerState, useContainerDispatch } from 'hooks/useContainer';
import { AuthenticatedLayout } from 'components/layout/Authenticated';
import Form from 'components/Container/Form';
import Actions from 'components/Container/Actions';
import { Breadcrumbs } from 'components/common/Breadcrumbs';
import { ModalGoBack } from 'components/common/Modal';

export default function Container(): JSX.Element {
  const { newContainer } = useContainerState();
  const { updateNewContainer } = useContainerDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [bases, setBases] = useState<string[]>([]);

  useEffect(() => {
    if (newContainer.osCode === 0) {
      updateNewContainer({
        osCode: Math.floor(Math.random() * 10000000 + 80000000),
      });
    }

    setBases([
      'SL4 - HUB URBANO',
      'SL5 - HUB 5',
      'LYD - LOG Y DISTRIB',
      'ANF - ANTOFAGASTA',
      'ARI - ARICA',
      'CCO - CURICO',
      'CCP - CONCEPCION',
      'CJC - CALAMA',
      'CPO - COPIAPO',
      'GXQ - COYHAIQUE',
      'IQQ - IQUIQUE',
      'KNA - VINA DEL MAR',
      'LSC - LA SERENA',
      'LSQ - LOS ANGELES',
      'PMC - PUERTO MONTT',
      'PUQ - PUNTA ARENAS',
      'RCG - RANCAGUA',
      'SCL - SANTIAGO',
      'YAI - CHILLAN',
      'ZAL - VALDIVIA',
      'ZCA - TALCA',
      'ZCO - TEMUCO',
      'ZLC - LA CALERA',
      'ZOS - OSORNO',
      'CDS - CENTRO DISTRIBUCION STGO',
      'VAP - VALPARAISO',
      'SL3 - HUB 3',
    ]);
  }, []);

  return (
    <>
      <div>
        <Breadcrumbs
          routes={[
            { title: 'Home', onClick: () => setShowModal(true) },
            { title: 'Crear Contenedor' },
          ]}
        />
        <div>
          <Form bases={bases} osCode={newContainer.osCode} />
          <Actions osCode={String(newContainer.osCode)} />
        </div>
      </div>
      <ModalGoBack
        isOpen={showModal}
        toggleModal={() => {
          setShowModal(false);
          updateNewContainer({ payload: [], osCode: 0 });
        }}
      />
    </>
  );
}

Container.Layout = AuthenticatedLayout;
