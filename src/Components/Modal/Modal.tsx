import { CSSObject } from '@emotion/core';
import React, { useEffect } from 'react';

import { FlexView, View } from 'Components/View';

type Props = {
  visible?: boolean;
  onDismiss?: () => void;
  children?: React.ReactNode;
};

export default ({ visible, onDismiss, children }: Props) => {
  useEffect(() => {
    if (visible) {
      document.body.style.setProperty('overflow', 'hidden');
    } else {
      document.body.style.removeProperty('overflow');
    }

    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [visible]);

  const modalWrapperStyle: CSSObject = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1050,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    outline: 0,
    background: 'rgba(0,0,0,0.5)',
    transition: 'opacity .15s linear',
    ...(!visible && { opacity: 0, pointerEvents: 'none' }),
    ...(visible && { overflowY: 'auto' })
  };

  const backdropStyle: CSSObject = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1
  };

  const contentWrapperStyle: CSSObject = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '100%'
  };

  const dismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
  };

  return (
    <FlexView css={modalWrapperStyle} center>
      <View css={backdropStyle} onClick={dismiss} />
      <View css={contentWrapperStyle}>{visible && children}</View>
    </FlexView>
  );
};
