import React from 'react';

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;
export type ImageProps = Props;
export default ({ alt, ...props }: Props) => <img alt={alt} {...props} />;
