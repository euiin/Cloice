import React from 'react';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import App from '../App';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Login = () => {

  return (
        <Stack.Navigator screenOptions= {{headerShown: false}} initialRouteName={"LoginScreen"}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
  );
}

export default Login;