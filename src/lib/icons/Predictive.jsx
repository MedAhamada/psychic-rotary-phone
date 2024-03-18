import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Predictive = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 18"
    >
      <g clipPath="url(#a)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.58 9.102V7.13H9.605"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.798 7.91s-2.315 3.18-7.245 2.124m9.901-5.405.625-.625m.001 2.5h.624m-3.124-2.5v-.625"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.704 9.004A5.625 5.625 0 1 1 9.08 3.379"
        />
      </g>
    </svg>
  );
};

export default Predictive;
