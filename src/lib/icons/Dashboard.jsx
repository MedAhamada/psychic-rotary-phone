import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Dashboard = ({ size = 18, ...props }) => {
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
        d="M10.14 6.706 9 10.126m4.778 1.983v0a7.981 7.981 0 0 0-9.557 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.03 4.97a5.7 5.7 0 1 1-8.06 8.06 5.7 5.7 0 0 1 8.06-8.06"
      />
    </svg>
  );
};

export default Dashboard;
