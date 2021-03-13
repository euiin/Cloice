import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IIcon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import editClothes1 from '../editClothes1';
import editClothes2 from '../editClothes2';
import editClothes3 from '../editClothes3';
import editClothes4 from '../editClothes4';

const AddClothesStack = createStackNavigator();

const AddClothesStackScreen = ({route, navigation}) => {
  const { image } = route.params;
  

  React.useEffect(() => {
    navigation.setOptions({tabBarVisible: false })})
  
    return (
      <AddClothesStack.Navigator screenOptions={{ //모든 화면에 색깔 적용
        headerStyle: {
          backgroundColor: '#ffffff',//바탕 색깔
          borderBottomWidth: 3,
          borderBottomColor: '#99D1E9'
        },
        headerTintColor: '#000000',//글자색깔
        headerTitleStyle: {
          //fontWeight: 'bold'
        },
        // tabBarVisible: false,
      }}>
        
        <AddClothesStack.Screen name="editClothes1" component = {editClothes1} options={{
          title: '옷 추가',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'NanumSquarB',
            fontSize: 20,
          },
          // tabBarVisible:true,
          
          headerLeft: () => (
            <Feather.Button
              name="chevron-left"
              color="#99d1e9"
              size={32}
              backgroundColor="#ffffff"
              onPress={() => navigation.navigate('Closet')}
            />
          )
        }}
        />
        <AddClothesStack.Screen name="editClothes2" component = {editClothes2} options={{
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
        <AddClothesStack.Screen name="editClothes3" component = {editClothes3} options={{
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
      <AddClothesStack.Screen name="editClothes4" component = {editClothes4} options={{
          title: 'Cloice',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'DancingScript',
            fontSize: 30
          },
          headerLeft: () => (
            null
          )
        }}
        />

      </AddClothesStack.Navigator>

      
    );
}

export default AddClothesStackScreen;