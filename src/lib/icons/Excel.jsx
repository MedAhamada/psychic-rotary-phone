import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 20)
 */
const Excel = ({ size = 20, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 32 28"
      {...props}
    >
      <rect width={24} height={28} x={8} fill="#2FB776" rx={2} />
      <path fill="#163C27" d="M8 21h24v5a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-5Z" />
      <path fill="#229C5B" d="M20 14h12v7H20z" />
      <path fill="#27AE68" d="M20 7h12v7H20z" />
      <path fill="#1D854F" d="M8 2a2 2 0 0 1 2-2h10v7H8V2Z" />
      <path fill="#197B43" d="M8 7h12v7H8z" />
      <path fill="#1B5B38" d="M8 14h12v7H8z" />
      <path
        fill="#000"
        fillOpacity=".3"
        d="M8 10a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8V10Z"
      />
      <rect width={18} height={18} y={5} fill="#185A30" rx={2} />
      <path
        fill="#fff"
        d="m13 19-2.818-5.1L12.876 9h-2.199l-1.663 3.129L7.378 9H5.11l2.708 4.9L5 19h2.2l1.773-3.314L10.732 19H13Z"
      />
    </svg>
  );
};

export default Excel;
