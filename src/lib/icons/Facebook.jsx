import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const GoogleAds = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        fill="#1877F2"
        d="M18 9.054c0-4.85-3.98-8.78-8.889-8.78-4.91 0-8.889 3.93-8.889 8.78 0 4.383 3.25 8.015 7.5 8.674v-6.136H5.465V9.054h2.257V7.119c0-2.2 1.327-3.416 3.358-3.416.972 0 1.99.172 1.99.172v2.16h-1.122c-1.104 0-1.448.677-1.448 1.372v1.647h2.465l-.394 2.538H10.5v6.136c4.25-.659 7.5-4.292 7.5-8.674Z"
      />
    </svg>
  );
};

export default GoogleAds;
