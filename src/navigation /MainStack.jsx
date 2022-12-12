import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { DashBoard, Login, SignUp } from '../screens';



const Stack = createStackNavigator();
export function MainStack() {
  return (
    <Stack.Navigator initialRoute={'Login'} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="DashBoard" component={DashBoard} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}