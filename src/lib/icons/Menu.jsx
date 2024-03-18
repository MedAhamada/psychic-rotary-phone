import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Menu = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 13h10M4 9h10M4 5h10"
      />
    </svg>
  );
};

export default Menu;
