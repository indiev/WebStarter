import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export default (props: Props) => <p {...props} />;
