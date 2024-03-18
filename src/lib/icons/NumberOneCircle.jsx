import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const NumberOneCircle = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 17"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 3a5.5 5.5 0 1 0 0 11A5.5 5.5 0 0 0 8 3ZM1.5 8.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.486 5.31a.5.5 0 0 1 .264.44v5.75a.5.5 0 0 1-1 0V6.684l-.723.482a.5.5 0 0 1-.554-.833l1.5-1a.5.5 0 0 1 .513-.024Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default NumberOneCircle;
