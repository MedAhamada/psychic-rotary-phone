import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 20)
 */
const Jira = ({ size = 20, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 31 34"
    >
      <g clipPath="url(#a)">
        <path
          fill="#2684FF"
          d="m30.628 16.108-13.79-13.79L15.503.984l-10.38 10.38-4.746 4.745a1.272 1.272 0 0 0 0 1.793l9.483 9.483 5.643 5.643 10.38-10.38.16-.16 4.586-4.578a1.269 1.269 0 0 0 0-1.801Zm-15.126 5.634-4.737-4.738 4.737-4.737 4.737 4.738-4.737 4.738Z"
        />
        <path
          fill="url(#b)"
          d="M15.502 12.267a7.975 7.975 0 0 1-.034-11.246L5.101 11.384l5.642 5.642 4.76-4.76Z"
        />
        <path
          fill="url(#c)"
          d="m20.252 16.992-4.75 4.75a7.978 7.978 0 0 1 0 11.282l10.396-10.39-5.646-5.642Z"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="14.654"
          x2="8.038"
          y1="7.473"
          y2="14.088"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".18" stopColor="#0052CC" />
          <stop offset={1} stopColor="#2684FF" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="16.407"
          x2="23.01"
          y1="26.479"
          y2="19.877"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".18" stopColor="#0052CC" />
          <stop offset={1} stopColor="#2684FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Jira;
