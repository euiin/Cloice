import React from 'react';
import {
  Image
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons, COLORS } from '../components';

import HomeStackScreen from './StackScreens/HomeStackScreen';
import ClosetStackScreen from './StackScreens/ClosetStackScreen';
import AddPostStackScreen from './StackScreens/AddPostStackScreen';
import RecommendStackScreen from './StackScreens/RecommendStackScreen';
import HomeScreen from './HomeScreen';
import AddPostScreen from './AddPostScreen';
import Closet from './Closet';
import RecommendScreen from './RecommendScreen';
import addClothes from './addClothes';

const Tab = createBottomTabNavigator();

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
                case "AddPost":
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
        name="AddPost"
        component={AddPostStackScreen}
      />
      <Tab.Screen
        name="Closet"
        component={ClosetStackScreen}
      />
      <Tab.Screen
        name="Recommend"
        component={RecommendStackScreen}
      />
    </Tab.Navigator>
  );
};

const ClosetStackScreen = ({ navigation }) => {
  return (
    <ClosetStack.Navigator 
      initialRouteName="Closet"
      screenOptions={{ //모든 화면에 색깔 적용
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
      <ClosetStack.Screen name="addClothes" component = {addClothes}/>
    </ClosetStack.Navigator>
  );
}

export default MainTabScreen;