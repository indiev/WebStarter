import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export default (props: Props) => <code {...props} />;
