import { Container, Paper, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { FlexView, Icon, Text } from '../../Components';

import {
  AntibodyStatus,
  Corona19PositiveStatus,
  PCRStatus,
  VaccineStatus
} from './Graph';

const items = [
  {
    icon: 'home',
    iconSize: 16,
    count: 38,
    diff: 2,
    desc: '자가격리자 현황'
  },
  {
    icon: 'check',
    iconSize: 10,
    count: 321,
    diff: 29,
    desc: '백신 접종 완료자 현황'
  },
  {
    icon: 'search',
    iconSize: 16,
    count: 132,
    diff: 12,
    desc: 'PCR 검사자 현황'
  },
  {
    icon: 'shield',
    iconSize: 16,
    count: 267,
    diff: 3,
    desc: '항체 보유자 현황'
  },
  {
    icon: 'graph',
    iconSize: 16,
    count: 42,
    diff: 17,
    desc: '완치자 현황'
  }
];

export default () => {
  const [t] = useTranslation('main');

  return (
    <Container sx={{ pt: 5 }}>
      <FlexView style={{ alignItems: 'flex-end' }}>
        <Text size="xx-large" light>
          <Text size="large" light>
            2022.02.13
          </Text>{' '}
          12<Text> : </Text>52
          <Text> : </Text>46
          <Text size="large" light>
            {' '}
            PM
          </Text>
        </Text>
      </FlexView>
      <Stack direction="row" spacing={2}>
        {items.map((item) => (
          <Paper sx={{ flex: 1 }}>
            <FlexView style={{ alignItems: 'center' }}>
              <FlexView style={{ padding: '14px 0', alignItems: 'center' }} row>
                <FlexView
                  style={{
                    backgroundColor: '#ECF6FF',
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Icon name={item.icon} size={item.iconSize} />
                </FlexView>
                <FlexView style={{ marginLeft: 20 }}>
                  <FlexView style={{ alignItems: 'center' }} row>
                    <Text size="xx-large" black>
                      {item.count}
                    </Text>
                    <Text size="large" style={{ marginTop: 7 }} black>
                      명
                    </Text>
                    <Text
                      size="small"
                      style={{ marginLeft: 10, color: '#79CB20' }}
                    >
                      {item.diff > 0 ? '▲' : '▼'} {item.diff}
                    </Text>
                  </FlexView>
                  <Text size="small" style={{ color: '#797979' }}>
                    {item.desc}
                  </Text>
                </FlexView>
              </FlexView>
            </FlexView>
          </Paper>
        ))}
      </Stack>
      <Stack direction="row" mt={2} spacing={2}>
        <Paper sx={{ flex: 1, p: 2 }}>
          <Corona19PositiveStatus />
        </Paper>
        <Paper sx={{ flex: 1, p: 2 }}>
          <AntibodyStatus />
        </Paper>
      </Stack>
      <Stack direction="row" mt={2} spacing={2}>
        <Paper sx={{ flex: 1, p: 2 }}>
          <VaccineStatus />
        </Paper>
        <Paper sx={{ flex: 1, padding: 2 }}>
          <PCRStatus />
        </Paper>
      </Stack>
    </Container>
  );
};
