import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const SlidersHoriz = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.5 10.25h6.75a.5.5 0 0 1 0 1H2.5a.5.5 0 1 1 0-1Zm8.75.5a.5.5 0 0 1 .5-.5h1.75a.5.5 0 0 1 0 1h-1.75a.5.5 0 0 1-.5-.5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.5 10a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-1.75.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM2 5.25a.5.5 0 0 1 .5-.5h2.75a.5.5 0 1 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm5.75-.5h5.75a.5.5 0 0 1 0 1H7.75a.5.5 0 0 1 0-1Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 4.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-1.75.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SlidersHoriz;
