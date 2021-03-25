import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IIcon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import Closet from '../Closet';
import SangeuiFeed from '../ClosetScreens/ClosetDetailScreen/SangeuiFeed';
import HaueiFeed from '../ClosetScreens/ClosetDetailScreen/HaueiFeed';
import OuterFeed from '../ClosetScreens/ClosetDetailScreen/OuterFeed';
import ShoesFeed from '../ClosetScreens/ClosetDetailScreen/ShoesFeed';
import HatFeed from '../ClosetScreens/ClosetDetailScreen/HatFeed';
import AccFeed from '../ClosetScreens/ClosetDetailScreen/AccFeed';
import editClothes1 from '../editClothes1';
import editClothes2 from '../editClothes2';
import editClothes3 from '../editClothes3';
import AddClothesStackScreen from './AddClothesStackScreen';

const ClosetStack = createStackNavigator();

const ClosetStackScreen = ({navigation}) => {
  
    return (
      <NavigationContainer independent={true}>
        <ClosetStack.Navigator screenOptions={{ //모든 화면에 색깔 적용
        headerStyle: {
          backgroundColor: '#ffffff',//바탕 색깔
          borderBottomWidth: 3,
          borderBottomColor: '#99D1E9'
        },
        headerTintColor: '#000000',//글자색깔
        headerTitleStyle: {
          //fontWeight: 'bold'
        },
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
        <ClosetStack.Screen name="SangeuiFeed" component = {SangeuiFeed} options={{ title: ''}}/>
        <ClosetStack.Screen name="HaueiFeed" component = {HaueiFeed} options={{ title: ''}}/>
        <ClosetStack.Screen name="OuterFeed" component = {OuterFeed} options={{ title: ''}}/>
        <ClosetStack.Screen name="ShoesFeed" component = {ShoesFeed} options={{ title: ''}}/>
        <ClosetStack.Screen name="HatFeed" component = {HatFeed} options={{ title: ''}}/>
        <ClosetStack.Screen name="AccFeed" component = {AccFeed} options={{ title: ''}}/>
        <ClosetStack.Screen name="AddClothesStackScreen" component = {AddClothesStackScreen} options={{headerShown: false}} screenOptions={{tabBarVisible: false}}/>
      </ClosetStack.Navigator>
      </NavigationContainer>
    );
}

export default ClosetStackScreen;