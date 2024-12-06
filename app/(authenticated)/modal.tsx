import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import Expense from '@/components/forms/Expense';
import Income from '@/components/forms/Income';
import { Ionicons } from '@expo/vector-icons';

export default function Modal() {
  const [typeOfTransaction, setTypeOfTransaction] = useState('expense');

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <Pressable
          style={[
            styles.btn,
            typeOfTransaction === 'expense' && styles.btnSelected,
          ]}
          onPress={() => setTypeOfTransaction('expense')}
        >
          <Text style={styles.btnText}>Expense</Text>
          <Ionicons name='trending-down' color={'#000'} size={20} />
        </Pressable>
        <Pressable
          style={[
            styles.btn,
            typeOfTransaction === 'income' && styles.btnSelected,
          ]}
          onPress={() => setTypeOfTransaction('income')}
        >
          <Text style={styles.btnText}>Income</Text>
          <Ionicons name='trending-up' color={'#000'} size={20} />
        </Pressable>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          padding: 10,
          textTransform: 'capitalize',
          textAlign: 'center',
        }}
      >
        {typeOfTransaction}
      </Text>
      {typeOfTransaction === 'expense' ? <Expense /> : <Income />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },
  btn: {
    padding: 15,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    width: '40%',
    backgroundColor: '#fff',
  },
  btnText: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'semibold',
  },
  btnSelected: {
    borderWidth: 1,
    borderColor: '#919191',
    shadowColor: '#F0F0F0',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    backgroundColor: '#0666EB',
  },
});
