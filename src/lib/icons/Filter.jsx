import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Filter = ({ size = 18, ...props }) => {
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
        <rect
          width="10.188"
          height="1.591"
          x="3.698"
          y="5.386"
          fill="currentColor"
          rx=".795"
        />
        <rect
          width="6.792"
          height="1.591"
          x="5.396"
          y="8.568"
          fill="currentColor"
          rx=".795"
        />
        <rect
          width="3.396"
          height="1.591"
          x="7.094"
          y="11.75"
          fill="currentColor"
          rx=".795"
        />
      </g>
    </svg>
  );
};

export default Filter;
