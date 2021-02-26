import React from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const Closet_sangeui = ([navigation]) =>{

  return(
    <View style={{paddingLeft:16, paddingRight:16, backgroundColor: '#FCFCFC'}}>
      <ScrollView>
        <View style={{flexDirection:'row',alignItems: 'center',paddingTop:11}}>
          <TouchableOpacity onPress={()=>{ navigation.navigate("MyProfile")}}>
          <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} 
          style={{width:80,height:80, borderRadius:52, marginRight:10}}/>
          </TouchableOpacity> 
          <Text style={{fontSize:20}}>민희님의 상의 <Text style={{fontSize:14, color:'#707070'}}>10 </Text> </Text>                     
        </View>
      </ScrollView>
    </View>

  );
}

export default Closet_sangeui;