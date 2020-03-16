import React, { forwardRef } from 'react';

export type Props = React.HTMLAttributes<HTMLDivElement>;

export default forwardRef<HTMLDivElement, Props>((props, ref) => (
  <div ref={ref} {...props} />
));
