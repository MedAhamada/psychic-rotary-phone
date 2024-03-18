import React from 'react';

/**
 *
 * @param {*} size   - Number (default: 20)
 * @param {*} color  - String ['red', 'green', 'orange'] (default: high)
 */
const Fame = ({ size = 20, color, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 12"
    >
      <path
        stroke="#8ED0AB"
        strokeLinecap="round"
        strokeWidth={3}
        d="M2 10.009a8 8 0 0 1 16 0"
      />
      <path
        stroke="#FF9F5A"
        strokeLinecap="round"
        strokeWidth={3}
        d="M2 10.009a8 8 0 0 1 11.956-6.953"
      />
      <path
        stroke="#FF5B5B"
        strokeLinecap="round"
        strokeWidth={3}
        d="M2 10.009a8 8 0 0 1 3-6.245"
      />
      <path
        stroke="#FF5B5B"
        strokeLinecap="round"
        strokeWidth={3}
        d="M2 10.009a8 8 0 0 1 16 0"
      />
      <path
        stroke="#FF9F5A"
        strokeLinecap="round"
        strokeWidth={3}
        d="M2 10.009a8 8 0 0 1 11.956-6.953"
      />
      <path
        stroke="#8ED0AB"
        strokeLinecap="round"
        strokeWidth={3}
        d="M2 10.009a8 8 0 0 1 3-6.245"
      />
      {color === 'red' && (
        <path
          fill="#3B4D6F"
          d="M14.018 7.661a.372.372 0 0 0-.425-.606L9.466 9.31a.895.895 0 1 0 1.02 1.457l3.532-3.107Z"
        />
      )}
      {color === 'green' && (
        <path
          fill="#3B4D6F"
          d="M6.126 7.661a.372.372 0 0 1 .425-.606l4.127 2.256a.895.895 0 1 1-1.02 1.457L6.126 7.661Z"
        />
      )}
      {color === 'orange' && (
        <path
          fill="#3B4D6F"
          d="M10.37 5.331a.372.372 0 0 0-.74 0l-.52 4.675a.895.895 0 1 0 1.78 0l-.52-4.675Z"
        />
      )}
    </svg>
  );
};

export default Fame;
