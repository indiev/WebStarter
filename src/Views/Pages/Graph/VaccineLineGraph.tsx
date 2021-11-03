import { Stack } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';

import { FlexView, Text } from 'Components';

const items = [
  {
    id: '3차 접종',
    color: 'hsl(17, 70%, 50%)',
    data: [
      {
        x: '2021.08',
        y: 0
      },
      {
        x: '2021.09',
        y: 3
      },
      {
        x: '2021.10',
        y: 6
      },
      {
        x: '2021.11',
        y: 10
      },
      {
        x: '2021.12',
        y: 10
      },
      {
        x: '2022.01',
        y: 12
      }
    ]
  },
  {
    id: '2차 접종',
    color: 'hsl(177, 70%, 50%)',
    data: [
      {
        x: '2021.08',
        y: 8
      },
      {
        x: '2021.09',
        y: 11
      },
      {
        x: '2021.10',
        y: 31
      },
      {
        x: '2021.11',
        y: 43
      },
      {
        x: '2021.12',
        y: 50
      },
      {
        x: '2022.01',
        y: 56
      }
    ]
  },
  {
    id: '1차 접종',
    color: 'hsl(17, 70%, 50%)',
    data: [
      {
        x: '2021.08',
        y: 58
      },
      {
        x: '2021.09',
        y: 60
      },
      {
        x: '2021.10',
        y: 62
      },
      {
        x: '2021.11',
        y: 65
      },
      {
        x: '2021.12',
        y: 70
      },
      {
        x: '2022.01',
        y: 78
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
        direction: 'row',
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
      <Text bold>백신 접종자 현황</Text>
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
