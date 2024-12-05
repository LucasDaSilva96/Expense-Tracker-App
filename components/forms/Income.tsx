import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';

export default function Income() {
  return (
    <View style={styles.container}>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>Amount</Text>
        <TextInput
          style={{
            height: 40,
            width: '80%',
            color: '#000',
            padding: 10,
          }}
          placeholder='-100 for expense or 100 for income'
          placeholderTextColor={'#919191'}
          keyboardAppearance='dark'
          keyboardType='numeric'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    paddingTop: 5,
    paddingBottom: 5,
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'semibold',
  },
});
