import { FC } from 'react';
import cs from 'classnames';

import styles from './button.module.css';

type PropsType = {
  lg?: boolean;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonLink: FC<PropsType> = (props) => {
  const { fullWidth, lg, variant } = props;
  const buttonProps = Object.assign({}, props);
  delete buttonProps.fullWidth;
  delete buttonProps.lg;
  delete buttonProps.variant;

  return (
    <button
      {...buttonProps}
      className={cs(
        styles.btn,
        lg && styles.lg,
        fullWidth && styles.fullWidth,
        variant === 'secondary' ? styles.secondary : styles.primary
      )}
    />
  );
};

export default ButtonLink;
