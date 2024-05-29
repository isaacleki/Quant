// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigaton/TabNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}