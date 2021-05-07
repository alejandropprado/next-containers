import { FC } from 'react';

type PropTypes = {
  size?: number;
  color?: string;
};

const ArrowUpSvg: FC<PropTypes> = ({ size = 13, color = 'var(--bx-color-black)' }) => {
  return (
    <svg
      width={`${size}`}
      height={`${size + 1}`}
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.054 6.987L12.43 2.21a1.073 1.073 0 000-1.43.87.87 0 00-1.31 0L6.742 5.556 2.375.781a.87.87 0 00-1.31 0 1.073 1.073 0 000 1.43L5.44 6.987l-4.376 4.775a1.073 1.073 0 000 1.43.876.876 0 001.31 0l4.377-4.775 4.376 4.776a.876.876 0 001.31 0 1.073 1.073 0 000-1.43L8.054 6.986z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowUpSvg;
