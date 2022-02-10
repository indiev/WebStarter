import { useTranslation } from 'react-i18next';

import { FlexView, Text } from 'Components';

export default () => {
  const [t] = useTranslation('main');
  return (
    <FlexView>
      <Text>메인인데 스타일이 아직 적용이 안됐지롱</Text>
    </FlexView>
  );
};
