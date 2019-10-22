import React from 'react';

export type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export default (props: Props) => <div {...props} />;
