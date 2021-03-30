import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IIcon from 'react-native-vector-icons/Ionicons';

import MyProfile from '../MyProfile';
import MyProfileFeedDetail from '../MyProfileScreens/MyProfileFeedDetail';

const MyProfileStack = createStackNavigator();

const  MyProfileStackScreen = ({navigation}) => {
    return (
      <MyProfileStack.Navigator screenOptions={{ //모든 화면에 색깔 적용
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
        < MyProfileStack.Screen name="MyProfile" component={MyProfile} options={{ //home 화면에만 색깔 적용
          title: 'Cloice',
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
            backgroundColor="#ffffff" onPress={() => {}}>
            </IIcon.Button>
          )
        }} />
        <MyProfileStack.Screen name="MyProfileFeedDetail" component={MyProfileFeedDetail} options={{ //home 화면에만 색깔 적용
          title: ''
          }}/>
      </MyProfileStack.Navigator>
    );
}

export default  MyProfileStackScreen;