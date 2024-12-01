import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { signOut } from '@/services/auth';

export default function ProfilePage() {
  return (
    <View>
      <Text>Profile Page</Text>
      <TouchableOpacity
        onPress={signOut}
        className='w-full p-4 bg-blue rounded-lg'
      >
        <Text className='text-center text-slate-50'>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
