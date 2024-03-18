import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const ArrowCircleLeft = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.975 5.525a.5.5 0 0 1 0 .707L6.207 8l1.768 1.768a.5.5 0 1 1-.707.707L5.146 8.354a.5.5 0 0 1 0-.708l2.122-2.12a.5.5 0 0 1 .707 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 5 8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ArrowCircleLeft;
