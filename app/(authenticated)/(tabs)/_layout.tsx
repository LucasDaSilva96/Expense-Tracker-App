import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: '#0666EB', headerShown: false }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name='home' size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='stats'
        options={{
          title: 'Stats',
          tabBarIcon: ({ color }) => (
            <Ionicons name='stats-chart' size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='wallet'
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color }) => (
            <Ionicons name='wallet' size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name='person' size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
