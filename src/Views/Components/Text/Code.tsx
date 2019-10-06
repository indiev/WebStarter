import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const Code: React.FC<Props> = (props: Props) => <code {...props} />;

export default Code;
