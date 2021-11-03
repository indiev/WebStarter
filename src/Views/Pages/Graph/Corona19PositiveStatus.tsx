import { Stack } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { Fragment } from 'react';

import { FlexView, Text } from 'Components';

const items = [
  {
    id: '누적 확진자',
    color: 'hsl(177, 70%, 50%)',
    data: [
      {
        x: '2021.08',
        y: 19
      },
      {
        x: '2021.09',
        y: 19
      },
      {
        x: '2021.10',
        y: 21
      },
      {
        x: '2021.11',
        y: 23
      },
      {
        x: '2021.12',
        y: 23
      },
      {
        x: '2022.01',
        y: 27
      }
    ]
  },
  {
    id: '누적 격리해제자',
    color: 'hsl(17, 70%, 50%)',
    data: [
      {
        x: '2021.08',
        y: 18
      },
      {
        x: '2021.09',
        y: 19
      },
      {
        x: '2021.10',
        y: 20
      },
      {
        x: '2021.11',
        y: 21
      },
      {
        x: '2021.12',
        y: 23
      },
      {
        x: '2022.01',
        y: 25
      }
    ]
  }
];

const MyResponsiveLine = ({ data /* see data tab */ }: any) => (
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
    legends={[
      {
        anchor: 'top-right',
        direction: 'column',
        justify: false,
        translateX: 0,
        translateY: -50,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 8,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
    margin={{ top: 80, right: 20, bottom: 20, left: 30 }}
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
    useMesh
  />
);

export default () => (
  <FlexView fill>
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      spacing={2}
    >
      <Text bold>사내 코로나19 현황</Text>
      {/* <Stack>
        <Text size="x-small">
          <Text style={{ color: '#1890FF' }}>●</Text> 누적 격리 해제자
        </Text>
        <Text size="x-small">
          <Text style={{ color: '#FFB728' }}>●</Text> 누적 확진자
        </Text>
      </Stack> */}
    </Stack>
    <FlexView style={{ height: 300, marginTop: -60 }}>
      <MyResponsiveLine data={items} />
    </FlexView>
  </FlexView>
);
