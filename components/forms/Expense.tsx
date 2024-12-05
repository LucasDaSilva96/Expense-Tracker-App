import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import React, { useRef, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import CategoriesMiniModal from '../CategoriesMiniModal';

export default function Expense() {
  const amount = useRef<TextInput | null>(null);
  const [date, setDate] = useState('');
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState({
    name: '',
    iconName: '',
    color: '',
  });

  const [showCategories, setShowCategories] = useState(false);

  const openCalendar = () => {
    setIsCalendarVisible(true);
    setShowCategories(false);
  };

  const openCategories = () => {
    setShowCategories(true);
    setIsCalendarVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.amountContainer}>
        <Ionicons name='cash-sharp' color={'#0666EB'} size={22} />
        <Text style={styles.amountText}>Amount</Text>
        <TextInput
          ref={amount}
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
                setDate(day.dateString);
                setIsCalendarVisible(false);
              }}
              markedDates={{
                [date]: {
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
          {date ? date : 'Select Transaction Date'}
        </Text>
      </Pressable>

      <Pressable style={styles.dateBtn} onPress={openCategories}>
        <Ionicons
          name={
            selectedCategory.iconName
              ? (selectedCategory.iconName as keyof typeof Ionicons.glyphMap)
              : 'apps'
          }
          size={22}
          color={selectedCategory.color ? selectedCategory.color : '#0666EB'}
        />
        <Text
          style={{
            color: '#000',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'semibold',
          }}
        >
          {selectedCategory.name ? selectedCategory.name : 'Select Category'}
        </Text>
      </Pressable>

      {showCategories && (
        <CategoriesMiniModal
          setShowCategories={setShowCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    position: 'relative',
    gap: 10,
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
