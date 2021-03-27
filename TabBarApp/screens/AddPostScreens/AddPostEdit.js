import React from 'react';
import { Text, TextInput, FlatList, Image, View, Dimensions, TouchableOpacity, Pressable,TouchableHighlight, StyleSheet} from 'react-native';
import { ScrollView, TapGestureHandler } from 'react-native-gesture-handler';
import Axios from 'axios';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImgToBase64 from 'react-native-image-base64';

const initialLayout = { width: Dimensions.get('window').width };
var { height, width } = Dimensions.get('screen');

import MIcon from 'react-native-vector-icons/MaterialIcons';
import AIcon from 'react-native-vector-icons/AntDesign';
import { BASE_URL } from '../../components';


export default function AddPostEdit({ route, navigation }) {
  const { selImgDataArr, ImageURI, captureImageURI } = route.params
  const [data, setData] = React.useState({
    inputText: ''
  })
  const [email, setEmail] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [captureImageURIBase64, setCaptureImageURIBase64] = React.useState('');

  React.useEffect(() => {
    const temp = async () => {
      await AsyncStorage.getItem('userToken', async (err, result) => {
        setEmail(result);
      });
      await AsyncStorage.getItem('nickname', async (err, result) => {
        setNickname(result);
      });

      ImgToBase64.getBase64String(captureImageURI)
      .then(base64String => setCaptureImageURIBase64(base64String))
      .catch(err => console.log(err));
    }
    temp();
  }, [])

  const updateInputText = (val) => {
    setData({
        ...data,
        inputText: val
    });
  }

  const postFeed = async () => {
    await Axios.post(BASE_URL + "/uploadFeed", {
      email: email,
      ImageURI: ImageURI,
      captureImageURI: captureImageURIBase64,
      POST_TEXT: data.inputText,
      NICK:  nickname,
    }).then((response) => {
      var arr = response.data;
      setClosetData(arr);
    }).catch((error) => {;
      console.log("에러:", error);
      throw error;
    });
  }

  const renderSwipper = () => {
    if(ImageURI != null) {
      return(
        <SwiperFlatList showPagination paginationActiveColor = "#99D1E9" paginationDefaultColor = "#dfdfdf">
          <View style={[styles.child]}>
            <Image style={{height:'100%', width:'100%', resizeMode: 'contain'}} source={{uri: captureImageURI}}/>
          </View>
          <View style={[styles.child]}>
            <Image style={{height:'100%', width:'100%', resizeMode: 'contain'}} source={{uri: ImageURI}}/>
          </View>
        </SwiperFlatList>
      );
    } else {
      return (
        <SwiperFlatList showPagination paginationActiveColor = "#99D1E9" paginationDefaultColor = "#dfdfdf">
          <View style={[styles.child]}>
            <Image style={{height:'100%', width:'100%', resizeMode: 'contain'}} source={{uri: captureImageURI}}/>
          </View>
        </SwiperFlatList>
      );
    }
  }
  
  return (
    <View style={{backgroundColor: '#Fcfcfc', height: '100%'}}>
      <View style={{flexDirection: 'row', alignItems:'center',justifyContent:'space-between',borderColor:'#dfdfdf', borderBottomWidth:1, marginBottom :10, paddingLeft: 16,}}>
        < MIcon.Button name="arrow-back-ios" size={24} color={'#99D1E9'} backgroundColor={'#fcfcfc'}
          style={{alignSelf:'flex-start',marginVertical:-3, marginRight:-13 }}
          onPress={()=> navigation.navigate("GalleryPostAdd1")}
          >
        </MIcon.Button>
        <Text style={styles.subtitle}>글 작성</Text>
        <AIcon.Button name="checkcircle" color='#99D1E9' backgroundColor='#fcfcfc' size={24}
        onPress={async ()=> {
          await postFeed();
          navigation.navigate("Post", {inputText : data.inputText, selImgDataArr: selImgDataArr,
            ImageURI: ImageURI, captureImageURI:captureImageURI}
          )
         }}>

        </AIcon.Button>
      </View>

      <View style = {{paddingHorizontal: 16}}>
        <View style={styles.imageBox}>
          {renderSwipper()}
        </View>
      </View>
      <View style={styles.line}/>
      <View style = {{paddingHorizontal: 16}}>
        <View style = {styles.box}>
          <TextInput
            style={styles.inputText}
            placeholder='글을 작성하세요'
            placeholderTextColor='#dfdfdf'
            multiline ={true}
            onChangeText={(val)=>updateInputText(val)}>
          </TextInput>
        </View>
      </View>
      
    </View> 
  );    
}

const styles = StyleSheet.create({
      line: {
          marginTop: 10,
          marginBottom: 10,
          borderBottomColor: '#dfdfdf',  //dfdfdfb0하면 투명도 적용되는 듯
          borderBottomWidth: 1,
      },
      box: {
        width: '100%',
        height: 200,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      subtitle: {
        fontFamily: 'NanumSquareR',
        fontSize: 14,
        color:'#707070'
      },
      inputText: {
        fontFamily: 'NanumSquareR',
        fontSize: 14,
        marginLeft: 10,
        marginRight: 10,
      },
      imageBox: {
        width:'100%',
        height: width-32,
        justifyContent:'center',
        alignItems:'center'
      },
      child: { width:width-32, justifyContent: 'center' },
})