import React from 'react';

export interface Props
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

export default ({ alt, ...props }: Props) => <img alt={alt} {...props} />;
