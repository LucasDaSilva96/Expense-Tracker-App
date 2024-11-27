import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import Toaster from '@/components/Toaster';
import { signIn } from '@/services/auth';
import { catchError } from '@/utils/catchError';
import { Link } from 'expo-router';
import { checkIfIsEmail } from '@/utils/patternCheck';

export default function SignInPage() {
  const [signInData, setSignInData] = React.useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = React.useState(false);

  // TODO: Implement sign in logic
  const handleLogin = async () => {
    try {
      if (!signInData.email || !signInData.password)
        throw new Error('Please fill in all fields');
      setLoading(true);
      if (!checkIfIsEmail(signInData.email)) throw new Error('Invalid email');
      await signIn(signInData.email, signInData.password);
    } catch (error) {
      Alert.alert('Error', catchError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className='flex-1 items-center w-full p-2 justify-center gap-10'>
      <View>
        <Text className='font-semibold text-4xl text-center'>Expensify</Text>
        <Text className='text-base text-darkGrey'>Simplify your expenses</Text>
      </View>

      <View className='w-full gap-4 items-center'>
        <Image
          source={require('@/assets/images/Scenes/Scenes02.jpg')}
          className='w-full h-[250px] rounded-lg'
        />
        <TextInput
          className='w-full p-4 border-2 border-gray-300 rounded-lg mt-8'
          onChangeText={(text) => setSignInData({ ...signInData, email: text })}
          placeholder='Email'
          keyboardType='email-address'
          secureTextEntry
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
        <TouchableOpacity
          className='w-full p-4 bg-blue-500 rounded-lg'
          disabled={loading}
          onPress={handleLogin}
        >
          <Text className='text-white text-center'>
            {loading ? 'Loading...' : 'Sign In'}
          </Text>
        </TouchableOpacity>
      </View>
      <View className='flex-row items-center gap-1'>
        <Text className='text-center text-darkGrey text-lg'>
          Don't have an account?
        </Text>
        <Link href={'/signUp'} asChild>
          <Text className='text-blue-500 text-lg'>Sign up</Text>
        </Link>
      </View>
    </View>
  );
}
