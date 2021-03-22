import React from 'react';
import { Text, FlatList, Image, View, Dimensions, TouchableOpacity, Pressable,TouchableHighlight} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ScrollView, TapGestureHandler } from 'react-native-gesture-handler';
import { DragResizeBlock,} from 'react-native-drag-resize-elements';

import ImagePicker from 'react-native-image-crop-picker';


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
  
  
export default function GalleryPost({navigation}) {
  const handleGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      includeBase64: true,
    }).then(image => {
      // console.log(image);
      navigation.navigate("GalleryPost2", {image: image}
      );
    });
  }

  
  return (
    <View style={{paddingHorizontal:16, backgroundColor: '#Fcfcfc'}}>
      <View style={{alignItems: "center",borderColor:'#dfdfdf', borderBottomWidth:1,paddingVertical:10}}>
          <Text style={{fontSize:14, color:'#707070'}}>룩북 만들기</Text>
      </View>
      <TouchableOpacity onPress={() => {handleGallery();}} 
       style={{ width:'100%', height: width-55,backgroundColor: 'black',justifyContent:'center', alignItems:'center'}}
        >
        <Image source={require('../../assets/pngs/addGalleryPost.png')}
        />
      </TouchableOpacity>
    </View>
  );    
}

