import { FC } from 'react';

import { Card } from 'components/common/Card';
import { ButtonLink } from 'components/common/Button';
import styles from './containerPanel.module.css';

type SectionPropsType = {
  title: string;
  buttonText: string;
  to: string;
};

const Section: FC<SectionPropsType> = ({ title, buttonText, to }) => (
  <div className={styles.section}>
    <div className={styles.box}></div>
    <div className={styles.sectionContent}>
      <p>{title}</p>
      <ButtonLink to={to} fullWidth lg>
        {buttonText}
      </ButtonLink>
    </div>
  </div>
);

const ContainerPannelComponent: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentCard}>
        <Card marginBottom>
          <Section
            title="Arma y etiqueta tus contenedores de forma fácil y rápida."
            buttonText="Crear Contenedor"
            to="/container"
          />
        </Card>
      </div>
      <div className={styles.contentCard}>
        <Card marginBottom>
          <Section
            title="Encuentra los detalles de tus contenedores."
            buttonText="Buscar Contenedor"
            to="/buscar"
          />
        </Card>
      </div>
    </div>
  );
};

export default ContainerPannelComponent;
