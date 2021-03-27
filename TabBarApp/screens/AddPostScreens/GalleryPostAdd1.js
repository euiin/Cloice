import React from 'react';
import { Text, FlatList, StyleSheet, Image, View, Dimensions, TouchableOpacity, Pressable,TouchableHighlight} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ScrollView, TapGestureHandler } from 'react-native-gesture-handler';
import { DragResizeBlock,} from 'react-native-drag-resize-elements';

import SangeuiPost from './SangeuiPost';
import HaeuiPost from './HaeuiPost';
import {AddPostContext} from './AddPostContext';

import ImagePicker from 'react-native-image-crop-picker';

import MIcon from 'react-native-vector-icons/MaterialIcons';


  const initialLayout = { width: Dimensions.get('window').width };
  var { height, width } = Dimensions.get('screen');
  
  const tabs = [
    { tabLabel: '상의',tabNo:1,},
    { tabLabel: '하의',tabNo:2,},
    { tabLabel: '아우터',tabNo:3,},
    { tabLabel: '신발',tabNo:4,},
    { tabLabel: '모자',tabNo:5,},
    { tabLabel: '액세서리',tabNo:6,},
  ];
  
  
const GalleryPostAdd1 = ({navigation, route}) => {
  const mainImage = require('../../assets/pngs/addGalleryPost.png');

  const [pageNo, setPageNo] = React.useState(1);
  
  const { selImgDataArr, captureImageURI } = route.params
  const [selImgData, setSelImgData] = React.useState(selImgDataArr);
  const ImgData = {
    selImgData: selImgData,
    setSelImgData: setSelImgData
  }
  const [ImageURL, setImageURL] = React.useState(undefined); //uri와 헷갈리지 마세여~~

  // const [data, setData] = React.useState({
  //   galleryImage: '',
  //   mainImage: require('../../assets/pngs/addGalleryPost.png'),
  // })

  const [indicator, setIndicator] = React.useState(false);

  const handleGallery = () => {
    
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      includeBase64: true,
    }).then(image => {
      console.log("imageURL은 ")
      setImageURL(("data:" + image.mime + ";base64," + image.data));
      // setImageURL(image.uri)
      // setImageURL(temp);
      console.log(ImageURL)
      setIndicator(true);
    })
  }
  

  const renderSwitch=(pageNo)=> {
    switch(pageNo) {
      case 1:
        return (
          <AddPostContext.Provider value = {ImgData}>
            <SangeuiPost/>
          </AddPostContext.Provider>
          );
      case 2:
        return (
          <AddPostContext.Provider value = {ImgData}>
            <HaeuiPost/>
          </AddPostContext.Provider>
          );
      case 3:
        return <SangeuiPost/>;
      case 4:
        return <HaeuiPost/>;
      case 5:
        return <HaeuiPost/>;
      case 6:
        return <HaeuiPost/>;
      default:
        return <SangeuiPost/>;
    }
  };

  
  return (
    <View style={{paddingHorizontal:16, backgroundColor: '#Fcfcfc'}}>
      <View style={{flexDirection: 'row', alignItems:'center',justifyContent:'space-between',borderColor:'#dfdfdf', borderBottomWidth:1,paddingVertical:4}}>
        < MIcon.Button name="arrow-back-ios" size={24} color={'#99D1E9'} backgroundColor={'#fcfcfc'}
          style={{alignSelf:'flex-start',marginVertical:-3, marginRight:-13 }}
          onPress={()=> navigation.navigate("AddPostScreen")}
          >
        </MIcon.Button>
        <Text style={styles.subtitle}>착용샷</Text>
        <MIcon.Button name="arrow-forward-ios" size={24} color={'#99D1E9'} backgroundColor={'#fcfcfc'}
          style={{alignSelf:'flex-end',marginVertical:-3, marginRight:-13 }}
          onPress={()=> navigation.navigate("AddPostEdit", {ImageURI: ImageURL, selImgDataArr: selImgData})}>
        </MIcon.Button> 
      </View>

      <TouchableOpacity onPress={() => {handleGallery();}} 
       style={styles.imageBox}>
          {indicator 
          ? <Image style={{height:'100%', width:'100%', resizeMode: 'contain'}} source = {{uri: ImageURL}} />
          : <Image source={mainImage}/>}

      </TouchableOpacity>

      <View>
      <ScrollView horizontal style={{borderColor:'#dfdfdf', borderTopWidth:1,borderBottomWidth:1}}>
      {tabs.map((tabs, index) => {
        return(
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="#DDDDDD"
            selectedBackgroundColor="pink"
            style={{paddingHorizontal:20,paddingVertical:5,marginHorizontal:8,marginVertical:12,borderRadius: 5,
              backgroundColor: '#ffffff',elevation: 5,shadowOffset: {width: 2, height: 4},}}
            key = {index}
            onPress={()=>{setPageNo(tabs.tabNo)}
            }>
            <Text style={{fontSize:14}} key={index}>{tabs.tabLabel}</Text>
          </TouchableHighlight>
        )
      })}
      </ScrollView>
      </View>
      
      <View >
      {renderSwitch(pageNo)}
      </View>

    </View>
  );    
}


export default GalleryPostAdd1;

const styles = StyleSheet.create({
  subtitle: {
    fontFamily: 'NanumSquareR',
    fontSize: 14,
    color:'#707070'
  },
  imageBox: {
    width:'100%',
    height: width-32,
    borderTopColor: '#dfdfdf',
    borderBottomColor: '#dfdfdf',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    justifyContent:'center',
    alignItems:'center'
  },
})