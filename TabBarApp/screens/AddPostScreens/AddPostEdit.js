import React from 'react';
import { Text, FlatList, Image, View, Dimensions, TouchableOpacity, Pressable,TouchableHighlight} from 'react-native';
import { ScrollView, TapGestureHandler } from 'react-native-gesture-handler';

const initialLayout = { width: Dimensions.get('window').width };
var { height, width } = Dimensions.get('screen');




export default function AddPostEdit({ /*route,*/ navigation }) {
//   const { image } = route.params;
//   const imageURI = "data:" + image.mime + ";base64," + image.data; 

  
  return (
    <View style={{paddingHorizontal:16, backgroundColor: '#Fcfcfc'}}>
      <View style={{alignItems: "center",borderColor:'#dfdfdf', borderBottomWidth:1,paddingVertical:10}}>
          <Text style={{fontSize:14, color:'#707070'}}>글 작성</Text>
      </View>
      <View style={{ width:'100%', height: width-55,backgroundColor: 'black',justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:14, color:'#707070'}}>글 작성</Text>
      </View>
      <View>

      </View>
    </View>
  );    
}
