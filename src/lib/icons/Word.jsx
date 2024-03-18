import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 20)
 */
const Word = ({ size = 20, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 32 28"
      {...props}
    >
      <rect width={24} height={28} x={8} fill="#2B78B1" rx={2} />
      <path fill="#1B366F" d="M8 21h24v5a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-5Z" />
      <path fill="#20478B" d="M8 14h24v7H8z" />
      <path fill="#215295" d="M8 7h24v7H8z" />
      <path
        fill="#000"
        fillOpacity=".3"
        d="M8 10a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8V10Z"
      />
      <rect width={18} height={18} y={5} fill="#223E74" rx={2} />
      <path
        fill="#fff"
        d="M15 9.014h-1.948l-1.53 6.525L9.85 9H8.203l-1.687 6.539L5 9.014H3L5.601 19h1.726L9 12.688 10.673 19H12.4L15 9.014Z"
      />
    </svg>
  );
};

export default Word;
