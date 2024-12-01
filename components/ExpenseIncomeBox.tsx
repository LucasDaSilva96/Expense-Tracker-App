import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  type: 'income' | 'expense';
  amount: number;
};

export default function ExpenseIncomeBox({ type, amount }: Props) {
  return (
    <View style={styles.container}>
      {type === 'income' ? (
        <View style={[styles.iconBox, styles.incomeBox]}>
          <Ionicons name='trending-up' color={'green'} size={28} />
        </View>
      ) : (
        <View style={[styles.iconBox, styles.expenseBox]}>
          <Ionicons name='trending-down' color={'red'} size={28} />
        </View>
      )}
      <View>
        {type === 'income' ? (
          <Text style={[styles.text, styles.textIncome]}>Income</Text>
        ) : (
          <Text style={[styles.text, styles.textExpense]}>Expense</Text>
        )}
        <Text style={styles.amount}>${amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 5,
    minWidth: 180,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBox: {
    padding: 10,
    borderRadius: '100%',
  },
  incomeBox: {
    backgroundColor: '#abe8ba',
    width: 50,
  },
  expenseBox: {
    backgroundColor: '#f9a8a8',
    width: 50,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textExpense: {
    color: 'red',
  },
  textIncome: {
    color: 'green',
  },
});
