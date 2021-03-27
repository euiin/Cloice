import React from 'react';
import { Text, FlatList, Image, View, Dimensions, 
  TouchableOpacity, Pressable,TouchableHighlight,StyleSheet} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ScrollView, TapGestureHandler } from 'react-native-gesture-handler';
import { DragResizeBlock,} from 'react-native-drag-resize-elements';

const initialLayout = { width: Dimensions.get('window').width };
var { height, width } = Dimensions.get('screen');

export default function Post() {


  
  return (
    <View style={{paddingHorizontal:16, backgroundColor: '#Fcfcfc'}}>
      <View style={{alignItems: "center",borderColor:'#dfdfdf', borderBottomWidth:1,paddingVertical:10}}>
          <Text style={{fontSize:14, color:'#707070'}}>착용샷</Text>
      </View>
      <View style={{ width:'100%', height: width-55,backgroundColor: 'black',justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:14, color:'#707070'}}>착용샷</Text>
      </View>
      <ScrollView horizontal>

      </ScrollView>
    </View>
  );    
}

/*
      <View style={{ width:'100%', height: width-55,backgroundColor: 'black',}}>
        {selImgData.map((selImgData, index) => {
          return(
            <DragResizeBlock //isDisabled={true} //onPress ={ () => {setSelImgData([...selImgData.slice(0, index), ...selImgData.slice(index + 1) ]) }}>
             >
              <Image source={selImgData.src} key={index} style={{width: '100%', height: '100%'}}/>
            </DragResizeBlock> 
          )
        })}
      </View>

*/