import React from 'react';

export type Props = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export default (props: Props) => <form {...props} />;
