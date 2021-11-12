import Icon from './Icon';

import * as IconList from 'Assets/Images/Icons';
import { FlexView } from 'Components/View';

export default { title: 'Icon' };

export const Icons = () => (
  <FlexView row>
    {Object.keys(IconList).map((name) => (
      <Icon key={name} color="black" name={name} />
    ))}
  </FlexView>
);
