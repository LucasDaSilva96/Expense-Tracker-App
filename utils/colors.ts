import { colors } from '@/constants/colors';

// This function will return a random color from the colors array
export const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
