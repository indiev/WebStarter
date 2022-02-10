import { useTranslation } from 'react-i18next';

import { FlexView, Text } from 'Components';

export default function Main() {
  const [t] = useTranslation('main');
  return (
    <FlexView>
      <Text>{t('title')}</Text>
    </FlexView>
  );
}
