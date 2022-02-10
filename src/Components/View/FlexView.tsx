import { CSSObject } from '@emotion/react';
import { forwardRef } from 'react';

import View, { Props as ViewProps } from './View';

export type Props = ViewProps & {
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
  grid?: boolean;
  gap?: number;
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

export default forwardRef<HTMLDivElement, Props>(
  (
    {
      row,
      content,
      items,
      fill,
      grow,
      shrink,
      wrap,
      center,
      grid,
      gap,
      ...props
    }: Props,
    ref
  ) => {
    const defaultCSS: CSSObject = {
      display: !grid ? 'flex' : 'grid'
    };

    const css: CSSObject = {
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
      ...(wrap && { flexWrap: 'wrap' }),
      ...(gap && { gap: `${gap}px` })
    };

    return <View ref={ref} css={css} {...props} />;
  }
);
