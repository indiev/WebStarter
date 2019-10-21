import React from 'react';
import Div, { Props as DivProps } from './Div';

export type Props = DivProps & {
  row?: boolean;
  fill?: boolean;
  content?:
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch';
  items?: 'start' | 'end' | 'center' | 'stretch';
  grow?: number;
  shrink?: number;
  wrap?: boolean;
};

const justifyContents = {
  start: 'start',
  end: 'end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  stretch: 'stretch'
};

const defaultStyles: React.CSSProperties = {
  display: 'flex'
};

export default ({
  style,
  row,
  content,
  items,
  fill,
  grow,
  shrink,
  wrap,
  ...props
}: Props) => {
  const styles: React.CSSProperties = {
    ...defaultStyles,
    ...((row && { flexDirection: 'row' }) || { flexDirection: 'column' }),
    ...(content && { justifyContent: justifyContents[content] }),
    ...(items && { alignItems: items }),
    ...(fill && { flex: '1 1 auto' }),
    ...(grow && { flexGrow: grow }),
    ...(shrink && { flexShrink: shrink }),
    ...(wrap && { flexWrap: 'wrap' }),
    ...style
  };
  return <Div style={styles} {...props} />;
};
