import React from 'react';

import Button from './Button';
import IconButton from './IconButton';

import { FlexView } from 'Components/View';

export default {
  title: 'Button'
};

export const Buttons = () => (
  <FlexView>
    <FlexView css={{ 'button:nth-child(n)': { padding: 10, margin: 5 } }}>
      <Button css={{ backgroundColor: 'var(--primary)' }}>Primay</Button>
      <Button css={{ backgroundColor: 'var(--secondary)' }}>Secondary</Button>
      <Button css={{ backgroundColor: 'var(--success)' }}>Success</Button>
      <Button css={{ backgroundColor: 'var(--info)' }}>Info</Button>
      <Button css={{ backgroundColor: 'var(--warning)' }}>Warning</Button>
      <Button css={{ backgroundColor: 'var(--danger)' }}>Danger</Button>
      <Button css={{ backgroundColor: 'var(--light)', color: 'var(--dark)' }}>
        Light
      </Button>
      <Button css={{ backgroundColor: 'var(--dark)' }}>Dark</Button>
    </FlexView>
    <FlexView css={{ 'button:nth-child(n)': { padding: 10, margin: 5 } }} row>
      <Button css={{ backgroundColor: 'var(--primary)' }} fit>
        Primay
      </Button>
      <Button css={{ backgroundColor: 'var(--secondary)' }} fit>
        Secondary
      </Button>
      <Button css={{ backgroundColor: 'var(--success)' }} fit>
        Success
      </Button>
      <Button css={{ backgroundColor: 'var(--info)' }} fit>
        Info
      </Button>
      <Button css={{ backgroundColor: 'var(--warning)' }} fit>
        Warning
      </Button>
      <Button css={{ backgroundColor: 'var(--danger)' }} fit>
        Danger
      </Button>
      <Button
        css={{ backgroundColor: 'var(--light)', color: 'var(--dark)' }}
        fit
      >
        Light
      </Button>
      <Button css={{ backgroundColor: 'var(--dark)' }} fit>
        Dark
      </Button>
    </FlexView>
  </FlexView>
);

export const IconButtons = () => (
  <>
    <IconButton name="logo" />
    <IconButton name="close" />
  </>
);
