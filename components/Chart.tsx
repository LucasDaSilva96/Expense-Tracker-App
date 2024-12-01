import { StyleSheet, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

export default function Chart() {
  const data = [
    { value: 55, label: 'Sun', dataPointText: '55$' },
    { value: 80, dataPointText: '80$', label: 'Mon' },
    { value: 700, dataPointText: '700$', label: 'Tue' },
    { value: 4, dataPointText: '4$', label: 'Wed' },
    { value: 65, dataPointText: '65$', label: 'Thu' },
    { value: 10, dataPointText: '10$', label: 'Fri' },
    { value: 550, label: 'Sun', dataPointText: '55' },
    { value: 65, dataPointText: '80$', label: 'Mon' },
    { value: 70, dataPointText: '700$', label: 'Tue' },
    { value: 46, dataPointText: '4$', label: 'Wed' },
    { value: 40, dataPointText: '65$', label: 'Thu' },
    { value: 100, dataPointText: '10$', label: 'Fri' },
  ];

  return (
    <View style={styles.chartContainer}>
      <LineChart
        overflowTop={10}
        height={280}
        data={data}
        initialSpacing={10}
        spacing={55}
        textColor='#000'
        textShiftY={-8}
        textShiftX={0}
        textFontSize={15}
        thickness={3}
        isAnimated
        hideDataPoints={false}
        backgroundColor={'#fff'}
        color='#0666EB'
        yAxisColor={'#D9D9D9'}
        xAxisColor={'#D9D9D9'}
        hideOrigin
        areaChart
        startFillColor={'#b4d1f9'}
        endFillColor={'#b4d1f9'}
        startOpacity={0.4}
        endOpacity={0.8}
        rulesType='solid'
        // rulesColor={'#D9D9D9'}
        hideRules
        rulesThickness={1}
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
