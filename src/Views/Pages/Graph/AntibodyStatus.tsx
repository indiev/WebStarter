import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack
} from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { useState } from 'react';

import { FlexView, Text } from '../../../Components';

const items = [
  {
    id: '항체 보유자',
    color: 'hsl(177, 70%, 50%)',
    data: [
      {
        x: '2021.08',
        y: 0
      },
      {
        x: '2021.09',
        y: 13
      },
      {
        x: '2021.10',
        y: 27
      },
      {
        x: '2021.11',
        y: 62
      },
      {
        x: '2021.12',
        y: 75
      },
      {
        x: '2022.01',
        y: 175
      }
    ]
  }
];

const MyResponsiveLine2 = ({ data /* see data tab */ }: any) => (
  <ResponsiveLine
    axisBottom={{
      // orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0
      // legend: 'transportation',
      // legendOffset: 36,
      // legendPosition: 'middle'
    }}
    axisLeft={{
      // orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0
      // legend: 'count',
      // legendOffset: -40,
      // legendPosition: 'middle'
    }}
    axisRight={null}
    axisTop={null}
    data={data}
    enableGridX={false}
    enableSlices="x"
    legends={[]}
    margin={{ top: 20, right: 20, bottom: 20, left: 30 }}
    pointBorderColor={{ from: 'color', modifiers: [] }}
    pointColor={{ from: 'color', modifiers: [] }}
    xScale={{ type: 'point' }}
    yFormat=" >-.0f"
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: false,
      reverse: false
    }}
    enableArea
    useMesh
  />
);

export default () => {
  const [antibodyPeriod, setAntibodyPeriod] = useState('2');

  const onAntibodyPeriodChange = (e: SelectChangeEvent<string>) => {
    setAntibodyPeriod(e.target.value);
  };

  return (
    <FlexView fill>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
      >
        <Text bold>항체 보유자 현황</Text>
        <FormControl size="small" sx={{ minWidth: 80 }}>
          <InputLabel id="demo-simple-select-label">기간</InputLabel>
          <Select
            label="기간"
            labelId="demo-simple-select-label"
            value={antibodyPeriod}
            autoWidth
            onChange={onAntibodyPeriodChange}
          >
            <MenuItem value="1">최근 3개월</MenuItem>
            <MenuItem value="2">최근 6개월</MenuItem>
            <MenuItem value="3">최근 12개월</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <FlexView style={{ height: 240 }}>
        <MyResponsiveLine2 data={items} />
      </FlexView>
    </FlexView>
  );
};
