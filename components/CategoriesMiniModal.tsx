import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { CATEGORIES } from '@/data/data';

type Props = {
  selectedCategory: {
    name: string;
    iconName: string;
    color: string;
  };
  setSelectedCategory: React.Dispatch<
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
              setSelectedCategory((e) => {
                return {
                  ...e,
                  selectedCategory: category,
                };
              });
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
