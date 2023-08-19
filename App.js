
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './component/HomeScreen';
import DetailScreen from './component/DetailScreen';
import Counter from './component/Counter';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='detail' component={DetailScreen}></Stack.Screen>
        <Stack.Screen name='counter' component={Counter}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

