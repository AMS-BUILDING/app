import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import DrawerNavigation from './navigation/DrawNavigation';
import DetailProcess from './screens/DetailProcess';
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}



