import { error, success } from '@/constants/toasterColors';
import { useState } from 'react';
import { Text, View } from 'react-native';
import Toast from 'react-native-root-toast';
import { Ionicons } from '@expo/vector-icons';

type ToasterProps = {
  message: string;
  type: 'error' | 'success';
  duration?: number;
};

export default function Toaster({ message, type, duration }: ToasterProps) {
  const [toastObj] = useState(type === 'error' ? error : success);
  return (
    <Toast
      position={50}
      shadow={true}
      animation={true}
      hideOnPress={true}
      duration={duration || 3000}
      backgroundColor={toastObj.backgroundColor}
      textColor={toastObj.textColor}
    >
      {type === 'error' ? (
        <View className='flex-row items-center gap-2'>
          <Ionicons name='alert-circle' size={24} color='#f1faee' />
          <Text>{message}</Text>
        </View>
      ) : (
        <View className='flex-row items-center gap-2'>
          <Ionicons name='checkmark-circle' size={24} color='#f1faee' />
          <Text>{message}</Text>
        </View>
      )}
    </Toast>
  );
}
