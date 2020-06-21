import { Box, Button, Container, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default () => {
  const [t] = useTranslation('main');
  return (
    <Container maxWidth={false}>
      <Box>
        <Typography>{t('title')}</Typography>
        <Button>Wirte</Button>
      </Box>
    </Container>
  );
};
