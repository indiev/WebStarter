import { Stack } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';

import { FlexView, Text } from 'Components';

const data1 = [
  {
    id: '1',
    label: '1차 접종',
    value: 78,
    color: 'hsl(141, 70%, 50%)'
  },
  {
    id: '2',
    label: '1차 미접종',
    value: 22,
    color: 'hsl(273, 70%, 50%)'
  }
];
const data2 = [
  {
    id: '1',
    label: '2차 접종',
    value: 56,
    color: 'hsl(141, 70%, 50%)'
  },
  {
    id: '2',
    label: '2차 미접종',
    value: 44,
    color: 'hsl(273, 70%, 50%)'
  }
];
const data3 = [
  {
    id: '1',
    label: '3차 접종',
    value: 12,
    color: 'hsl(141, 70%, 50%)'
  },
  {
    id: '2',
    label: '3차 미접종',
    value: 88,
    color: 'hsl(273, 70%, 50%)'
  }
];

const MyResponsivePie = ({ data /* see data tab */ }: { data: any }) => (
  <ResponsivePie
    activeInnerRadiusOffset={5}
    activeOuterRadiusOffset={5}
    arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
    arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
    arcLinkLabelsDiagonalLength={36}
    arcLinkLabelsStraightLength={0}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsTextOffset={4}
    arcLinkLabelsThickness={20}
    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
    borderWidth={1}
    colors={{ scheme: 'nivo' }}
    cornerRadius={0}
    data={data}
    defs={[]}
    enableArcLabels={false}
    enableArcLinkLabels={false}
    fill={[]}
    innerRadius={0.6}
    legends={[]}
    margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
    padAngle={0.7}
  />
);

const MyResponsivePie2 = ({ data /* see data tab */ }: { data: any }) => (
  <ResponsivePie
    activeInnerRadiusOffset={5}
    activeOuterRadiusOffset={5}
    arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
    arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
    arcLinkLabelsDiagonalLength={36}
    arcLinkLabelsStraightLength={0}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsTextOffset={4}
    arcLinkLabelsThickness={20}
    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
    borderWidth={1}
    colors={{ scheme: 'category10' }}
    cornerRadius={0}
    data={data}
    defs={[]}
    enableArcLabels={false}
    enableArcLinkLabels={false}
    fill={[]}
    innerRadius={0.6}
    legends={[]}
    margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
    padAngle={0.7}
  />
);

const MyResponsivePie3 = ({ data /* see data tab */ }: { data: any }) => (
  <ResponsivePie
    activeInnerRadiusOffset={5}
    activeOuterRadiusOffset={5}
    arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
    arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
    arcLinkLabelsDiagonalLength={36}
    arcLinkLabelsStraightLength={0}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsTextOffset={4}
    arcLinkLabelsThickness={20}
    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
    borderWidth={1}
    colors={{ scheme: 'pastel1' }}
    cornerRadius={0}
    data={data}
    defs={[]}
    enableArcLabels={false}
    enableArcLinkLabels={false}
    fill={[]}
    innerRadius={0.6}
    legends={[]}
    margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
    padAngle={0.7}
  />
);

type Props = {
  hideTitle?: boolean;
};

export default (props: Props) => {
  const { hideTitle } = props;
  return (
    <FlexView>
      {!hideTitle && <Text bold>백신 접종자 현황</Text>}
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ mt: 2 }}
      >
        <FlexView
          style={{
            width: 150,
            height: 150,
            position: 'relative'
          }}
        >
          <MyResponsivePie data={data1} />
          <FlexView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text size="xx-large" black>
              78
              <Text size="large" bold>
                %
              </Text>
            </Text>
          </FlexView>
          <FlexView style={{ marginTop: 20, padding: '0 10px' }}>
            <FlexView
              style={{
                justifyContent: 'space-between',
                borderBottom: '1px solid #DBE0E6',
                marginBottom: 2,
                paddingBottom: 2
              }}
              row
            >
              <Text color="#797979">
                {/* <Text color="#1890FF">■</Text> 1차 접종 */}
                <Text color="#e8c19f">■</Text> 1차 접종
              </Text>
              <Text color="#797979" size="small">
                78%
              </Text>
            </FlexView>
            <FlexView
              style={{
                justifyContent: 'space-between'
              }}
              row
            >
              <Text color="#797979">
                {/* <Text color="#FFD953">■</Text> 1차 미접종 */}
                <Text color="#f47560">■</Text> 1차 미접종
              </Text>
              <Text color="#797979" size="small">
                22%
              </Text>
            </FlexView>
          </FlexView>
        </FlexView>
        <FlexView
          style={{
            width: 150,
            height: 150,
            position: 'relative'
          }}
        >
          <MyResponsivePie2 data={data2} />
          <FlexView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text size="xx-large" black>
              56
              <Text size="large" bold>
                %
              </Text>
            </Text>
          </FlexView>
          <FlexView style={{ marginTop: 20, padding: '0 10px' }}>
            <FlexView
              style={{
                justifyContent: 'space-between',
                borderBottom: '1px solid #DBE0E6',
                marginBottom: 2,
                paddingBottom: 2
              }}
              row
            >
              <Text color="#797979">
                <Text color="#2076b4">■</Text> 2차 접종
              </Text>
              <Text color="#797979" size="small">
                56%
              </Text>
            </FlexView>
            <FlexView
              style={{
                justifyContent: 'space-between'
              }}
              row
            >
              <Text color="#797979">
                <Text color="#ff7f0f">■</Text> 2차 미접종
              </Text>
              <Text color="#797979" size="small">
                44%
              </Text>
            </FlexView>
          </FlexView>
        </FlexView>
        <FlexView
          style={{
            width: 150,
            height: 150,
            position: 'relative'
          }}
        >
          <MyResponsivePie3 data={data3} />
          <FlexView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text size="xx-large" black>
              12
              <Text size="large" bold>
                %
              </Text>
            </Text>
          </FlexView>
          <FlexView style={{ marginTop: 20, padding: '0 10px' }}>
            <FlexView
              style={{
                justifyContent: 'space-between',
                borderBottom: '1px solid #DBE0E6',
                marginBottom: 2,
                paddingBottom: 2
              }}
              row
            >
              <Text color="#797979">
                <Text color="#fab4ae">■</Text> 3차 접종
              </Text>
              <Text color="#797979" size="small">
                12%
              </Text>
            </FlexView>
            <FlexView
              style={{
                justifyContent: 'space-between'
              }}
              row
            >
              <Text color="#797979">
                <Text color="#b3cde3">■</Text> 3차 미접종
              </Text>
              <Text color="#797979" size="small">
                88%
              </Text>
            </FlexView>
          </FlexView>
        </FlexView>
      </Stack>
    </FlexView>
  );
};
