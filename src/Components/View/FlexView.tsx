import Emotoin from '@emotion/core';
import React, { forwardRef } from 'react';

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
  center?: boolean;
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

const alignItems = {
  start: 'start',
  end: 'end',
  center: 'center',
  stretch: 'stretch'
};

const defaultCSS: Emotoin.CSSObject = {
  display: 'flex'
};

export default forwardRef<HTMLDivElement, Props>(
  (
    { row, content, items, fill, grow, shrink, wrap, center, ...props }: Props,
    ref
  ) => {
    const css: Emotoin.CSSObject = {
      ...defaultCSS,
      ...((row && { flexDirection: 'row' }) || { flexDirection: 'column' }),
      ...(center && {
        justifyContent: justifyContents.center,
        alignItems: alignItems.center
      }),
      ...(content && { justifyContent: justifyContents[content] }),
      ...(items && { alignItems: items }),
      ...(fill && { flex: 1 }),
      ...(grow && { flexGrow: grow }),
      ...(shrink && { flexShrink: shrink }),
      ...(wrap && { flexWrap: 'wrap' })
    };

    return <Div ref={ref} css={css} {...props} />;
  }
);
