import React from 'react';

/**
 *
 * @param {*} size  - huge | big | medium | small | tiny
 */
const FlagIT = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 18"
      {...props}
    >
      <rect
        width="23.5"
        height="16.643"
        x=".25"
        y=".679"
        fill="#fff"
        stroke="#F5F5F5"
        strokeWidth=".5"
        rx="1.75"
      />
      <mask
        id="a"
        width={24}
        height={18}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'luminance' }}
      >
        <rect
          width="23.5"
          height="16.643"
          x=".25"
          y=".679"
          fill="#fff"
          stroke="#fff"
          strokeWidth=".5"
          rx="1.75"
        />
      </mask>
      <g mask="url(#a)">
        <path fill="#E43D4C" d="M16 .429h8v17.143h-8z" />
        <path
          fill="#1BB65D"
          fillRule="evenodd"
          d="M0 17.571h8V.43H0v17.14Z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default FlagIT;
