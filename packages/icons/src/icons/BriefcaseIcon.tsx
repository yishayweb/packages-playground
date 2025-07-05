import type { IconType } from '../iconTypes';

const BriefcaseIcon = ({
  title,
  circleStyles,
  showBackgroundCircle = true,
  ...props
}: IconType) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="#191919"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title></title>
      <title>{title || 'BriefcaseIcon'}</title>
      {showBackgroundCircle && (
        <circle
          opacity="0.5"
          cx="20"
          cy="20"
          r="20"
          fill="#B3D7FF"
          {...circleStyles}
        />
      )}
      <path d="M29.5 28H10.5V15.5312C10.5 15.0241 10.667 14.6035 11.001 14.2695C11.3473 13.9232 11.7741 13.75 12.2812 13.75H16.4375V11.375H23.5625V13.75H27.7188C28.2259 13.75 28.6465 13.9232 28.9805 14.2695C29.3268 14.6035 29.5 15.0241 29.5 15.5312V16.7188V28ZM17.625 13.75H22.375V12.5625H17.625V13.75ZM11.6875 18.5H15.25V17.3125H16.4375V18.5H23.5625V17.3125H24.75V18.5H28.3125V15.5312C28.3125 15.3581 28.2568 15.2158 28.1455 15.1045C28.0342 14.9932 27.8919 14.9375 27.7188 14.9375H12.2812C12.1081 14.9375 11.9658 14.9932 11.8545 15.1045C11.7432 15.2158 11.6875 15.3581 11.6875 15.5312V18.5ZM28.3125 26.8125V19.6875H24.75V20.875H23.5625V19.6875H16.4375V20.875H15.25V19.6875H11.6875V26.8125H28.3125Z" />
    </svg>
  );
};

export default BriefcaseIcon;
