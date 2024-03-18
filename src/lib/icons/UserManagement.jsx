import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const UserManagement = ({ size = 18, ...props }) => {
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
        d="M7.568 6.12A1.687 1.687 0 1 1 5.18 8.505a1.687 1.687 0 0 1 2.387-2.387Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1.5 13.875v-9.72c0-.845.685-1.53 1.53-1.53H15a1.5 1.5 0 0 1 1.5 1.5v9.75a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 0 1-1.5-1.5Zm9.75-6.75h3m-1.2 3h-1.8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.07 12.375a2.376 2.376 0 0 0-2.211-1.5H5.89a2.38 2.38 0 0 0-2.212 1.5"
      />
    </svg>
  );
};

export default UserManagement;
