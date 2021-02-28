import React from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

var image=[
  require('../android/app/src/assets/fonts/김민희.jpg'),
  require('../android/app/src/assets/fonts/김민희.jpg'),
  require('../android/app/src/assets/fonts/김민희.jpg'),
  require('../android/app/src/assets/fonts/김민희.jpg'),
  require('../android/app/src/assets/fonts/김민희.jpg'),
  require('../android/app/src/assets/fonts/김민희.jpg'),
  require('../android/app/src/assets/fonts/김민희.jpg'),
  require('../android/app/src/assets/fonts/김민희.jpg'),
  require('../android/app/src/assets/fonts/김민희.jpg'),
  require('../android/app/src/assets/fonts/김민희.jpg'),
  require('../android/app/src/assets/fonts/김민희.jpg'),
  require('../android/app/src/assets/fonts/김민희.jpg'),
  require('../android/app/src/assets/fonts/김민희.jpg'),
  require('../android/app/src/assets/fonts/김민희.jpg'),
  require('../android/app/src/assets/fonts/김민희.jpg'),
  require('../android/app/src/assets/fonts/김민희.jpg'),
  require('../android/app/src/assets/fonts/김민희.jpg')
]

var { height, width } = Dimensions.get('screen');

const ClosetSangeui = ({ navigation }) =>{

  return(
    <View style={{paddingLeft:16, paddingRight:16, backgroundColor: '#fcfcfc'}}>
      <ScrollView>
        <View style={{flexDirection:'row',alignItems: 'center',paddingTop:11}}>
          <TouchableOpacity onPress={()=>{ navigation.navigate("MyProfile")}}>
          <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} 
          style={{width:80,height:80, borderRadius:52, marginRight:10}}/>
          </TouchableOpacity> 
          <Text style={{fontSize:20}}>민희님의 상의 <Text style={{fontSize:14, color:'#707070'}}>10 </Text> </Text>                     
        </View>
        <View style={[{ width: (width-32) / 3 }, { height: (width-32) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
          <Image style={{ flex: 1, alignSelf:'stretch', width: undefined, height: undefined,}}
            source={image}>
          </Image>
        </View>
      </ScrollView>
    </View>

  );
}

export default ClosetSangeui;