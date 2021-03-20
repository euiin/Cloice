import React from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, ScrollView, FlatList, RefreshControl } from 'react-native';
import SangeuiStoryData from './ClosetScreens/SangeuiStoryData'
import EIcon from 'react-native-vector-icons/Entypo';
import { FloatingAction } from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import { BASE_URL } from '../components';
const actions = [{
  text: '갤러리에서 추가',
  icon: <AntDesign
          name="picture"
          color="#99d1e9"
          size={26}
        />,
  name: 'bt_gallery',
  position: 1,  //이 숫자가 위에서부터 순서
  buttonSize: 40,
  color: 'white',
}, {
  text: '카메라에서 추가',
  icon: <Ionicons
          name="camera"
          color="#99d1e9"
          size={26}
        />,
  name: 'bt_camera',
  position: 2,
  buttonSize: 40,
  color: 'white',
}, {
  text: '쇼핑몰에서 추가',
  icon: <Feather
          name="shopping-bag"
          color="#99d1e9"
          size={26}
        />,
  name: 'bt_shopping',
  position: 3,
  buttonSize: 40,
  color: 'white',
}];

const Closet = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [closetData, setClosetData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const getClosetData = () => {
    Axios.post(BASE_URL+"/getCloset", {
        email: email,
      }).then((response) => {
      var arr = response.data;
      console.log("arr는")
      console.log(arr);


      arr.forEach(item => {
        setClosetData([
          ...closetData,
          {
            id: item.file,
            url: item.file,
            title: item.clothName,
          }
        ]);
        console.log("아이템 렌더링 하였습니다.")
      });
    }).catch((error) => {
      console.log("에러:", error);
      throw error;
    });
  }

  React.useEffect(() => {
    const temp = async () => {
      await AsyncStorage.getItem('userToken', async (err, result) => {
        setEmail(result);
      });
      getClosetData();
    }
    temp();

  }, [])


  const renderItem = ({ item }) => (
      <View>
        <TouchableOpacity>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={{uri: item.url}} style={[styles.storyimage]} />
        </View>
        </TouchableOpacity>   
      </View>
    );

    const handleGallery = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64: true,
      }).then(image => {
        // console.log(image);
        navigation.navigate("AddClothesStackScreen", {
          screen: 'editClothes1',
          params: {image: image},
        });
      });
    }

    const handleCamera = () => {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64: true
      }).then(image => {
        navigation.navigate("AddClothesStackScreen", {
          screen: 'editClothes1',
          params: {image: image},
        });
      });
    }

    return (
      //header Tab
      <View style={{paddingLeft:16, paddingRight:16, backgroundColor: '#FCFCFC'}}>
        <ScrollView>
          <View style={{flexDirection:'row',alignItems: 'center',paddingTop:15}}>
            <TouchableOpacity onPress={()=>{ navigation.navigate("MyProfile")}}>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} 
            style={{width:80,height:80, borderRadius:52, marginRight:10}}/>
            </TouchableOpacity> 
            <Text style={{fontSize:20}}>민희님의 옷장</Text>
          </View>      
          <View style={[styles.closets]}>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} 
              onPress={() => navigation.navigate("SangeuiFeed")}>
              <Text style={{fontSize:20}}>상의 <Text style={{fontSize:14, color:'#707070'}}>10 </Text> </Text>
              <EIcon name='plus' 
              style={{padding:10, fontSize: 28 }}
              />
            </TouchableOpacity>
            <FlatList
              horizontal={true} 
              showsHorizontalScrollIndicator={false} 
              data={closetData} 
              renderItem={renderItem} 
              keyExtractor={(item) => {
                // console.log("아이템은 ");
                // console.log(item);
                String(item.id)}} 
            />
          </View>

          <View style={[styles.closets]}>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} 
              onPress={() => {}}>
              <Text style={{fontSize:20}}>하의 <Text style={{fontSize:14, color:'#707070'}}>10 </Text> </Text>
              <EIcon name='plus' 
              style={{padding:10, fontSize: 28 }}
              />

            </TouchableOpacity>
            <FlatList
              horizontal={true} 
              showsHorizontalScrollIndicator={false} 
              data={closetData}
              renderItem={renderItem}
              keyExtractor={(item) => {String(item.id)}}
              // numColumns={3}   horizontal 없을 때 쓰자!! ex) 피드
            />
          </View>

          <View style={[styles.closets]}>
          <Text style={{fontSize:20}}>아우터 <Text style={{fontSize:14, color:'#707070'}}>10 </Text> </Text>
            <ScrollView horizontal={true}>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            </ScrollView>
          </View>
          <View style={[styles.closets]}>
          <Text style={{fontSize:20}}>신발 <Text style={{fontSize:14, color:'#707070'}}>10 </Text> </Text>
            <ScrollView horizontal={true}>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            </ScrollView>
          </View>
          <View style={[styles.closets]}>
          <Text style={{fontSize:20}}>모자 <Text style={{fontSize:14, color:'#707070'}}>10 </Text> </Text>
            <ScrollView horizontal={true}>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            </ScrollView>
          </View>
          <View style={[styles.closets],{ paddingBottom:24}}>
          <Text style={{fontSize:20}}>액세서리 <Text style={{fontSize:14, color:'#707070'}}>10 </Text> </Text> 
            <ScrollView horizontal={true}>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            </ScrollView>
          </View>      
        </ScrollView>

        <FloatingAction
          floatingIcon= {require('../assets/pngs/addClothes.png')}
          iconWidth= {64}
          iconHeight= {64}
          buttonSize ={64}
          actions={actions}
          onPressItem={name => {
            if(name == "bt_gallery") {
              handleGallery();
            } else if(name == "bt_camera") {
              handleCamera();
            } else {
              return;
            }
          }}
        />
      </View>
      //bottom Tab
      );
  };
export default Closet;
  
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    container2: {
      flex: 1,
    },
    closets:{
      paddingTop:11, 
      paddingBottom:9, 
      borderColor:'#dfdfdf', 
      borderBottomWidth:0.5
    },
    storyimage: {
      width:90, 
      height:90, 
      borderRadius:52, 
      marginHorizontal:7,
      marginTop:8,
    },
    addbutton: {
      width: 64,
      height: 64,
      resizeMode: 'contain',  //그림자 넣기
      // marginBottom: 500,
    },
    fixed: {
      position: 'absolute',
      // top: 100,
      // left: 0,
      right: 16,
      bottom: 16, //하단탭 기준 16 offset 자동으로 됨.
    },
    

  });