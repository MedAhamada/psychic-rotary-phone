import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const ChartSimple = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#5A88FF"
          d="M5.968 2.413c0-.842.683-1.524 1.524-1.524h1.016c.841 0 1.524.682 1.524 1.524v11.174c0 .842-.683 1.524-1.524 1.524H7.492a1.524 1.524 0 0 1-1.524-1.524V2.413ZM.888 8.508c0-.841.683-1.524 1.524-1.524h1.016c.842 0 1.524.683 1.524 1.524v5.08c0 .84-.682 1.523-1.524 1.523H2.412A1.524 1.524 0 0 1 .89 13.587V8.508Zm11.683-5.587h1.016c.841 0 1.524.682 1.524 1.523v9.143c0 .842-.683 1.524-1.524 1.524h-1.016a1.524 1.524 0 0 1-1.524-1.524V4.444c0-.84.683-1.523 1.524-1.523Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.889 0h14.222v16H.889z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChartSimple;
