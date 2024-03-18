import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 * @param props
 */
const Pin = ({ size = 18, ...props }) => {
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
          d="M9 15v-3.75m-3.758 0h7.516a.742.742 0 0 0 .43-1.347L10.876 8.25V6l1.916-1.277a.75.75 0 0 0 .334-.624V3.75a.75.75 0 0 0-.75-.75h-6.75a.75.75 0 0 0-.75.75v.349c0 .25.125.485.334.624L7.125 6v2.25L4.811 9.903a.742.742 0 0 0 .431 1.347Z"
        />
      </g>
    </svg>
  );
};

export default Pin;
