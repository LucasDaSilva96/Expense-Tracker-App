import { Stack } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

export default function AuthenticatedLayout() {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }} className='px-2 pt-14'>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen
          name='modal'
          options={{
            presentation: 'modal',
            headerTitleAlign: 'center',
            title: 'Add Transaction',
            headerRight: () => (
              <Pressable>
                <Text style={{ color: '#0666EB' }}>Save</Text>
              </Pressable>
            ),
          }}
        />
      </Stack>
    </View>
    // </SafeAreaView>
  );
}
