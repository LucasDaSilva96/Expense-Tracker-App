import { View, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import React from 'react';
import { WALLET } from '@/data/data';

type Props = {
  setAccount: React.Dispatch<
    React.SetStateAction<{
      amount: string;
      date: string;
      selectedCategory: {
        name: string;
        iconName: string;
        color: string;
      };
      notes: string;
      account_id: string;
    }>
  >;
  account_id: string;
};

export default function AccountDropDown({ setAccount, account_id }: Props) {
  const data = WALLET.map((item) => {
    return {
      label: item.account_name,
      value: item.id,
      iconName: item.iconName,
    };
  });

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField='label'
        valueField='value'
        placeholder='Select Account For Transaction'
        value={account_id}
        onChange={(item) => {
          setAccount((prev) => {
            return {
              ...prev,
              account_id: item.value,
            };
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dropdown: {
    height: 45,
    width: '90%',
    borderColor: 'gray',
    backgroundColor: 'transparent',
    padding: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderRadius: 10,
  },
  placeholderStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'semibold',
  },
  selectedTextStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'semibold',
  },
});
