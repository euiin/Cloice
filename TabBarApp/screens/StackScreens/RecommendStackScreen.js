import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IIcon from 'react-native-vector-icons/Ionicons';

import RecommendScreen from '../RecommendScreen'

const RecommendStack = createStackNavigator();

const RecommendStackScreen = ({navigation}) => {
    return (
      <RecommendStack.Navigator screenOptions={{ //모든 화면에 색깔 적용
        headerStyle: {
          backgroundColor: '#ffffff',//바탕 색깔
          borderBottomWidth: 3,
          borderBottomColor: '#99D1E9'
        },
        headerTintColor: '#000000',//글자색깔
        headerTitleStyle: {
          //fontWeight: 'bold'
        }
      }}>
        <RecommendStack.Screen name="Closet" component={RecommendScreen} options={{ //home 화면에만 색깔 적용
          title: '코디추천',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'NanumSquareR',
            fontSize: 20
          },
          headerRight: () => (
            <Icon.Button name="menu" color='#000000' size={25} 
            backgroundColor="#ffffff" onPress={() => navigation.openDrawer()}>
            </Icon.Button>
          ),
          headerLeft: () => (
            <IIcon.Button name="search" color='#000000' size={25} 
            backgroundColor="#ffffff" onPress={() => navigation.openDrawer()}>
            </IIcon.Button>
          )
        }} />
      </RecommendStack.Navigator>
    );
  }

export default RecommendStackScreen;