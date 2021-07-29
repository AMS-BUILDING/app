import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import DrawerNavigation from './navigation/DrawNavigation';
import DetailProcess from './screens/DetailProcess';
import Notification from './screens/Notification';
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
    // <Notification />
  );
}



