import React from 'react';

export interface Props
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const Image: React.FC<Props> = ({ alt, ...props }: Props) => (
  <img alt={alt} {...props} />
);

export default Image;
