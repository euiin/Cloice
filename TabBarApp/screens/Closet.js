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
  const [topNum, setTopNumber] = React.useState(0);
  const [bottomNum, setBottomNumber] = React.useState(0);
  const [outerNum, setOuterNumber] = React.useState(0);
  const [shoesNum, setShoesNumber] = React.useState(0);
  const [hatNum, setHatNumber] = React.useState(0);
  const [accNum, setAccNumber] = React.useState(0);
  var topNumber = 0;
  var bottomNumber = 0;
  var outerNumber = 0;
  var shoesNumber = 0;
  var hatNumber = 0;
  var accNumber = 0;

  const getClosetData = async () => {
    await Axios.post(BASE_URL + "/getCloset", {
        email: email,
      }).then((response) => {
      var arr = response.data;
      setClosetData(arr);
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

      if(email != '')
        await getClosetData();
      else
        setClosetData([]);
      
    }
    temp();
    setTopNumber(topNumber);
    setBottomNumber(bottomNumber);
    setShoesNumber(shoesNumber);
    setOuterNumber(outerNumber);
    setHatNumber(hatNumber);
    setAccNumber(accNumber);
  }, [closetData, navigation, topNumber, bottomNumber, outerNumber, shoesNumber, hatNumber, accNumber]));

  const renderItemTop = ({ item }) => {
    if(item.category == "top") {
      // setTopNumber(topNumber + 1);
      topNumber = topNumber + 1;
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
      // setBottomNumber(bottomNumber + 1);
      bottomNumber = bottomNumber + 1;
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
      outerNumber = outerNumber + 1;
      // setOuterNumber(outerNumber + 1);
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
      shoesNumber = shoesNumber + 1;
      // setShoesNumber(shoesNumber + 1);
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
      hatNumber = hatNumber + 1;
      // setHatNumber(hatNumber + 1);
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
      // setAccNumber(accNumber + 1);
      accNumber = accNumber + 1;
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
        cropping: false,
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
        cropping: false,
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
            <TouchableOpacity onPress={()=>{}}>
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
              <Text style={{fontSize:20}}>상의 <Text style={{fontSize:14, color:'#707070'}}>{topNum} </Text> </Text>
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
              <Text style={{fontSize:20}}>하의 <Text style={{fontSize:14, color:'#707070'}}>{bottomNum} </Text> </Text>
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
              <Text style={{fontSize:20}}>아우터 <Text style={{fontSize:14, color:'#707070'}}>{outerNum} </Text> </Text>
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
              <Text style={{fontSize:20}}>신발 <Text style={{fontSize:14, color:'#707070'}}>{shoesNum} </Text> </Text>
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
              <Text style={{fontSize:20}}>모자 <Text style={{fontSize:14, color:'#707070'}}>{hatNum} </Text> </Text>
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
              <Text style={{fontSize:20}}>액세서리 <Text style={{fontSize:14, color:'#707070'}}>{accNum} </Text> </Text>
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