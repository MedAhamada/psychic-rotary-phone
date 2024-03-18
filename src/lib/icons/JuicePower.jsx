import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const JuicePower = ({ size = 18, ...props }) => {
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
        strokeLinejoin="round"
        d="m5.453 15.75 2.34-5.673a.466.466 0 0 0-.038-.425.44.44 0 0 0-.156-.149.42.42 0 0 0-.205-.054h-1.71a.42.42 0 0 1-.206-.053.439.439 0 0 1-.157-.149.461.461 0 0 1-.035-.426l2.65-6.301a.446.446 0 0 1 .159-.196.421.421 0 0 1 .237-.074h4.444a.42.42 0 0 1 .231.07.443.443 0 0 1 .16.185.465.465 0 0 1-.053.477L10.776 6.02a.46.46 0 0 0 .108.662.42.42 0 0 0 .23.069h1.953c.086 0 .17.026.24.075a.466.466 0 0 1 .065.693L5.454 15.75Z"
      />
    </svg>
  );
};

export default JuicePower;
