import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Keyboard,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import CategoriesMiniModal from '../CategoriesMiniModal';
import AccountDropDown from '../AccountDropDown';

export default function Expense() {
  const [expenseObj, setExpenseObj] = useState({
    amount: '',
    date: '',
    selectedCategory: {
      name: '',
      iconName: '',
      color: '',
    },
    notes: '',
    account_id: '',
  });
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const [isSummitable, setISummitable] = useState(false);

  const [showCategories, setShowCategories] = useState(false);

  const [openNotes, setOpenNotes] = useState(false);

  const openCalendar = () => {
    setIsCalendarVisible(true);
    setShowCategories(false);
    setOpenNotes(false);
  };

  const openCategories = () => {
    setShowCategories(true);
    setIsCalendarVisible(false);
    setOpenNotes(false);
  };

  const openNotesHandler = () => {
    setOpenNotes(true);
    setIsCalendarVisible(false);
    setShowCategories(false);
  };

  useEffect(() => {
    if (
      !expenseObj.amount ||
      !expenseObj.date ||
      !expenseObj.selectedCategory.name ||
      !expenseObj.account_id
    ) {
      setISummitable(false);
    } else {
      setISummitable(true);
    }
  }, [expenseObj]);

  return (
    <View style={styles.container}>
      <View style={styles.amountContainer}>
        <Ionicons name='cash' color={'#0666EB'} size={22} />
        <Text style={styles.amountText}>Amount</Text>
        <TextInput
          style={{
            height: 40,
            color: '#000',
            padding: 10,
            width: '85%',
            fontSize: 18,
            fontWeight: 'semibold',
          }}
          placeholder='Enter amount'
          placeholderTextColor={'#919191'}
          keyboardAppearance='dark'
          keyboardType='numeric'
          returnKeyType='done'
          value={expenseObj.amount}
          onChangeText={(text) =>
            setExpenseObj((obj) => {
              return {
                ...obj,
                amount: text,
              };
            })
          }
        />
      </View>

      {isCalendarVisible && (
        <Pressable
          style={styles.calendarContainer}
          onPress={() => setIsCalendarVisible(false)}
        >
          <View style={styles.calendar}>
            <Calendar
              onDayPress={(day: { dateString: string }) => {
                setExpenseObj((e) => {
                  return {
                    ...e,
                    date: day.dateString,
                  };
                });
                setIsCalendarVisible(false);
              }}
              markedDates={{
                [expenseObj.date]: {
                  selected: true,
                  selectedColor: '#0666EB',
                },
              }}
            />
          </View>
        </Pressable>
      )}

      <Pressable style={styles.dateBtn} onPress={openCalendar}>
        <Ionicons name='calendar' size={22} color='#0666EB' />
        <Text
          style={{
            color: '#000',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'semibold',
          }}
        >
          {expenseObj.date ? expenseObj.date : 'Select Transaction Date'}
        </Text>
      </Pressable>

      <Pressable style={styles.dateBtn} onPress={openCategories}>
        <Ionicons
          name={
            expenseObj.selectedCategory.iconName
              ? (expenseObj.selectedCategory
                  .iconName as keyof typeof Ionicons.glyphMap)
              : 'apps'
          }
          size={22}
          color={
            expenseObj.selectedCategory.color
              ? expenseObj.selectedCategory.color
              : '#0666EB'
          }
        />
        <Text
          style={{
            color: '#000',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'semibold',
          }}
        >
          {expenseObj.selectedCategory.name
            ? expenseObj.selectedCategory.name
            : 'Select Category'}
        </Text>
      </Pressable>

      {showCategories && (
        <CategoriesMiniModal
          setShowCategories={setShowCategories}
          selectedCategory={expenseObj.selectedCategory}
          setSelectedCategory={setExpenseObj}
        />
      )}

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
        }}
      >
        <Ionicons name='wallet-sharp' size={22} color={'#0666EB'} />
        <AccountDropDown
          account_id={expenseObj.account_id}
          setAccount={setExpenseObj}
        />
      </View>

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
        }}
      >
        <Ionicons name='book' size={22} color={'#0666EB'} />
        <TextInput
          style={{
            height: 40,
            color: '#000',
            padding: 10,
            width: '100%',
            fontSize: 18,
            fontWeight: 'semibold',
          }}
          placeholder='Add notes'
          placeholderTextColor={'#919191'}
          keyboardAppearance='dark'
          returnKeyType='done'
          value={expenseObj.notes}
          onChangeText={(text) =>
            setExpenseObj((obj) => {
              return {
                ...obj,
                notes: text,
              };
            })
          }
        />
      </View>

      <Pressable
        disabled={!isSummitable}
        style={{
          width: '100%',
          backgroundColor: '#0666EB',
          padding: 15,
          borderRadius: 10,
          marginTop: 'auto',
          marginBottom: 20,
          opacity: isSummitable ? 1 : 0.7,
        }}
        onPress={() => console.log(expenseObj)}
      >
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'semibold',
            color: '#fff',
            fontSize: 18,
          }}
        >
          Save
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    position: 'relative',
    gap: 20,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    paddingTop: 5,
    paddingBottom: 5,
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'semibold',
  },
  calendarContainer: {
    width: '100%',
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 10,
  },
  calendar: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    zIndex: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  dateBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
});
