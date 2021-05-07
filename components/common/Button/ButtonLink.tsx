import { FC } from 'react';
import Link from 'next/link';
import cs from 'classnames';

import styles from './button.module.css';

type PropsType = {
  to: string;
  lg?: boolean;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
};

const ButtonLink: FC<PropsType> = ({
  children,
  to,
  fullWidth,
  lg,
  variant,
}) => {
  return (
    <Link href={to}>
      <a
        className={cs(
          styles.btn,
          lg && styles.lg,
          fullWidth && styles.fullWidth,
          variant === 'secondary' ? styles.secondary : styles.primary
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default ButtonLink;
