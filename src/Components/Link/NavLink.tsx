import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export type Props = NavLinkProps & {};

export default (props: Props) => <NavLink {...props} />;
