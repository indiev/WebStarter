import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack
} from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';
import { Fragment, useState } from 'react';

import { FlexView, Text } from '../../../Components';

const items = [
  {
    date: '2022 1월 1주차',
    'PCR 검사자': 55,
    'PCR 검사자 Color': 'hsl(128, 70%, 50%)',
    '추가 PCR 검사자': 0,
    '추가 PCR 검사자 Color': 'hsl(56, 70%, 50%)'
  },
  {
    date: '1월 2주차',
    'PCR 검사자': 55,
    'PCR 검사자 Color': 'hsl(128, 70%, 50%)',
    '추가 PCR 검사자': 0,
    '추가 PCR 검사자 Color': 'hsl(56, 70%, 50%)'
  },
  {
    date: '1월 3주차',
    'PCR 검사자': 55,
    'PCR 검사자 Color': 'hsl(128, 70%, 50%)',
    '추가 PCR 검사자': 38,
    '추가 PCR 검사자 Color': 'hsl(56, 70%, 50%)'
  },
  {
    date: '1월 4주차',
    'PCR 검사자': 93,
    'PCR 검사자 Color': 'hsl(128, 70%, 50%)',
    '추가 PCR 검사자': 26,
    '추가 PCR 검사자 Color': 'hsl(56, 70%, 50%)'
  },
  {
    date: '2월 1주차',
    'PCR 검사자': 119,
    'PCR 검사자 Color': 'hsl(128, 70%, 50%)',
    '추가 PCR 검사자': 48,
    '추가 PCR 검사자 Color': 'hsl(56, 70%, 50%)'
  },
  {
    date: '2월 2주차',
    'PCR 검사자': 167,
    'PCR 검사자 Color': 'hsl(128, 70%, 50%)',
    '추가 PCR 검사자': 37,
    '추가 PCR 검사자 Color': 'hsl(56, 70%, 50%)'
  }
];

const MyResponsiveBar = ({ data /* see data tab */ }: { data: any }) => (
  <ResponsiveBar
    ariaLabel="Nivo bar chart demo"
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendPosition: 'middle',
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 0,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendPosition: 'middle',
      legendOffset: -40
    }}
    axisRight={null}
    axisTop={null}
    barAriaLabel={(e) =>
      `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`
    }
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    colors={{ scheme: 'nivo' }}
    data={data}
    defs={[]}
    enableLabel={false}
    fill={[
      {
        match: {
          id: 'fries'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'sandwich'
        },
        id: 'lines'
      }
    ]}
    indexBy="date"
    indexScale={{ type: 'band', round: true }}
    keys={['PCR 검사자', '추가 PCR 검사자']}
    labelSkipHeight={12}
    labelSkipWidth={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    legends={[]}
    margin={{ top: 10, right: 0, bottom: 30, left: 30 }}
    padding={0.5}
    role="application"
    valueScale={{ type: 'linear' }}
  />
);

export default () => {
  const [antibodyPeriod, setAntibodyPeriod] = useState('2');

  const onAntibodyPeriodChange = (e: SelectChangeEvent<string>) => {
    setAntibodyPeriod(e.target.value);
  };

  return (
    <Fragment>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
      >
        <Text bold>PCR 검사자 현황</Text>
        <FormControl size="small" sx={{ minWidth: 80 }}>
          <InputLabel id="demo-simple-select-label">기간</InputLabel>
          <Select
            label="기간"
            labelId="demo-simple-select-label"
            value={antibodyPeriod}
            autoWidth
            onChange={onAntibodyPeriodChange}
          >
            <MenuItem value="1">최근 4주</MenuItem>
            <MenuItem value="2">최근 6주</MenuItem>
            <MenuItem value="3">최근 10주</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <FlexView style={{ height: 240 }}>
        <MyResponsiveBar data={items} />
      </FlexView>
    </Fragment>
  );
};
