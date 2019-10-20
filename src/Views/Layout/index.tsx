import React from 'react';
import { Global } from '@emotion/core';
import { rootStyles } from 'Styles/Theme';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export const Header: React.FC<Props> = (props: Props) => <header {...props} />;
export const Main: React.FC<Props> = (props: Props) => <main {...props} />;
export const Footer: React.FC<Props> = (props: Props) => <footer {...props} />;
export const Root: React.FC<Props> = ({ children }: Props) => (
  <>
    <Global styles={rootStyles} />
    {children}
  </>
);
