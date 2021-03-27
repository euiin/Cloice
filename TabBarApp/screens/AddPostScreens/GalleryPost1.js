import React from 'react';
import { Text, FlatList, Image, View, Dimensions, TouchableOpacity, Pressable,TouchableHighlight} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ScrollView, TapGestureHandler } from 'react-native-gesture-handler';
import { DragResizeBlock,} from 'react-native-drag-resize-elements';

import SangeuiPost from './SangeuiPost';
import HaeuiPost from './HaeuiPost';
import {AddPostContext} from './AddPostContext';

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
  
  
export default function GalleryPost1({navigation, route }) {
  const [pageNo, setPageNo] = React.useState(1);

  const { selImgDataArr } = route.params
  const [selImgData, setSelImgData] = React.useState(selImgDataArr);
  const ImgData = {
    selImgData: selImgData,
    setSelImgData: setSelImgData
  }

  const { image } = route.params;
  const imageURI = "data:" + image.mime + ";base64," + image.data; 

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
        <Text style={{fontSize:14, color:'#707070'}}>착용샷</Text>
        <MIcon.Button name="arrow-forward-ios" size={24} color={'#99D1E9'} backgroundColor={'#fcfcfc'}
          style={{alignSelf:'flex-end',marginVertical:-3, marginRight:-13 }}
          onPress={()=> navigation.navigate("AddPostEdit")}>
        </MIcon.Button>
      </View>

      <View style={{ width:'100%', height: width-55,backgroundColor: 'black',justifyContent:'center', alignItems:'center'}}>
        <Image style={{height:'100%', width:'100%', resizeMode: 'contain'}} source = {{uri: imageURI}} />
      </View>

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
