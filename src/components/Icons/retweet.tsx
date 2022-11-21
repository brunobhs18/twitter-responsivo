import React from 'react';

export const RetweetIcon: React.FC = (props) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 4.75 3.79 l 4.603 4.3 l -1.706 1.82 L 6 8.38 v 7.37 c 0 0.97 0.784 1.75 1.75 1.75 H 13 V 20 H 7.75 c -2.347 0 -4.25 -1.9 -4.25 -4.25 V 8.38 L 1.853 9.91 L 0.147 8.09 l 4.603 -4.3 Z m 11.5 2.71 H 11 V 4 h 5.25 c 2.347 0 4.25 1.9 4.25 4.25 v 7.37 l 1.647 -1.53 l 1.706 1.82 l -4.603 4.3 l -4.603 -4.3 l 1.706 -1.82 L 18 15.62 V 8.25 c 0 -0.97 -0.784 -1.75 -1.75 -1.75 Z"
        fill="#fff"
      />
    </svg>
  );
};