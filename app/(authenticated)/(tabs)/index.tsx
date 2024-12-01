import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import HomeHeader from '@/components/headers/HomeHeader';
import ExpenseIncomeBox from '@/components/ExpenseIncomeBox';
import Chart from '@/components/Chart';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView
        style={{
          width: '100%',
          flex: 1,
        }}
        contentContainerStyle={{
          alignItems: 'center',
          gap: 10,
          width: '100%',
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>Total Balance</Text>
          <Text style={styles.balanceAmount}>$223,876</Text>
        </View>

        <View style={styles.expenseIncomeContainer}>
          <ExpenseIncomeBox type='income' amount={1000} />
          <ExpenseIncomeBox type='expense' amount={500} />
        </View>

        <View style={styles.chartContainer}>
          <Text style={styles.chartText}>Expense Chart</Text>
          <Chart />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    padding: 5,
    gap: 10,
  },
  balanceContainer: {
    gap: 4,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  balanceText: {
    fontSize: 13,
    fontWeight: 'semibold',
    color: '#919191',
  },
  balanceAmount: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  expenseIncomeContainer: {
    flexDirection: 'row',
    gap: 5,
    width: '100%',
    overflowX: 'scroll',
    justifyContent: 'space-evenly',
  },
  chartContainer: {
    width: '100%',
    gap: 10,
    borderRadius: 10,
  },
  chartText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
