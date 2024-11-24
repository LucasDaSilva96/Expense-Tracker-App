import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { catchError } from '@/utils/catchError';
import Toaster from '@/components/Toaster';
import { signUp } from '@/services/auth';

export default function SignUpPage() {
  const [singUpObj, setSignUpObj] = React.useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [toasterObj, setToasterObj] = React.useState({
    show: false,
    message: '',
    type: '',
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
      if (singUpObj.password !== singUpObj.passwordConfirm) {
        throw new Error('Passwords do not match');
      }
      await signUp(singUpObj.email, singUpObj.password);
      setToasterObj({
        show: true,
        message: 'Sign up successful',
        type: 'success',
      });
      console.log('Sign up successful');
    } catch (error) {
      setToasterObj({
        show: true,
        message: catchError(error),
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className='flex-1 items-center w-full p-2 justify-evenly'>
      <Text className='font-semibold text-3xl'>Sign Up page</Text>

      <View className='w-full gap-4'>
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
      {toasterObj.show && (
        <Toaster
          message={toasterObj.message}
          type={toasterObj.type as 'error' | 'success'}
        />
      )}
    </View>
  );
}
