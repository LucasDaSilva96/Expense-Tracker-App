import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Keyboard,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import CategoriesMiniModal from '../CategoriesMiniModal';

export default function Expense() {
  const amount = useRef<TextInput | null>(null);
  const [date, setDate] = useState('');
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const [notes, setNotes] = useState('');

  const [selectedCategory, setSelectedCategory] = useState({
    name: '',
    iconName: '',
    color: '',
  });

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

  return (
    <View style={styles.container}>
      <View style={styles.amountContainer}>
        <Ionicons name='cash' color={'#0666EB'} size={22} />
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

      <View>
        <Pressable onPress={openNotesHandler} style={styles.dateBtn}>
          <Ionicons name='book' size={22} color={'#0666EB'} />
          <Text
            style={{
              color: '#000',
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'semibold',
            }}
          >
            {notes ? notes : 'Add Notes'}
          </Text>
        </Pressable>
      </View>

      {openNotes && (
        <View>
          <TextInput
            multiline={true}
            blurOnSubmit={true}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            spellCheck
            returnKeyType='done'
            returnKeyLabel='done'
            keyboardAppearance='dark'
            placeholder='Add notes here'
            placeholderTextColor={'#919191'}
            style={{
              color: '#000',
              padding: 10,
              width: '100%',
              fontSize: 18,
              fontWeight: 'semibold',
              backgroundColor: '#fff',
              borderRadius: 10,
              minHeight: 100,
            }}
            value={notes}
            onChangeText={(text) => setNotes(text)}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              gap: 10,
              marginTop: 10,
            }}
          >
            <Pressable
              style={{
                backgroundColor: '#0666EB',
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}
            >
              <Ionicons
                name='checkmark-circle-sharp'
                size={32}
                color={'#fff'}
              />
            </Pressable>

            <Pressable
              onPress={() => setOpenNotes(false)}
              style={{
                backgroundColor: '#919191',
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}
            >
              <Ionicons name='close-circle-sharp' size={32} color={'#fff'} />
            </Pressable>
          </View>
        </View>
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
