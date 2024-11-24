import '@/global.css';
import { useFonts } from 'expo-font';
import { Slot, Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import React from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';
import { AuthProvider, useAuth } from '@/providers/AuthProvider';
import { supabase } from '@/utils/supabase';
import { AppState } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', async (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

const InitialLayout = () => {
  const { session, initialized } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (!initialized) return;

    // Check if the path/url is in the (auth) group
    const inAuthGroup = segments[0] === '(authenticated)';

    if (session && !inAuthGroup) {
      // Redirect authenticated users to the list page
      router.replace('/home');
    } else if (!session) {
      // Redirect unauthenticated users to the login page
      router.replace('/signIn');
    }
  }, [session, initialized]);

  if (!loaded) {
    return <Slot />;
  }

  return (
    <>
      <StatusBar style='dark' />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='signIn' />
        <Stack.Screen name='signUp' />
        <Stack.Screen name='(authenticated)' />
      </Stack>
    </>
  );
};

export default function RootLayout() {
  return (
    <RootSiblingParent>
      <AuthProvider>
        <InitialLayout />
      </AuthProvider>
    </RootSiblingParent>
  );
}
