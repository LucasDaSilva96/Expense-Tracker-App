import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';

type Props = {
  setData: React.Dispatch<
    React.SetStateAction<
      (
        | {
            value: number;
            dataPointText?: undefined;
          }
        | {
            value: number;
            dataPointText: string;
          }
      )[]
    >
  >;
  week: { value: number; dataPointText?: string }[];
  month: { value: number; dataPointText?: string }[];
};

export default function HomeDropDown({ setData, week, month }: Props) {
  const data = [
    { label: 'Weekly', value: 'week' },
    { label: 'Monthly', value: 'month' },
  ];
  const [selectedValue, setSelectedValue] = useState(data[0].value);
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      data={data}
      maxHeight={300}
      labelField='label'
      valueField='value'
      placeholder='Select item'
      value={selectedValue}
      onChange={(item) => {
        setData(item.value === 'week' ? week : month);
        setSelectedValue(item.value);
      }}
    />
  );
}

const styles = StyleSheet.create({
  dropdown: {
    height: 30,
    width: 100,
    borderColor: 'gray',
    backgroundColor: 'white',
    padding: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderRadius: 10,
  },
  placeholderStyle: {
    fontSize: 12,
    textAlign: 'center',
  },
  selectedTextStyle: {
    fontSize: 12,
    textAlign: 'center',
  },
});
