import React from 'react';
import {
  Image
} from 'react-native'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IIcon from 'react-native-vector-icons/Ionicons';
import { icons, COLORS } from '../components';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import Closet from './Closet';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ClosetStack = createStackNavigator();

const MainTabScreen = () => {
  const tabOptions = {
    showLabel: false,
    style: {
        height: "10%",
        backgroundColor: '#99d1e9'
    }
  }

  return (
    <Tab.Navigator
      tabBarOptions = { tabOptions }
      screenOptions = {({ route }) => ({
        tabBarIcon: ({ focused }) => {
            switch (route.name) {
                case "Home":
                    return (
                        focused ? 
                        <Image 
                            source = {icons.homeButtonTrue}
                            resizeMode = "contain"
                            style = {{
                                tintColor: COLORS.white,
                                width: "68%",
                                height: "68%"
                            }}
                        /> :
                        <Image 
                            source = {icons.homeButtonFalse}
                            resizeMode = "contain"
                            style = {{
                                tintColor: COLORS.white,
                                width: "68%",
                                height: "68%"
                            }}
                        />
                    )
                case "Add":
                    return (
                        <Image 
                            source = {icons.addButton}
                            resizeMode = "contain"
                            style = {{
                                tintColor: COLORS.white,
                                width: 50,
                                height: 50
                            }}
                        />
                    )
                case "Closet":
                    return (
                        focused ? 
                        <Image 
                            source = {icons.closetButtonTrue}
                            resizeMode = "contain"
                            style = {{
                                tintColor: COLORS.white,
                                width: "68%",
                                height: "68%"
                            }}
                        /> :
                        <Image 
                            source = {icons.closetButtonFalse}
                            resizeMode = "contain"
                            style = {{
                                tintColor: COLORS.white,
                                width: "68%",
                                height: "68%"
                            }}
                        />
                    )
                case "Recommend":
                    return (
                        <Image 
                            source = {icons.recommendButton}
                            resizeMode = "contain"
                            style = {{
                                tintColor: COLORS.white,
                                width: "68%",
                                height: "68%"
                            }}
                        />
                    )
            }
        }
    })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
      />
      <Tab.Screen
        name="Add"
        component={DetailsStackScreen}
      />
      <Tab.Screen
        name="Closet"
        component={ProfileScreen}
      />
      <Tab.Screen
        name="Recommend"
        component={ClosetStackScreen}
      />
    </Tab.Navigator>
);
}

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