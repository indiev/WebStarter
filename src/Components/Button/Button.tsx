import React from 'react';

export interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: React.FC<Props> = ({ type = 'button', ...props }: Props) => (
  <button type={type} {...props} />
);

export default Button;
