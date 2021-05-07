import { FC } from 'react';

type PropTypes = {
  size?: number;
  color?: string;
};

const Label: FC<PropTypes> = ({
  size = 16,
  color = 'var(--bx-color-black)',
}) => {
  return (
    <svg
      width={size}
      height={size - 1}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.30612 2.30534L3.16966 3.28665C2.94129 3.3302 2.75807 3.55102 2.75741 3.78351L2.73687 9.01743C2.73458 9.13205 2.78268 9.24186 2.86513 9.31027L9.22553 14.5877C9.39436 14.7278 9.66538 14.6808 9.82952 14.483L14.9865 8.26773C15.1506 8.06991 15.1468 7.79487 14.978 7.65479L8.6176 2.37736C8.53515 2.30895 8.42216 2.27734 8.30612 2.30534ZM14.0763 8.11837L9.51477 13.6159L3.59017 8.7001L3.60743 4.06934L8.1555 3.19793L14.0801 8.11377L14.0763 8.11837Z"
        fill={color}
      />
      <path
        d="M6.52038 6.48624C6.94412 5.97554 6.93431 5.26838 6.49847 4.90675C6.06262 4.54512 5.3658 4.66596 4.94205 5.17665C4.51831 5.68735 4.52812 6.39451 4.96397 6.75614C5.39981 7.11777 6.09664 6.99694 6.52038 6.48624Z"
        fill={color}
      />
    </svg>
  );
};

export default Label;