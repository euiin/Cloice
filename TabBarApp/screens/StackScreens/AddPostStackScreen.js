import React from 'react';
import {
  TouchableOpacity,
  Image,
} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IIcon from 'react-native-vector-icons/Ionicons';
import { icons } from '../../components';

import AddPostScreen from '../AddPostScreen';
import AddClothScreen from '../AddClothScreen';

const AddPostStack = createStackNavigator();

const AddPostStackScreen = () => {

  return (
    <AddPostStack.Navigator screenOptions={{ //모든 화면에 색깔 적용
        headerStyle: {
          backgroundColor: '#ffffff',//바탕 색깔
          borderBottomWidth: 3,
          borderBottomColor: '#99D1E9'
        },
        headerTintColor: '#000000',//글자색깔
        }
      }>
        <AddPostStack.Screen 
          name = "AddClothScreen"
          component={AddClothScreen}
        />
    </AddPostStack.Navigator>
  );
};
  
export default AddPostStackScreen;