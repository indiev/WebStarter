import React from 'react';

export type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export default (props: Props) => <p {...props} />;
