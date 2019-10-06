import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export const Header: React.FC<Props> = (props: Props) => <header {...props} />;
export const Main: React.FC<Props> = (props: Props) => <main {...props} />;
export const Footer: React.FC<Props> = (props: Props) => <footer {...props} />;
