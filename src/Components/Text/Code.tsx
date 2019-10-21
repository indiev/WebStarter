import React from 'react';

export type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export default (props: Props) => <code {...props} />;
