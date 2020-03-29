import React from 'react';
import { useTranslation } from 'react-i18next';

import Container from 'Components/View/Container';

export default () => {
  const [t] = useTranslation('main');
  return <Container>{t('title')}</Container>;
};
