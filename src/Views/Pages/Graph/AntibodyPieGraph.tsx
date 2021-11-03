import { Divider, Stack } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';

import { FlexView, Text } from 'Components';

const data1 = [
  {
    id: '1',
    label: '1개월 미만',
    value: 50,
    color: 'hsl(141, 70%, 50%)'
  },
  {
    id: '2',
    label: '2개월 미만',
    value: 32,
    color: '#FFFFFF'
  },
  {
    id: '3',
    label: '3개월 미만',
    value: 10,
    color: 'hsl(273, 70%, 50%)'
  },
  {
    id: '4',
    label: '(재)검사 요망',
    value: 8,
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

type Props = {
  hideTitle?: boolean;
};

export default (props: Props) => {
  const { hideTitle } = props;
  return (
    <FlexView fill>
      {!hideTitle && <Text bold>항체 주기 현황</Text>}
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ mt: 2 }}
      >
        <FlexView
          style={{
            width: 220,
            height: 220,
            position: 'relative'
          }}
          fill
        >
          <MyResponsivePie data={data1} />
          {/* <FlexView
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
          </FlexView> */}
        </FlexView>
        <FlexView style={{ marginTop: 20, padding: '0 10px' }} fill>
          <FlexView
            style={{
              justifyContent: 'space-between'
            }}
            row
          >
            <Text color="#797979">
              {/* <Text color="#1890FF">■</Text> 1개월 미만 */}
              <Text color="#e8c19f">■</Text> 1개월 미만
            </Text>
            <Text color="#797979" size="small">
              50%
            </Text>
          </FlexView>
          <Divider sx={{ my: 1 }} />
          <FlexView
            style={{
              justifyContent: 'space-between'
            }}
            row
          >
            <Text color="#797979">
              {/* <Text color="#1AC472">■</Text> 2개월 미만 */}
              <Text color="#f47560">■</Text> 2개월 미만
            </Text>
            <Text color="#797979" size="small">
              32%
            </Text>
          </FlexView>
          <Divider sx={{ my: 1 }} />
          <FlexView
            style={{
              justifyContent: 'space-between'
            }}
            row
          >
            <Text color="#797979">
              {/* <Text color="#FF9F47">■</Text> 3개월 미만 */}
              <Text color="#f1e15b">■</Text> 3개월 미만
            </Text>
            <Text color="#797979" size="small">
              10%
            </Text>
          </FlexView>
          <Divider sx={{ my: 1 }} />
          <FlexView
            style={{
              justifyContent: 'space-between'
            }}
            row
          >
            <Text color="#797979">
              {/* <Text color="#FFD953">■</Text> (재)검사 요망 */}
              <Text color="#e8a838">■</Text> (재)검사 요망
            </Text>
            <Text color="#797979" size="small">
              8%
            </Text>
          </FlexView>
        </FlexView>
      </Stack>
    </FlexView>
  );
};
