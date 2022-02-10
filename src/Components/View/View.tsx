import { jsx } from '@emotion/react';
import { forwardRef, HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  component?: string;
};

export default forwardRef<HTMLDivElement, Props>(
  ({ component = 'div', ...props }: Props, ref) =>
    jsx(component, { ref, ...props })
);
