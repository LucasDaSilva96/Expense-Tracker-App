import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import Toaster from '@/components/Toaster';
import { signIn } from '@/services/auth';

export default function SignInPage() {
  const [signInData, setSignInData] = React.useState({
    email: '',
    password: '',
  });
  const [showToaster, setShowToaster] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  // TODO: Implement sign in logic
  const handleLogin = async () => {
    if (!signInData.email || !signInData.password)
      throw new Error('Please fill in all fields');
    try {
      setLoading(true);
      await signIn(signInData.email, signInData.password);
    } catch (error) {
      setShowToaster(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className='flex-1 items-center w-full p-2 justify-evenly'>
      <Text className='font-semibold text-3xl'>Sign in Page</Text>
      <View className='w-full gap-4'>
        <TextInput
          className='w-full p-4 border-2 border-gray-300 rounded-lg'
          onChangeText={(text) => setSignInData({ ...signInData, email: text })}
          placeholder='Email'
          keyboardType='email-address'
          returnKeyType='next'
        />
        <TextInput
          className='w-full p-4 border-2 border-gray-300 rounded-lg'
          onChangeText={(text) =>
            setSignInData({ ...signInData, password: text })
          }
          placeholder='Password'
          secureTextEntry
          returnKeyType='done'
        />
      </View>
      <TouchableOpacity
        className='w-full p-4 bg-blue-500 rounded-lg'
        disabled={loading}
        onPress={handleLogin}
      >
        <Text className='text-white text-center'>
          {loading ? 'Loading...' : 'Sign In'}
        </Text>
      </TouchableOpacity>
      {showToaster && (
        <Toaster message='Please fill in all fields' type='error' />
      )}
    </View>
  );
}
