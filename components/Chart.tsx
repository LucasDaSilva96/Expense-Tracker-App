import { StyleSheet, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

type Props = {
  data: { value: number; dataPointText?: string }[];
};

export default function Chart({ data }: Props) {
  return (
    <View style={styles.chartContainer}>
      <LineChart
        overflowTop={10}
        height={281.5}
        data={data}
        curved
        spacing={70}
        curvature={0.28}
        textColor='#000'
        textShiftY={-4}
        textFontSize={13}
        isAnimated
        hideDataPoints={false}
        backgroundColor={'#fff'}
        color='#0666EB'
        yAxisColor={'#D9D9D9'}
        xAxisColor={'#D9D9D9'}
        areaChart
        startFillColor={'#b4d1f9'}
        endFillColor={'#b4d1f9'}
        startOpacity={0.9}
        endOpacity={0.6}
        initialSpacing={15}
        adjustToWidth
        yAxisLabelSuffix='$'
        startIndex={0}
        rulesType='solid'
        stepValue={100}
        overflowBottom={0}
        animateOnDataChange
        // showVerticalLines
        verticalLinesStrokeDashArray={[5, 5]}
        yAxisLabelContainerStyle={{ width: 50 }}
        xAxisLength={data.length}
        // xAxisLabelTextStyle={{ transform: [{ translateX: -10 }] }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
});
