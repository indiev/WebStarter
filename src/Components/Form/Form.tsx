import React from 'react';

type Props = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export type FormProps = Props;
export default (props: Props) => <form {...props} />;
