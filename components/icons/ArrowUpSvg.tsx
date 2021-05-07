import { FC } from 'react';

type PropTypes = {
  size?: number;
  color?: string;
};

const ArrowUpSvg: FC<PropTypes> = ({ size = 16, color = '#828282' }) => {
  return (
    <svg
      width={`${size}`}
      height={`${size + 1}`}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 11.8333L6 7.83334L8.66667 10.5L14 5.16667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33331 5.16667H14V9.83334"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpSvg;
