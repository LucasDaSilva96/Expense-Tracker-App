import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import React from 'react';
import { catchError } from '@/utils/catchError';
import { signUp } from '@/services/auth';
import { Link } from 'expo-router';
import { checkIfIsEmail } from '@/utils/patternCheck';

export default function SignUpPage() {
  const [singUpObj, setSignUpObj] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSignUp = async () => {
    try {
      setIsLoading(true);
      if (
        !singUpObj.email ||
        !singUpObj.password ||
        !singUpObj.passwordConfirm
      ) {
        throw new Error('Please fill in all fields');
      }

      if (!checkIfIsEmail(singUpObj.email)) {
        throw new Error('Invalid email');
      }

      if (singUpObj.password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }
      if (singUpObj.password !== singUpObj.passwordConfirm) {
        throw new Error('Passwords do not match');
      }
      await signUp({
        email: singUpObj.email,
        first_name: singUpObj.first_name,
        last_name: singUpObj.last_name,
        password: singUpObj.password,
      });
    } catch (error) {
      Alert.alert('Error', catchError(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className='flex-1 items-center w-full p-2 justify-center gap-4'>
      <View>
        <Text className='font-semibold text-3xl text-center'>
          Create Account
        </Text>
        <Text className='text-base text-darkGrey'>
          Create an account to get started
        </Text>
      </View>

      <Image
        source={require('@/assets/images/Scenes/Scenes07.jpg')}
        className='w-full h-[250px] rounded-lg'
      />

      <View className='w-full gap-4'>
        <TextInput
          className='w-full p-4 border-2 border-gray-300 rounded-lg'
          onChangeText={(text) =>
            setSignUpObj({ ...singUpObj, first_name: text })
          }
          placeholder='First Name'
          returnKeyType='next'
        />
        <TextInput
          className='w-full p-4 border-2 border-gray-300 rounded-lg'
          onChangeText={(text) =>
            setSignUpObj({ ...singUpObj, last_name: text })
          }
          placeholder='Last Name'
          returnKeyType='next'
        />
        <TextInput
          className='w-full p-4 border-2 border-gray-300 rounded-lg'
          onChangeText={(text) => setSignUpObj({ ...singUpObj, email: text })}
          placeholder='Email'
          keyboardType='email-address'
          returnKeyType='done'
        />
        <TextInput
          className='w-full p-4 border-2 border-gray-300 rounded-lg'
          onChangeText={(text) =>
            setSignUpObj({ ...singUpObj, password: text })
          }
          placeholder='Password'
          secureTextEntry
          returnKeyType='done'
        />

        <TextInput
          className='w-full p-4 border-2 border-gray-300 rounded-lg'
          onChangeText={(text) =>
            setSignUpObj({ ...singUpObj, passwordConfirm: text })
          }
          placeholder='Password Confirm'
          secureTextEntry
          returnKeyType='done'
        />
      </View>

      <TouchableOpacity
        onPress={handleSignUp}
        disabled={isLoading}
        className='w-full p-4 bg-blue-500 rounded-lg'
      >
        <Text className='text-white text-center'>
          {isLoading ? 'Loading...' : 'Sign Up'}
        </Text>
      </TouchableOpacity>

      <View className='flex-row items-center gap-1'>
        <Text className='text-center text-darkGrey text-lg'>
          Already have an account?
        </Text>
        <Link href={'/signIn'} asChild>
          <Text className='text-blue-500 text-lg'>Sign in</Text>
        </Link>
      </View>
    </View>
  );
}
