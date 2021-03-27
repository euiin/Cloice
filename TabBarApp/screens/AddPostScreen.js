import React, { createContext, useRef } from 'react';
import { Text, StyleSheet, FlatList, Image, View, Dimensions, TouchableOpacity, Pressable,TouchableHighlight} from 'react-native';
import { ScrollView, TapGestureHandler } from 'react-native-gesture-handler';
import { DragResizeBlock,} from 'react-native-drag-resize-elements';
import ViewShot from "react-native-view-shot";


import SangeuiPost from './AddPostScreens/SangeuiPost';
import HaeuiPost from './AddPostScreens/HaeuiPost';
import {AddPostContext} from './AddPostScreens/AddPostContext';

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
export default function AddPostScreen({navigation}) {
  //const captureRef = useRef();

  const [pageNo, setPageNo] = React.useState(1);
  const [selImgData,setSelImgData] = React.useState([]);
  const ImgData = {
    selImgData: selImgData,
    setSelImgData: setSelImgData
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
    <View style={{paddingHorizontal:16, backgroundColor: '#fcfcfc'}}>
      <View style={{flexDirection: 'row', alignItems:'center',justifyContent:'space-between',borderColor:'#dfdfdf', borderBottomWidth:1,paddingVertical:4}}>
          <MIcon.Button name="arrow-back-ios" size={24} color={'#99D1E9'} backgroundColor={'#fcfcfc'}
          style={{alignSelf:'flex-start',marginVertical:-3, marginRight:-13 }}
          onPress={()=> navigation.navigate("Home")}>
          </MIcon.Button>
          <Text style={styles.subtitle}>룩북 만들기</Text>
          <MIcon.Button name="arrow-forward-ios" size={24} color={'#99D1E9'} backgroundColor={'#fcfcfc'}
          style={{alignSelf:'flex-end',marginVertical:-3, marginRight:-13 }}
          onPress={()=> navigation.navigate("GalleryPostAdd1", {
            selImgDataArr: selImgData}
          )}>
          </MIcon.Button>
      </View>

      <View style={styles.imageBox}>
        {selImgData.map((selImgData, index) => {
          return(
            <DragResizeBlock //isDisabled={true} //onPress ={ () => {setSelImgData([...selImgData.slice(0, index), ...selImgData.slice(index + 1) ]) }}>
             >
              <Image source={selImgData.src} key={index} style={{width: '100%', height: '100%'}}/>
            </DragResizeBlock> 
          )
        })}
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
      <View>
      {renderSwitch(pageNo)}
      </View>
    </View>
  );    
}

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