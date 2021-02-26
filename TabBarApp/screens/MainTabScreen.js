import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IIcon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import Closet from './Closet';
import ProfileScreen from './ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ClosetStack = createStackNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <IIcon name="person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Closet"
        component={ClosetStackScreen}
        options={{
          tabBarLabel: '옷장',
          tabBarIcon: ({ color }) => (
            <Icon name="wardrobe-outline"/*aperture*/ color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

const HomeStackScreen = ({navigation}) => (
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
        title: 'Cloice',
        headerTitleAlign: 'center', // 이거 안쓰면 원래 이름인 Home으로 적용된다.
        // headerStyle: {
        //   backgroundColor: '#99D1E9'
        // },
        // headerTintColor: '#ffffff',
        // headerTitleStyle: {
        //   fontWeight: 'bold'
        // }
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
    </HomeStack.Navigator>
  );
  
const DetailsStackScreen = ({navigation}) => (
 <DetailsStack.Navigator screenOptions={{ //모든 화면에 색깔 적용
    headerStyle: {
      backgroundColor: '#ffffff',//바탕 색깔
      borderBottomWidth: 3,
      borderBottomColor: '#99D1E9'
    },
    headerTintColor: '#000000',//글자색깔
    }}
    >
    <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
    title: 'More Details', // 이거 안쓰면 원래 이름인 Details으로 적용된다.
    headerTitleAlign: 'center',
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
  </DetailsStack.Navigator>
);

const ClosetStackScreen = ({navigation}) => (
  <ClosetStack.Navigator screenOptions={{ //모든 화면에 색깔 적용
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
    <ClosetStack.Screen name="Closet" component={Closet} options={{ //home 화면에만 색깔 적용
      title: 'Cloice',
      headerTitleAlign: 'center', // 이거 안쓰면 원래 이름인 Home으로 적용된다.
      // headerStyle: {
      //   backgroundColor: '#99D1E9'
      // },
      // headerTintColor: '#ffffff',
      // headerTitleStyle: {
      //   fontWeight: 'bold'
      // }
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
  </ClosetStack.Navigator>
);

export default MainTabScreen;