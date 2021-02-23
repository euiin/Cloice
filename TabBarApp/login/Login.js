import React from 'react';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';

import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer,  } from '@react-navigation/native'

const Stack = createStackNavigator();

const Login = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions= {{headerShown: false}} initialRouteName={"LoginScreen"}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default Login;