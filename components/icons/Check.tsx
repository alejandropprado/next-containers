import { FC } from "react";

type PropType = {
  size?: number;
  color?: string;
};

const Check: FC<PropType> = ({ size = 50, color = "#212121" }) => {
  return (
    <svg
      width={size}
      height={size - 18}
      viewBox="0 0 50 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0546 32C19.409 32 18.7843 31.7746 18.2845 31.3035L0.792057 14.8118C-0.228336 13.8489 -0.269985 12.251 0.70876 11.2471C1.6875 10.2433 3.3118 10.2023 4.3322 11.1652L19.9921 25.9565L45.6269 0.737516C46.6265 -0.245839 48.2508 -0.245839 49.2503 0.737516C50.2499 1.72087 50.2499 3.31882 49.2503 4.30218L21.8663 31.2625C21.3665 31.7542 20.7001 32 20.0546 32Z"
        fill={color}
      />
    </svg>
  );
};

export default Check;
