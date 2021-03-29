import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IIcon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../HomeScreens/HomeScreen';
import FeedDetail from '../HomeScreens/FeedDatail'

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
    return (
      <HomeStack.Navigator screenOptions={{ //모든 화면에 색깔 적용
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
        <HomeStack.Screen name="Home" component={HomeScreen} options={{ //home 화면에만 색깔 적용
          title: 'Cloice', // 이거 안쓰면 원래 이름인 Home으로 적용된다.
          headerTitleAlign: 'center', 
          headerTitleStyle: {
            fontFamily: 'DancingScript',
            fontSize: 30
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
        <HomeStack.Screen name="FeedDetail" component={FeedDetail} options = {{
          headerTitle: ""
        }} />
      </HomeStack.Navigator>
    );
}

export default HomeStackScreen;