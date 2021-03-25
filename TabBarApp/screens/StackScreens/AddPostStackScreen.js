import React from 'react';
import {
  TouchableOpacity,
  Image,
} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';

import AIcon from 'react-native-vector-icons/AntDesign';
import { icons } from '../../components';

import AddPostScreen from '../AddPostScreen';
import AddClothScreen from '../AddClothScreen';
import GalleryPostAdd1 from '../AddPostScreens/GalleryPostAdd1';
import GalleryPost1 from '../AddPostScreens/GalleryPost1';
import AddPostEdit from '../AddPostScreens/AddPostEdit';
import Post from '../AddPostScreens/Post';

const AddPostStack = createStackNavigator();

const AddPostStackScreen = ({navigation}) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({tabBarVisible: false })})

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
      <AddPostStack.Screen name = "AddPostScreen" component = {AddPostScreen} options={{
        title: '게시물 추가',
        headerTitleAlign: 'center'}}/>
      <AddPostStack.Screen name="GalleryPostAdd1" component = {GalleryPostAdd1} options={{
        title: '게시물 추가',
        headerTitleAlign: 'center',
        }} />
      <AddPostStack.Screen name="GalleryPost1" component = {GalleryPost1} options={{
        title: '게시물 추가',
        headerTitleAlign: 'center'}}/>
      <AddPostStack.Screen name="AddPostEdit" component = {AddPostEdit} options={{
        title: '게시물 추가',
        headerTitleAlign: 'center',
        headerRight: () => (
        <AIcon.Button name="checkcircle" color='#99D1E9' backgroundColor='#fcfcfc' size={25}
        onPress={()=> navigation.navigate("Post")}>
        </AIcon.Button>
        )
        }} />
      <AddPostStack.Screen name="Post" component = {Post} options={{ //Post는 AddPostStack보다는 MyProfile에 있어야 할듯. 왜냐? 메뉴 버튼& 드로어 해야하거든
          title: 'Cloice',
          headerTitleAlign: 'center', 
          headerTitleStyle: {
            fontFamily: 'DancingScript',
            fontSize: 30
          }
        }}/>
    </AddPostStack.Navigator>
  );
};
  
export default AddPostStackScreen;
