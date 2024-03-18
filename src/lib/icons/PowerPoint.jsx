import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 20)
 */
const PowerPoint = ({ size = 20, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 32 30"
    >
      <circle cx="17.548" cy={15} r="14.452" fill="url(#a)" />
      <mask
        id="b"
        width={29}
        height={30}
        x={3}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'alpha' }}
      >
        <circle cx="17.548" cy={15} r="14.452" fill="#C4C4C4" />
      </mask>
      <g mask="url(#b)">
        <path fill="url(#c)" d="M18.581-1.516h17.548v17.548H18.581z" />
        <path
          fill="#000"
          fillOpacity=".3"
          d="M6.193 10.774a3 3 0 0 1 3-3h8.452a3 3 0 0 1 3 3v12.58a3 3 0 0 1-3 3H6.193v-15.58Z"
        />
        <path fill="#EB6C4D" d="M1.032-1.516H18.58v17.548H1.032z" />
      </g>
      <rect width="18.581" height="18.581" y="5.71" fill="url(#d)" rx={2} />
      <path
        fill="#fff"
        d="M13.42 13.407c0-2.226-1.467-3.568-3.791-3.568H6.193V20.16h2.133v-3.14H9.54c2.176 0 3.88-1.24 3.88-3.614Zm-2.163.045c0 1.002-.636 1.651-1.673 1.651H8.326v-3.332h1.243c1.037 0 1.688.545 1.688 1.68Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="3.097"
          x2={32}
          y1="16.993"
          y2="16.993"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A73A24" />
          <stop offset={1} stopColor="#F75936" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="32.516"
          x2="18.581"
          y1="8.806"
          y2="8.806"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDB8A3" />
          <stop offset={1} stopColor="#F1876D" />
        </linearGradient>
        <linearGradient
          id="d"
          x1={0}
          x2="18.581"
          y1="16.281"
          y2="16.281"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A73A24" />
          <stop offset={1} stopColor="#F75936" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PowerPoint;
