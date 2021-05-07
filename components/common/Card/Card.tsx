import { FC } from 'react';
import cs from 'classnames';

import styles from './card.module.css';

type CardPropsType = {
  marginBottom?: boolean;
  marginTop?: boolean;
  withoutPadding?: boolean;
};

export const Card: FC<CardPropsType> = ({
  marginBottom,
  marginTop,
  children,
  withoutPadding,
}) => {
  return (
    <div
      className={cs(
        styles.card,
        marginBottom && styles.cardMarginBottom,
        marginTop && styles.cardMarginTop
      )}
    >
      <div
        className={cs(styles.cardBody, withoutPadding && styles.withoutPadding)}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
