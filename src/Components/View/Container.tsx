import { CSSObject } from '@emotion/react';

import FlexView, { Props as FlexViewProps } from './FlexView';

export type Props = FlexViewProps;

const css: CSSObject = {
  // minHeight: '100vh'
};

export default (props: Props) => <FlexView css={css} fill {...props} />;
