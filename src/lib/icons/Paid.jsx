import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Paid = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 48 48"
    >
      <g clipPath="url(#a)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
          d="M8 23.812v-7.63a6.003 6.003 0 0 1 3.88-5.614L28.586 4.26C31.204 3.274 34 5.206 34 8.004v6.7"
        />
        <path
          fill="currentColor"
          d="M35.195 28.202A1.204 1.204 0 0 0 34 29.407c0 .662.538 1.2 1.2 1.195a1.2 1.2 0 1 0-.005-2.4Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
          d="M21.324 42H36c3.3 0 6-2.7 6-6V20.702a6 6 0 0 0-6-6H12c-2.21 0-4 1.79-4 4v5.812"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
          d="M15 44C8.926 44 4 39.074 4 33s4.926-11 11-11c6.076 0 11 4.926 11 11s-4.924 11-11 11Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
          d="m19.888 30.556-6.112 6.112L10.112 33"
        />
      </g>
    </svg>
  );
};

export default Paid;
