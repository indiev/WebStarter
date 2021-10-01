import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;
export type ImageProps = Props;
export default ({ alt, ...props }: Props) => <img alt={alt} {...props} />;
