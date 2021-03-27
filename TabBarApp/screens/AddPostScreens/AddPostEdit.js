import React from 'react';
import { Text, TextInput, FlatList, Image, View, Dimensions, TouchableOpacity, Pressable,TouchableHighlight, StyleSheet} from 'react-native';
import { ScrollView, TapGestureHandler } from 'react-native-gesture-handler';

const initialLayout = { width: Dimensions.get('window').width };
var { height, width } = Dimensions.get('screen');

import MIcon from 'react-native-vector-icons/MaterialIcons';
import AIcon from 'react-native-vector-icons/AntDesign';


export default function AddPostEdit({route, navigation}) {
//   const { image } = route.params;
//   const imageURI = "data:" + image.mime + ";base64," + image.data; 
  const { selImgDataArr } = route.params
  const [data, setData] = React.useState({
    inputText: ''
  })

  const { ImageURL } = route.params;

  const updateInputText = (val) => {
    setData({
        ...data,
        inputText: val
    });
  }

  // console.log(data.inputText)
  
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
        onPress={()=> navigation.navigate("Post", {inputText : data.inputText, selImgDataArr: selImgDataArr})}>


        </AIcon.Button>

      </View>


      <View style = {{paddingHorizontal: 16}}>
        <View style={styles.imageBox}>
          {/* <Text style={styles.subtitle}>글 작성</Text> */}
          <Image style={{height:'100%', width:'100%', resizeMode: 'contain'}} source = {{uri: ImageURL}} />
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
})