import { Text } from '../Text';
import { FlexView } from '../View';

type BadgeProps = { children: string };

export default ({ children }: BadgeProps) => (
  <FlexView
    style={{
      backgroundColor: 'var(--gray-light)',
      borderRadius: 3,
      padding: 3
    }}
  >
    <Text color="var(--gray-dark)" xSmall>
      {children}
    </Text>
  </FlexView>
);
