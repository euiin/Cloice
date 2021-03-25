import React from 'react';
import { Text, FlatList, Image, View, Dimensions, TouchableOpacity, Pressable,TouchableHighlight} from 'react-native';
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
    </View>
  );    
}
