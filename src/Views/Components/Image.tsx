import React from 'react';

interface Props {
  src?: string;
  className?: string;
  alt: string;
}

const Image: React.FC<Props> = ({ alt, ...props }: Props) => (
  <img alt={alt} {...props} />
);

export default Image;
