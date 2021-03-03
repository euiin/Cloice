import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IIcon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import Closet from '../Closet';
import SangeuiFeed from '../ClosetScreens/SangeuiFeed';
import editClothes1 from '../editClothes1';
import editClothes2 from '../editClothes2';
import editClothes3 from '../editClothes3';

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
          <ClosetStack.Screen name="SangeuiFeed" component = {SangeuiFeed}/>
          <ClosetStack.Screen name="editClothes1" component = {editClothes1} options={{
            title: '옷 추가',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'NanumSquarB',
              fontSize: 20,
            },
            
            headerLeft: () => (
              <Feather.Button
                name="chevron-left"
                color="#99d1e9"
                size={32}
                backgroundColor="#ffffff"
                // onPress={() => navigation.navigate('어디루??')}
              />
            )
          }}
          />
          <ClosetStack.Screen name="editClothes2" component = {editClothes2} options={{
            title: '옷 추가',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'NanumSquarB',
              fontSize: 20
            },
            headerLeft: () => (
              <Feather.Button
                name="chevron-left"
                color="#99d1e9"
                size={32}
                backgroundColor="#ffffff"
                onPress={() => navigation.navigate('editClothes1')}
              />
            )
          }}
          />
          <ClosetStack.Screen name="editClothes3" component = {editClothes3} options={{
            title: '옷 추가',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'NanumSquarB',
              fontSize: 20
            },
            headerLeft: () => (
              <Feather.Button
                name="chevron-left"
                color="#99d1e9"
                size={32}
                backgroundColor="#ffffff"
                onPress={() => navigation.navigate('editClothes2')}
              />
            )
          }}
          />
        </ClosetStack.Navigator>
      </NavigationContainer>
      
    );
}

export default ClosetStackScreen;