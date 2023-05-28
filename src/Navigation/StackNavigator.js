import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../../components/LoginPage';
import WelcomePage from '../../components/WelcomePage';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const  StackNavigator =() => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="LoginPage"
    >
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="WelcomePage" component={WelcomePage} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator;