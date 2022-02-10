import { CSSObject } from '@emotion/react';
import { CSSProperties, useEffect, useRef, useState } from 'react';

import Label from '../Text/Text';
import FlexView from '../View/FlexView';

import Input from './Input';

type Props = {
  type?: 'text' | 'password';
  label?: string;
  value?: string;
  reset?: boolean;
  autoFocus?: boolean;
  error?: boolean;
  short?: boolean;
  onKeyDown?: () => void;
  onChange?: (e: string) => void;
};

const TextField = ({
  type,
  label,
  value,
  reset,
  autoFocus,
  error,
  short,
  onKeyDown,
  onChange
}: Props) => {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const divCSS: CSSObject = {
    ...{
      border: '1px solid #D5D5D5',
      borderRadius: '10px',
      width: '360px',
      height: '48px',
      padding: '0 16px'
    },
    ...(error && {
      border: '1px solid red'
    }),
    ...(short && { width: '254px' })
  };

  const inputCSS: CSSObject = {
    ...{
      border: 0,
      backgroundColor: 'transparent'
    },
    ...(type === 'password' && {
      color: '#358CFE',
      fontSize: '1.75rem',
      letterSpacing: '-5px'
    })
  };

  useEffect(() => {
    if (reset) {
      setFocus(false);
      inputRef.current?.blur();
    }
  }, [reset]);

  return (
    <FlexView
      style={divCSS as CSSProperties}
      onBlur={() => {
        if (value === '') {
          setFocus(false);
          inputRef.current?.blur();
        }
      }}
      onFocus={() => {
        setFocus(true);
        inputRef.current?.focus();
      }}
    >
      <FlexView style={{ paddingTop: '15px' }}>
        <Label
          // error={reset}
          htmlFor={label}
          style={
            focus || value !== ''
              ? {
                  fontSize: '12px',
                  transform: 'translateY(-12px)',
                  transitionDuration: '0.3s'
                }
              : {
                  fontSize: '16px'
                }
          }
        >
          {label}
          {/* {value === '' ? label : undefined} */}
        </Label>
        <Input
          ref={inputRef}
          autoFocus={autoFocus}
          id={label}
          style={inputCSS as CSSProperties}
          type={type}
          value={value}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            if (onChange) onChange((e.target as HTMLInputElement).value);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter' && onKeyDown) onKeyDown();
          }}
        />
      </FlexView>
    </FlexView>
  );
};

export default TextField;
