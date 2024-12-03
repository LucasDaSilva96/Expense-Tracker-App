import { View, Text, StyleSheet } from 'react-native';
import React, { useMemo } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Bar } from 'react-native-progress';
import { getRandomColor } from '@/utils/colors';
import { calculateProgress } from '@/utils/progress';
type Props = {
  iconName: keyof typeof Ionicons.glyphMap;
  target_amount: number;
  current_amount: number;
  name: string;
};

export default function GoalBox({
  iconName,
  current_amount,
  name,
  target_amount,
}: Props) {
  // Get a random color for the progress bar
  const color = useMemo(() => getRandomColor(), [current_amount]);
  // Calculate the progress of the goal
  const progress = calculateProgress({ current_amount, target_amount });

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={28} color={color} />
      </View>
      <View style={styles.progressContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '80%',
          }}
        >
          <Text style={styles.name}>{name}</Text>
          <Text
            style={{
              fontSize: 12,
              color: '#919191',
              fontWeight: 'bold',
            }}
          >
            Target : ${target_amount}
          </Text>
        </View>
        <Bar
          progress={progress.progress}
          animated
          width={300}
          color='#0666EB'
          borderColor='#D9D9D9'
        />
        <View style={styles.progressInfoContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
            <Text style={styles.textBlue}>Saved</Text>
            <Text style={styles.textBlue}>${current_amount}</Text>
            <Text style={styles.textBlue}>/</Text>
            <Text style={styles.textBlue}>{progress.percentageSaved}%</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
            <Text style={styles.textGray}>left</Text>
            <Text style={styles.textGray}>${progress.amountLeft}</Text>
            <Text style={styles.textGray}>/</Text>
            <Text style={styles.textGray}>{progress.percentageLeft}%</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#F0F0F0',
    gap: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  progressContainer: {
    width: '100%',
    gap: 5,
  },
  iconContainer: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 10,
  },
  progressInfoContainer: {
    gap: 5,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textBlue: {
    color: '#0666EB',
    fontSize: 11,
    fontWeight: 'semibold',
  },
  textGray: {
    color: '#919191',
    fontSize: 11,
    fontWeight: 'semibold',
  },
});
