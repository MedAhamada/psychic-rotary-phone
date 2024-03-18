import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 20)
 */
const Asana = ({ size = 20, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 31 29"
      fill="none"
    >
      <g clipPath="url(#clip0_850_79946)">
        <path
          d="M24.2584 15.3084C20.5344 15.3084 17.5161 18.3267 17.5161 22.0501C17.5161 25.7737 20.5344 28.7927 24.2584 28.7927C27.9817 28.7927 31 25.7737 31 22.0501C31 18.3267 27.9817 15.3084 24.2584 15.3084ZM6.74197 15.3087C3.01863 15.3091 0 18.3267 0 22.0504C0 25.7737 3.01863 28.7923 6.74197 28.7923C10.4656 28.7923 13.4843 25.7737 13.4843 22.0504C13.4843 18.3267 10.4656 15.3087 6.74164 15.3087H6.74197ZM22.242 6.88094C22.242 10.6043 19.2237 13.6236 15.5003 13.6236C11.7764 13.6236 8.75805 10.6043 8.75805 6.88094C8.75805 3.15759 11.7764 0.138968 15.5003 0.138968C19.2237 0.138968 22.2417 3.15759 22.2417 6.88094H22.242Z"
          fill="url(#paint0_radial_850_79946)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_850_79946"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15.5042 15.8167) scale(20.553 18.9974)"
        >
          <stop stopColor="#FFB900" />
          <stop offset="0.6" stopColor="#F95D8F" />
          <stop offset="0.999" stopColor="#F95353" />
        </radialGradient>
        <clipPath id="clip0_850_79946">
          <rect
            width={31}
            height="28.6564"
            fill="white"
            transform="translate(0 0.137598)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Asana;
