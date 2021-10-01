import { DetailedHTMLProps, FormHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export type FormProps = Props;
export default (props: Props) => <form {...props} />;
