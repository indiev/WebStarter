import React from 'react';

export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

const Code: React.FC<Props> = (props: Props) => <code {...props} />;

export default Code;
