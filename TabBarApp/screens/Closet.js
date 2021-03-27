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
  const [nickname, setNickname] = React.useState("");
  const [closetData, setClosetData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [numberOfClothes, setNumberOfClothes] = React.useState({
    top: 0,
    bottom: 0,
    outer: 0,
    shoes: 0,
    hat: 0,
    acc: 0,
  });

  const getClosetData = async () => {
    await Axios.post(BASE_URL + "/getCloset", {
        email: email,
      }).then((response) => {
      var arr = response.data;
      setClosetData(arr);
      // setNumbers(arr)
    }).catch((error) => {;
      console.log("에러:", error);
      throw error;
    });
  }

  useFocusEffect(React.useCallback(() => {
    const temp = async () => {
      await AsyncStorage.getItem('userToken', async (err, result) => {
        setEmail(result);
      });

      await AsyncStorage.getItem('nickname', async (err, result) => {
        setNickname(result);
      });

      await getClosetData();
    }
    temp();
  }, [email]));

  const renderItemTop = ({ item }) => {
    if(item.category == "top") {
      return (
      <View>
        <TouchableOpacity onPress ={() => {
          navigation.navigate("ClothInfo", {
            item: item,
          })
        }} >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={{uri: item.file}} style={[styles.storyimage]} />
        </View>
        </TouchableOpacity>
      </View>
      );
    }
  };

  const renderItemBottom = ({ item }) => {
    if(item.category == "bottom") {
      return (
        <View>
          <TouchableOpacity onPress ={() => {
          navigation.navigate("ClothInfo", {
            item: item,
          })
        }} >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={{uri: item.file}} style={[styles.storyimage]} />
          </View>
          </TouchableOpacity>   
        </View>
      );
    }
  };

  const renderItemOuter = ({ item }) => {
    if(item.category == "outer") {
      return (
        <View>
          <TouchableOpacity onPress ={() => {
          navigation.navigate("ClothInfo", {
            item: item,
          })
        }} >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={{uri: item.file}} style={[styles.storyimage]} />
          </View>
          </TouchableOpacity>   
        </View>
      );
    }
  };

  const renderItemShoes = ({ item }) => {
    if(item.category == "shoes") {
      return (
        <View>
          <TouchableOpacity onPress ={() => {
          navigation.navigate("ClothInfo", {
            item: item,
          })
        }} >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={{uri: item.file}} style={[styles.storyimage]} />
          </View>
          </TouchableOpacity>   
        </View>
        );
    }
  };

  const renderItemHat = ({ item }) => {
    if(item.category == "hat") {
      return (
        <View>
          <TouchableOpacity onPress ={() => {
          navigation.navigate("ClothInfo", {
            item: item,
          })
        }} >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={{uri: item.file}} style={[styles.storyimage]} />
          </View>
          </TouchableOpacity>   
        </View>
        );
    }
  };

  const renderItemAcc = ({ item }) => {
    if(item.category == "acc") {
      return (
        <View>
          <TouchableOpacity onPress ={() => {
          navigation.navigate("ClothInfo", {
            item: item,
          })
        }} >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={{uri: item.file}} style={[styles.storyimage]} />
          </View>
          </TouchableOpacity>   
        </View>
        );
    }
  };

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
        <ScrollView 
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={async () => {
                setIsLoading(true);
                await getClosetData();
                setIsLoading(false);
              }}
            />
          }>
          <View style={{flexDirection:'row',alignItems: 'center',paddingTop:15}}>
            <TouchableOpacity onPress={()=>{ navigation.navigate("MyProfile")}}>
            <Image source={require('../login/profileImage/ProfileImage.jpg')} 
            style={{width:100,height:100, borderRadius:60, marginRight:10}}/>
            </TouchableOpacity>
            <Text style={{fontSize:20}}>{nickname}님의 옷장</Text>
          </View>
          <View style={[styles.closets]}>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} 
              onPress={() => navigation.navigate("SangeuiFeed", {
                closetData: closetData
              })}>
              <Text style={{fontSize:20}}>상의 <Text style={{fontSize:14, color:'#707070'}}>{numberOfClothes.top} </Text> </Text>
              <EIcon name='plus' 
              style={{padding:10, fontSize: 28 }}
              />
            </TouchableOpacity>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={closetData}
              renderItem={renderItemTop}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>

          <View style={[styles.closets]}>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} 
              onPress={() => navigation.navigate("HaeuiFeed", {
                closetData: closetData
              })}>
              <Text style={{fontSize:20}}>하의 <Text style={{fontSize:14, color:'#707070'}}>{numberOfClothes.bottom} </Text> </Text>
              <EIcon name='plus' 
              style={{padding:10, fontSize: 28 }}
              />

            </TouchableOpacity>
            <FlatList
              horizontal={true} 
              showsHorizontalScrollIndicator={false} 
              data={closetData}
              renderItem={renderItemBottom}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>

          <View style={[styles.closets]}>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} 
              onPress={() => navigation.navigate("OuterFeed", {
                closetData: closetData
              })}>
              <Text style={{fontSize:20}}>아우터 <Text style={{fontSize:14, color:'#707070'}}>{numberOfClothes.outer} </Text> </Text>
              <EIcon name='plus' 
              style={{padding:10, fontSize: 28 }}
              />

            </TouchableOpacity>
            <FlatList
              horizontal={true} 
              showsHorizontalScrollIndicator={false} 
              data={closetData}
              renderItem={renderItemOuter}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>

          <View style={[styles.closets]}>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} 
              onPress={() => navigation.navigate("ShoesFeed", {
                closetData: closetData
              })}>
              <Text style={{fontSize:20}}>신발 <Text style={{fontSize:14, color:'#707070'}}>{numberOfClothes.shoes} </Text> </Text>
              <EIcon name='plus' 
              style={{padding:10, fontSize: 28 }}
              />
            </TouchableOpacity>
            <FlatList
              horizontal={true} 
              showsHorizontalScrollIndicator={false} 
              data={closetData}
              renderItem={renderItemShoes}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>

          <View style={[styles.closets]}>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} 
              onPress={() => navigation.navigate("HatFeed", {
                closetData: closetData
              })}>
              <Text style={{fontSize:20}}>모자 <Text style={{fontSize:14, color:'#707070'}}>{numberOfClothes.hat} </Text> </Text>
              <EIcon name='plus' 
              style={{padding:10, fontSize: 28 }}
              />

            </TouchableOpacity>
            <FlatList
              horizontal={true} 
              showsHorizontalScrollIndicator={false} 
              data={closetData}
              renderItem={renderItemHat}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>

          <View style={[styles.closets]}>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} 
              onPress={() => navigation.navigate("AccFeed", {
                closetData: closetData
              })}>
              <Text style={{fontSize:20}}>액세서리 <Text style={{fontSize:14, color:'#707070'}}>{numberOfClothes.acc} </Text> </Text>
              <EIcon name='plus' 
              style={{padding:10, fontSize: 28 }}
              />

            </TouchableOpacity>
            <FlatList
              horizontal={true} 
              showsHorizontalScrollIndicator={false} 
              data={closetData}
              renderItem={renderItemAcc}
              keyExtractor={(item) => item.id.toString()}
            />
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