import React from 'react';
import * as Icons from 'Assets/Images/Icons';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  name: string;
  color?: string;
  size?: number;
}

const IconMap: { [key: string]: React.FC } = {
  ...Icons
};

export default ({ name, color, size, style, ...props }: Props) => {
  const RenderIcon = IconMap[name];
  const styles: React.CSSProperties = {
    display: 'inline-flex',
    height: size || 24,
    ...(color && { fill: color }),
    ...style
  };

  return (
    <span style={styles} {...props}>
      <RenderIcon />
    </span>
  );
};
