import React from 'react';

import Button from './Button';
import IconButton from './IconButton';

import { FlexView } from 'Components/View';
import { Colors } from 'Styles/Theme';

export default {
  title: 'Button'
};

export const Buttons = () => (
  <FlexView>
    <FlexView css={{ 'button:nth-child(n)': { padding: 10, margin: 5 } }}>
      <Button css={{ backgroundColor: Colors.primary }}>Primay</Button>
      <Button css={{ backgroundColor: Colors.secondary }}>Secondary</Button>
      <Button css={{ backgroundColor: Colors.success }}>Success</Button>
      <Button css={{ backgroundColor: Colors.info }}>Info</Button>
      <Button css={{ backgroundColor: Colors.warning }}>Warning</Button>
      <Button css={{ backgroundColor: Colors.danger }}>Danger</Button>
      <Button css={{ backgroundColor: Colors.light, color: Colors.dark }}>
        Light
      </Button>
      <Button css={{ backgroundColor: Colors.dark }}>Dark</Button>
    </FlexView>
    <FlexView css={{ 'button:nth-child(n)': { padding: 10, margin: 5 } }} row>
      <Button css={{ backgroundColor: Colors.primary }} fit>
        Primay
      </Button>
      <Button css={{ backgroundColor: Colors.secondary }} fit>
        Secondary
      </Button>
      <Button css={{ backgroundColor: Colors.success }} fit>
        Success
      </Button>
      <Button css={{ backgroundColor: Colors.info }} fit>
        Info
      </Button>
      <Button css={{ backgroundColor: Colors.warning }} fit>
        Warning
      </Button>
      <Button css={{ backgroundColor: Colors.danger }} fit>
        Danger
      </Button>
      <Button css={{ backgroundColor: Colors.light, color: Colors.dark }} fit>
        Light
      </Button>
      <Button css={{ backgroundColor: Colors.dark }} fit>
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
