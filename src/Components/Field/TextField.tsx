import Emotion from '@emotion/react';
import { forwardRef, useState } from 'react';

import Input, { Props as InputProps } from './Input';

import Text from 'Components/Text/Text';
import { FlexView } from 'Components/View';
import { Colors, FontSizes } from 'Styles/Theme';

type Props = InputProps & {
  row?: boolean;
  label?: boolean;
  helper?: string;
  error?: string;
};

export type TextFieldProps = Props;

export function hasValue(value: any) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}

export function isFilled(obj?: { value: any }) {
  return obj && hasValue(obj.value) && obj.value !== '';
}

export default forwardRef<HTMLInputElement, Props>(
  (
    { type = 'text', name, row, label, helper, error, ...props }: Props,
    ref
  ) => {
    const { placeholder } = props;
    const [value, setValue] = useState('');
    const [focus, setFocus] = useState(false);
    const wrapperCSS: Emotion.CSSObject = {
      // borderBottom: `1px solid var(--gray)}`,
      // ...(error && { borderBottom: `1px solid var(--danger) !important` }),
      // '> :focus': {
      //   borderBottom: '1px solid var(--gray-dark)'
      // },
      transition: 'border 0.3s',
      position: 'relative'
    };

    const labelCSS: Emotion.CSSObject = {
      top: 0,
      left: 0,
      position: 'absolute',
      ...(row && { marginRight: '0.35vw' }),
      ...(error && { color: Colors.danger }),
      display: 'block',
      transform: 'translate(0, 18px) scale(1)',
      transformOrigin: 'top left',
      ...((focus || value !== '' || placeholder) && {
        transform: 'translate(0, 1.5px) scale(0.75)',
        transformOrigin: 'top left'
      }),
      transition:
        'color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
    };

    const inputWrapper: Emotion.CSSObject = {
      color: '#fff',
      cursor: 'text',
      display: 'inline-flex',
      position: 'relative',
      fontSize: FontSizes.medium,
      boxSizing: 'border-box',
      alignItems: 'center',
      lineHeight: '1.1875em',
      letterSpacing: '0.00938em',
      ':before': {
        left: 0,
        right: 0,
        bottom: 0,
        content: '"\\00a0"',
        position: 'absolute',
        transition:
          'border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderBottom: '1px solid rgba(255, 255, 255, 0.7)',
        pointerEvents: 'none'
      },
      ':hover:before': {
        borderBottom: '2px solid #fff'
      },
      ':after': {
        left: 0,
        right: 0,
        bottom: 0,
        content: '""',
        position: 'absolute',
        transform: 'scaleX(0)',
        transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
        borderBottom: '2px solid #90caf9',
        pointerEvents: 'none',
        ...(focus && { transform: 'scaleX(1)' })
      }
    };

    const inputCSS: Emotion.CSSObject = {
      // paddingBottom: '0.5vw',
      margin: '17px 0 7px',
      height: '1.1875em'
    };

    return (
      <FlexView>
        <FlexView css={wrapperCSS} row={row}>
          {label && name && (
            <Text component="label" css={labelCSS} htmlFor={name}>
              {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
            </Text>
          )}
          <FlexView css={inputWrapper}>
            <Input
              ref={ref}
              css={inputCSS}
              name={name}
              type={type}
              onBlur={() => setFocus(false)}
              onChange={(e) => setValue(e.currentTarget.value)}
              onFocus={() => setFocus(true)}
              {...props}
            />
          </FlexView>
        </FlexView>
        {(error || helper) && (
          <Text
            css={{
              marginTop: '0.5vw',
              ...(error && { color: Colors.danger })
            }}
            xSmall
          >
            {error || helper}
          </Text>
        )}
      </FlexView>
    );
  }
);
