import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { signOut } from '@/services/auth';

export default function HomePage() {
  return (
    <View className='flex-1 w-full items-center justify-evenly p-2'>
      <Text>Home Page</Text>
      <TouchableOpacity
        onPress={signOut}
        className='w-full p-4 bg-blue-500 rounded-lg'
      >
        <Text className='text-center text-slate-50'>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
