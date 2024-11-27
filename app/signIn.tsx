import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
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

  const handleLogin = async () => {
    try {
      if (!signInData.email || !signInData.password)
        throw new Error('Please fill in all fields');
      setLoading(true);
      if (!checkIfIsEmail(signInData.email)) throw new Error('Invalid email');
      await signIn(signInData.email.toLowerCase(), signInData.password);
    } catch (error) {
      Alert.alert('Error', catchError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className='flex-1'
    >
      <View className='flex-1 items-center w-full p-2 justify-center gap-10'>
        <View>
          <Text className='font-semibold text-4xl text-center'>Expensify</Text>
          <Text className='text-base text-darkGrey'>
            Simplify your expenses
          </Text>
        </View>

        <View className='w-full gap-4 items-center'>
          <Image
            source={require('@/assets/images/Scenes/Scenes02.jpg')}
            className='w-full h-[250px] rounded-lg'
          />
          <TextInput
            className='w-full p-4 border-2 border-gray-300 rounded-lg mt-8 text-black'
            onChangeText={(text) =>
              setSignInData({ ...signInData, email: text })
            }
            placeholder='Email'
            keyboardType='email-address'
            returnKeyType='next'
            placeholderTextColor={'gray'}
            keyboardAppearance='dark'
            enterKeyHint='next'
          />
          <TextInput
            className='w-full p-4 border-2 border-gray-300 rounded-lg'
            onChangeText={(text) =>
              setSignInData({ ...signInData, password: text })
            }
            placeholder='Password'
            secureTextEntry
            returnKeyType='done'
            placeholderTextColor={'gray'}
          />
          <TouchableOpacity
            className='w-full p-4 bg-blue rounded-lg'
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
            <Text className='text-blue text-lg'>Sign up</Text>
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
