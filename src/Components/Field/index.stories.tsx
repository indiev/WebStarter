

import TextField from './TextField';

import { FlexView } from 'Components/View';
import { Colors } from 'Styles/Theme';

export default { title: 'Field' };

export const TextFields = () => (
  <FlexView css={{ backgroundColor: Colors.dark }}>
    <FlexView css={{ padding: 20 }}>
      <TextField helper="helper text" name="name" label />
      <TextField error="error occured" helper="helper text" name="name" label />
      <TextField
        helper="helper text"
        name="name"
        placeholder="placeholder"
        label
      />
    </FlexView>
  </FlexView>
);
