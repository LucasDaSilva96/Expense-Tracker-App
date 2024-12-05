import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const CATEGORIES = [
  {
    name: 'Shopping',
    iconName: 'bag-handle-sharp',
    color: '#FFC107',
  },
  {
    name: 'Pets',
    iconName: 'paw-sharp',
    color: '#FF5722',
  },
  {
    name: 'Groceries',
    iconName: 'cart-sharp',
    color: '#009688',
  },
  {
    name: 'Transport',
    iconName: 'car-sharp',
    color: '#FF9800',
  },
  {
    name: 'Health',
    iconName: 'medkit-sharp',
    color: '#F44336',
  },
  {
    name: 'Entertainment',
    iconName: 'game-controller-sharp',
    color: '#9C27B0',
  },
  {
    name: 'Bills',
    iconName: 'card-sharp',
    color: '#3F51B5',
  },
  {
    name: 'Education',
    iconName: 'school-sharp',
    color: '#03A9F4',
  },
  {
    name: 'Gifts',
    iconName: 'gift-sharp',
    color: '#00BCD4',
  },
  {
    name: 'Others',
    iconName: 'ellipsis-horizontal-sharp',
    color: '#4CAF50',
  },
  {
    name: 'Travel',
    iconName: 'airplane-sharp',
    color: '#8BC34A',
  },
  {
    name: 'Gym',
    iconName: 'fitness-sharp',
    color: '#FFEB3B',
  },
  {
    name: 'Loan',
    iconName: 'card-sharp',
    color: '#FF5781',
  },
  {
    name: 'Salary',
    iconName: 'cash-sharp',
    color: '#0666EB',
  },
  {
    name: 'Savings',
    iconName: 'wallet-sharp',
    color: '#4CAF50',
  },
  {
    name: 'Games',
    iconName: 'game-controller-sharp',
    color: '#9C27B0',
  },
  {
    name: 'Investment',
    iconName: 'stats-chart-sharp',
    color: '#FF9800',
  },
  {
    name: 'Rent',
    iconName: 'home-sharp',
    color: '#FF5722',
  },
  {
    name: 'Utilities',
    iconName: 'water-sharp',
    color: '#009688',
  },
  {
    name: 'Food',
    iconName: 'fast-food-sharp',
    color: '#FFC107',
  },
  {
    name: 'Phone',
    iconName: 'call-sharp',
    color: '#F44336',
  },
];

type Props = {
  selectedCategory: {
    name: string;
    iconName: string;
    color: string;
  };
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<{
      name: string;
      iconName: string;
      color: string;
    }>
  >;
  setShowCategories: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CategoriesMiniModal({
  setSelectedCategory,
  selectedCategory,
  setShowCategories,
}: Props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            textTransform: 'capitalize',
            textAlign: 'center',
          }}
        >
          Select a category
        </Text>

        <Pressable
          onPress={() => setShowCategories(false)}
          style={{
            position: 'absolute',
            right: 10,
            padding: 5,
          }}
        >
          <Text
            style={{
              color: '#0666EB',
              fontSize: 16,
              fontWeight: 'semibold',
            }}
          >
            Cancel
          </Text>
        </Pressable>
      </View>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentInset={{ bottom: 20 }}
        contentContainerStyle={styles.categoryContainer}
      >
        {CATEGORIES.map((category, index) => (
          <Pressable
            style={styles.box}
            key={index}
            onPress={() => {
              setSelectedCategory(category);
              setShowCategories(false);
            }}
          >
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f7f7f7',
                borderRadius: 10,
                width: 50,
                height: 50,
                padding: 10,
                borderColor: `${
                  selectedCategory.name === category.name ? '#0666EB' : '#fff'
                }`,
                borderWidth: 2,
              }}
            >
              <Ionicons
                key={category.name}
                name={category.iconName as keyof typeof Ionicons.glyphMap}
                size={28}
                color={category.color}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                color: `${
                  selectedCategory.name === category.name ? '#0666EB' : '#000'
                }`,
                fontWeight: 'semibold',
              }}
            >
              {category.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    height: '70%',
    borderRadius: 10,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    zIndex: 10,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  scrollContainer: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 50,
    paddingBottom: 50,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    width: 100,
    height: 80,
  },
});
