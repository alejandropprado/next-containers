import { FC } from 'react';

type PropTypes = {
  size?: number;
  color?: string;
};

const Place: FC<PropTypes> = ({ size = 13, color = 'var(--bx-color-black)' }) => (
  <svg
    width={`${size}`}
    height={`${size + 6}`}
    viewBox="0 0 13 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.65305 8.89281C8.02229 8.89281 9.13228 7.8055 9.13228 6.46423C9.13228 5.12296 8.02229 4.03564 6.65305 4.03564C5.28381 4.03564 4.17383 5.12296 4.17383 6.46423C4.17383 7.8055 5.28381 8.89281 6.65305 8.89281Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.6119 8.89286C9.75246 13.1429 6.65342 18 6.65342 18C6.65342 18 3.55438 13.1429 1.69496 8.89286C-0.164464 4.64286 2.93458 1 6.65342 1C10.3723 1 13.4713 4.64286 11.6119 8.89286Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Place;
