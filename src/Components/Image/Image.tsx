import React from 'react';

export type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export default ({ alt, ...props }: Props) => <img alt={alt} {...props} />;
