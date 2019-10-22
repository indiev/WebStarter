import React from 'react';

export type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default ({ type = 'button', style, ...props }: Props) => {
  const styles = {
    cursor: 'pointer',
    display: 'inline-flex',
    backgroundColor: 'unset',
    border: 'none',
    outline: 'none',
    ...style
  };
  return <button type={type} style={styles} {...props} />;
};
