import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const GoogleAds = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2442.4 2237"
      width={size}
      height={size}
      {...props}
    >
      <g>
        <path
          fill="#FBBC04"
          d="M50.4,1628.6L862.5,221.9l703.7,406.3L754.2,2034.9L50.4,1628.6z"
        />
        <path
          fill="#4285F4"
          d="M2385.1,1623.7L1572.5,216.5C1467.6,18.1,1221.8-57.7,1023.4,47.2S749.3,397.9,854.1,596.3   c4.6,8.7,9.5,17.2,14.7,25.6l812.6,1407.2c109.6,195.8,357.2,265.7,553,156.1c195.8-109.6,265.7-357.2,156.1-553   c-1.8-3.2-3.6-6.3-5.4-9.4L2385.1,1623.7L2385.1,1623.7z"
        />
        <circle fill="#34A853" cx="406.3" cy="1828.6" r="406.3" />
      </g>
    </svg>
  );
};

export default GoogleAds;
