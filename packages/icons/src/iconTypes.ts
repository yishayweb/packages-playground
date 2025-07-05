import React from 'react';

export type IconType = React.SVGProps<SVGSVGElement> & {
  title?: string;
  circleStyles?: React.SVGProps<SVGCircleElement>;
  ellipseStyles?: React.SVGProps<SVGEllipseElement>;
  showBackgroundCircle?: boolean;
};
