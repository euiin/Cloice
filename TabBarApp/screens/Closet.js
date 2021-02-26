import React from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import EIcon from 'react-native-vector-icons/Entypo';


const Closet = ({navigation}) => {
    return (
      //header Tab
      <View style={{paddingLeft:16, paddingRight:16, backgroundColor: '#FCFCFC'}}>
        <ScrollView>
          <View style={{flexDirection:'row',alignItems: 'center',paddingTop:11}}>
            <TouchableOpacity onPress={()=>{ navigation.navigate("MyProfile")}}>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} 
            style={{width:80,height:80, borderRadius:52, marginRight:10}}/>
            </TouchableOpacity> 
            <Text style={{fontSize:20}}>민희님의 옷장</Text>                       
          </View>  
          <View style={[styles.closets]}>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} onPress={()=>{}}>
              <Text style={{fontSize:20}}>상의 <Text style={{fontSize:14, color:'#707070'}}>10 </Text> </Text>
              <EIcon name='plus' 
              style={{padding:10, fontSize: 28 }}
              />
            </TouchableOpacity>
            <ScrollView horizontal={true}>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            </ScrollView>
          </View>
          <View style={[styles.closets]}>
          <Text style={{fontSize:20}}>하의 <Text style={{fontSize:14, color:'#707070'}}>10 </Text> </Text>
            <ScrollView horizontal={true}>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            </ScrollView>
          </View>
          <View style={[styles.closets]}>
          <Text style={{fontSize:20}}>아우터 <Text style={{fontSize:14, color:'#707070'}}>10 </Text> </Text>
            <ScrollView horizontal={true}>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            </ScrollView>
          </View>
          <View style={[styles.closets]}>
          <Text style={{fontSize:20}}>신발 <Text style={{fontSize:14, color:'#707070'}}>10 </Text> </Text>
            <ScrollView horizontal={true}>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            </ScrollView>
          </View>
          <View style={[styles.closets]}>
          <Text style={{fontSize:20}}>모자 <Text style={{fontSize:14, color:'#707070'}}>10 </Text> </Text>
            <ScrollView horizontal={true}>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            </ScrollView>
          </View>
          <View style={[styles.closets],{ paddingBottom:24}}>
          <Text style={{fontSize:20}}>액세서리 <Text style={{fontSize:14, color:'#707070'}}>10 </Text> </Text> 
            <ScrollView horizontal={true}>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} style={[styles.storyimage]}/>
            </ScrollView>
          </View>      
        </ScrollView>
        <Image
                    source={require('../assets/pngs/finallogo.png')}
                    style={styles.logo}
                />
      </View>
      //bottom Tab
      );
  };
export default Closet;
  
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    closets:{
      paddingTop:11, 
      paddingBottom:9, 
      borderColor:'#dfdfdf', 
      borderBottomWidth:0.5
    },
    storyimage: {
      width:90, 
      height:90, 
      borderRadius:52, 
      marginHorizontal:7
  },
  });