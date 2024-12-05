import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import HomeHeader from '@/components/headers/HomeHeader';
import ExpenseIncomeBox from '@/components/ExpenseIncomeBox';
import Chart from '@/components/Chart';
import HomeDropDown from '@/components/HomeDropDown';
import GoalBox from '@/components/GoalBox';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function HomePage() {
  // TODO: Implement the logic to get the data for the chart and goals
  const week = [
    { value: 0 },
    { value: 80, dataPointText: '80 Mon' },
    { value: 700, dataPointText: '700 Tue' },
    { value: 4, dataPointText: '4 Wed' },
    { value: 65, dataPointText: '65 Thu' },
    { value: 10, dataPointText: '10 Fri' },
    { value: 100, dataPointText: '100 Sat' },
    { value: 550, dataPointText: '550 Sun' },
    { value: 0 },
  ];

  const month = [
    { value: 0 },
    { value: 1000, dataPointText: '1000 Jan' },
    { value: 500, dataPointText: '500 Feb' },
    { value: 400, dataPointText: '400 Mar' },
    { value: 300, dataPointText: '300 Apr' },
    { value: 200, dataPointText: '200 May' },
    { value: 100, dataPointText: '100 Jun' },
    { value: 0 },
  ];

  const [data, setData] = useState(week);

  const goals = [
    {
      iconName: 'home',
      name: 'Iphone16',
      target_amount: 1000,
      current_amount: 500,
    },
    {
      iconName: 'airplane',
      name: 'Travel to Paris',
      target_amount: 2000,
      current_amount: 800,
    },
    {
      iconName: 'car-sport',
      name: 'Buy a car',
      target_amount: 3000,
      current_amount: 1000,
    },
  ];

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
          gap: 15,
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '99%',
              alignItems: 'center',
            }}
          >
            <Text style={styles.chartText}>Expense Chart</Text>
            <HomeDropDown setData={setData} week={week} month={month} />
          </View>
          <Chart data={data} />
        </View>

        <Text style={styles.goalsText}>Goals</Text>
        {goals.map((goal, index) => (
          <GoalBox
            key={index}
            {...goal}
            iconName={goal.iconName as keyof typeof Ionicons.glyphMap}
          />
        ))}
      </ScrollView>
      <Link
        href={'/modal'}
        asChild
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          zIndex: 10,
        }}
      >
        <Pressable
          style={{
            padding: 4,
            backgroundColor: '#0666EB',
            borderRadius: 50,
          }}
        >
          <Ionicons name='add' size={40} color='#fff' />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
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
    justifyContent: 'space-between',
    alignItems: 'center',
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
  goalsText: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
});
