import { FC } from 'react';

type LogoBxProps = {
  width?: number;
  height?: number;
  inverted?: boolean;
  display?: string;
};

const LogoBx: FC<LogoBxProps> = ({
  inverted = false,
  height,
  width,
  display,
}) => {
  return (
    <svg
      width={height ? undefined : width || 100}
      height={width ? undefined : height || 60}
      display={display ? 'block' : display}
      viewBox='0 0 100 60'
    >
      <path
        d='M58.848 59.996c0-2.503-.026-4.993.014-7.496.013-1.296.132-2.567 1.096-3.62 1.083-1.18 3.183-1.655 4.913-1.04 1.545.553 2.601 2.029 2.654 3.672.027.796.066 1.578-.106 2.361-.264 1.169-.845 1.99-1.94 2.709-1.414.924-2.735.718-4.148.333-.343-.09-.647-.333-1.017-.526v3.607h-1.466zm7.25-7.56c.027-.988-.144-1.913-.7-2.773-.739-1.155-3.208-1.463-4.225-.18-1.15 1.438-1.202 3.967-.304 5.494.99 1.695 3.553 1.695 4.649.052.528-.796.554-1.695.58-2.593zm33.889 2.914c-1.004 1.873-2.76 1.963-4.596 1.86-.476-.025-.977-.012-1.44-.218-.422-.18-.673-.744-.449-1.116.172-.27.357-.039.515.026 1.083.397 2.18.5 3.302.192.74-.205 1.268-.642 1.255-1.45-.013-.706-.463-1.117-1.07-1.412-1.004-.488-2.074-.86-2.998-1.502-1.215-.834-1.228-2.67.013-3.453 1.519-.962 3.17-.795 4.794-.32.528.154.145.616.12.898-.027.308-.305.064-.463.038-1.057-.205-2.113-.5-3.183-.09-.515.206-.845.553-.898 1.092-.053.526.211.91.687 1.142.885.424 1.783.847 2.68 1.27.714.334 1.335.77 1.572 1.554.013.038.106.038.172.064v1.425h-.013zM26.611 20.348c3.011.41 5.402 1.707 6.854 4.351.99 1.81 1.215 3.8 1.123 5.814-.066 1.49-.277 2.965-.938 4.326-1.228 2.567-3.5 3.902-6.167 4.698-2.668.795-5.402 1-8.175 1.103-6.049.231-12.11.026-18.159.103C.053 40.756 0 40.692 0 39.613V1.096C0 .107.08.017 1.083.017c5.652 0 11.318-.052 16.97.025 3.011.039 6.023.257 8.928 1.079 1.756.5 3.46 1.155 4.86 2.413 1.558 1.386 2.338 3.131 2.628 5.082.29 2.003.29 4.018-.37 5.982-1.043 3.131-3.328 4.915-6.55 5.686-.304.064-.62.038-.938.064zm-19.823.013c0 5.39.013 10.768-.013 16.16 0 .551.092.757.74.757 4.239-.026 8.478-.039 12.717-.013 2.708.013 5.745-1.926 6.815-4.505 1.11-2.696.898-5.314-1.004-7.663-1.003-1.245-2.271-2.13-3.882-2.554-1.48-.385-2.972-.437-4.477-.398-.515.013-.74-.18-.727-.68.013-.668.04-1.335-.013-2.003-.053-.68.304-.885.911-.898.753-.013 1.506 0 2.259 0 1.994.013 3.697-.693 5.137-2.003 2.641-2.413 3.235-6.327 1.347-9.33-1.664-2.645-4.2-3.813-7.37-3.787a870.97 870.97 0 01-11.581 0c-.674 0-.885.141-.885.821.053 5.365.026 10.73.026 16.096zm92.235 16.994c.37.064.515.295.502.641 0 .732-.014 1.463 0 2.195.013.45-.225.616-.648.616h-1.4c-5.163 0-10.34-.025-15.504 0-3.249.026-6.128-2.259-6.748-5.378a1.48 1.48 0 00-.172-.475c-.198 1.476-.885 2.67-1.915 3.735-1.308 1.348-2.945 2.003-4.794 2.028-4.675.052-9.363.065-14.039 0-3.05-.051-5.718-2.117-6.418-5.031-.172-.719-.224-1.438-.224-2.17.013-4.183 0-8.355 0-12.54 0-3.195 2.377-6.083 5.599-6.815 1.004-.218 1.255-.025 1.255.937 0 5.596.052 11.205-.014 16.802-.04 2.81 1.506 4.274 3.659 4.877 2.615.732 5.243.706 7.739-.578 1.347-.693 2.1-1.784 2.258-3.273.013-.166.053-.333.08-.5.012-.141.052-.295.052-.45V14.868c0-.167-.026-.346-.04-.513.397-.295.872-.193 1.255-.116 2.034.41 3.54 1.579 4.596 3.273.449.719.78 1.49.872 2.4.237-.167.21-.372.25-.564.7-2.927 2.602-4.557 5.296-5.224.634-.154 1.321-.154 1.981-.154 5.323-.013 10.645-.013 15.967-.013.924 0 1.03.115 1.03.988 0 .578-.013 1.168 0 1.746.027.526-.198.706-.753.706-4.014-.013-8.03-.026-12.044 0-1.162 0-2.245.192-3.236.924-1.201.873-2.218 3.119-1.135 5.044.832 1.463 2.086 2.22 3.816 2.22h3.725c.752 0 .898.155.898.86 0 .642-.04 1.297.013 1.939.053.629-.238.783-.806.77-1.135-.013-2.258 0-3.394 0-1.056 0-2.047.205-2.945.796-1.611 1.052-2.232 3.298-1.373 4.98.62 1.232 1.584 2.028 2.958 2.349.08.025.158.077.238.077 4.543.012 9.046.012 13.563 0zm-23.917-15.48v11.09c.396-1.348.99-2.58 2.02-3.594 1.057-1.04 2.351-1.592 3.777-1.951-3.103-.706-4.992-2.554-5.797-5.545zm-37.362-1.489V1.005c0-.886.12-.988 1.03-.988h4.662c.832 0 1.03.192 1.03.975 0 4.518.04 9.049-.013 13.567-.066 4.89-.066 9.768-.026 14.658.026 3.465.013 6.931.04 10.397.013 1.04-.093 1.129-1.163 1.129h-4.662c-.792 0-.924-.128-.924-.899.013-6.494.013-12.976.026-19.458zM80.005 52.77c-1.017 0-2.034.012-3.064-.013-.343 0-.436.064-.41.436.186 1.951 1.4 3.055 3.435 3.055.198 0 .396.026.594 0 .317-.038.555-.051.528.398-.026.334.04.642-.502.59-.792-.077-1.584.09-2.377-.14-1.558-.463-2.562-1.413-2.919-3.017-.409-1.836-.264-3.556.991-5.057 1.149-1.374 2.707-1.669 4.411-1.284 1.492.334 2.589 1.617 2.813 3.17.264 1.849.264 1.849-1.65 1.849-.621 0-1.229 0-1.85.013zm-.62-1.04c.792 0 1.597.013 2.39 0 .172 0 .436.116.436-.218-.04-1.245-.634-2.542-2.087-2.85-1.585-.333-3.222.86-3.54 2.503-.092.462-.026.604.476.59.78-.05 1.559-.025 2.325-.025zM44.4 52.77h-3.13c-.198 0-.475-.077-.435.295.145 1.232.541 2.349 1.756 2.94.753.371 1.598.256 2.417.23.198 0 .436-.103.383.218-.04.257.224.72-.225.745-.964.038-1.941.141-2.905-.18-1.48-.5-2.324-1.476-2.655-2.94-.396-1.77-.29-3.452.898-4.94 1.136-1.438 2.681-1.785 4.385-1.4 1.624.36 2.536 1.463 2.892 3.03.436 1.886.344 2.002-1.598 2.002a41.393 41.393 0 00-1.783 0zm-.74-1.04h2.457c.185 0 .45.051.423-.257-.08-1.193-.608-2.554-2.18-2.836-1.663-.308-3.433 1.13-3.499 2.798-.013.308.145.295.343.295.82-.013 1.638 0 2.457 0zm13.194-3.89c-.977 1.31-1.915 2.593-2.892 3.826-.304.385-.264.629.013.988 1.057 1.4 2.087 2.824 3.13 4.248-1.096.309-1.44.193-2.034-.654-.713-1.04-1.426-2.067-2.192-3.183-.78 1.065-1.611 2.04-2.271 3.119-.502.808-1.11.975-2.048.757.727-1.001 1.44-1.977 2.14-2.952.356-.488.7-.988 1.096-1.463.264-.308.198-.527-.026-.835-.978-1.27-1.942-2.554-2.932-3.863 1.017-.257 1.717-.039 2.245.86.515.873 1.162 1.656 1.796 2.529.66-.899 1.32-1.708 1.862-2.593.515-.77 1.136-1.04 2.113-.783zm28.672 7.882c1.228.513 2.43.718 3.671.385.634-.167 1.189-.5 1.255-1.245.079-.822-.185-1.207-1.004-1.617-.964-.488-1.968-.886-2.905-1.425-1.599-.924-1.163-3.093.21-3.735 1.493-.706 2.96-.54 4.451-.129.555.154.185.59.172.873-.026.36-.304.103-.449.064-1.056-.205-2.113-.487-3.196-.102-.555.192-.845.552-.938 1.13-.079.577.238.885.687 1.116.99.488 1.994.924 2.972 1.425 1.175.59 1.65 1.591 1.373 2.836-.211.988-1.03 1.45-1.888 1.72-1.387.437-2.8.27-4.187-.038-.33-.077-.422-.257-.343-.565.053-.218.079-.437.119-.693zm-15.967-1.297c0-1.476-.066-2.952.449-4.39.475-1.334 2.087-2.49 3.553-2.45.25.012.396.076.343.32-.066.244.264.655-.264.706-1.836.205-2.523 1.887-2.602 3.312-.08 1.527-.066 3.054-.04 4.569.014.59-.303.539-.7.526-.383-.013-.805.116-.752-.539.052-.667.013-1.36.013-2.054z'
        fill={
          inverted
            ? 'var(--bx-logo-principal-inverted)'
            : 'var(--bx-logo-principal)'
        }
      />
      <path
        d='M75.106 21.875c.805 2.99 2.694 4.839 5.797 5.545-1.44.36-2.733.911-3.777 1.95-1.03 1.015-1.624 2.247-2.02 3.595v-11.09z'
        fill='var(--bx-logo-arrow)'
      />
    </svg>
  );
};

export default LogoBx;
