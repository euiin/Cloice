import React from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, ScrollView,FlatList } from 'react-native';
import SangeuiStoryData from './ClosetScreens/SangeuiStoryData'
import EIcon from 'react-native-vector-icons/Entypo';
import addClothes from './addClothes';
import { FloatingAction } from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/Ionicons';


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


function Closet ({navigation}) {
  const renderItem = ({ item }) => (
      <View>
        <TouchableOpacity>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={item.src} style={[styles.storyimage]} />
        </View>
        </TouchableOpacity>   
      </View>
    );
    return (
      //header Tab
      <View style={{paddingLeft:16, paddingRight:16, backgroundColor: '#FCFCFC'}}>
        <ScrollView>
          <View style={{flexDirection:'row',alignItems: 'center',paddingTop:15}}>
            <TouchableOpacity onPress={()=>{ navigation.navigate("MyProfile")}}>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')} 
            style={{width:80,height:80, borderRadius:52, marginRight:10}}/>
            </TouchableOpacity> 
            <Text style={{fontSize:20}}>민희님의 옷장</Text>                       
          </View>      
          <View style={[styles.closets], {backgroundColor: '#FFFFFF'}}>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} 
              onPress={() => navigation.navigate("SangeuiFeed")}>
              <Text style={{fontSize:20}}>상의 <Text style={{fontSize:14, color:'#707070'}}>10 </Text> </Text>
              <EIcon name='plus' 
              style={{padding:10, fontSize: 28 }}
              />
            </TouchableOpacity>
            <FlatList
              horizontal={true} 
              showsHorizontalScrollIndicator={false} 
              data={SangeuiStoryData} 
              renderItem={renderItem} 
              keyExtractor={item => item.id} 
              // numColumns={3}   horizontal 없을 때 쓰자!! ex) 피드                      
            />
          </View>

          <View style={[styles.closets]}>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} 
              onPress={() => {}}>
              <Text style={{fontSize:20}}>하의 <Text style={{fontSize:14, color:'#707070'}}>10 </Text> </Text>
              <EIcon name='plus' 
              style={{padding:10, fontSize: 28 }}
              />
            </TouchableOpacity>
            <FlatList
              horizontal={true} 
              showsHorizontalScrollIndicator={false} 
              data={SangeuiStoryData}
              renderItem={renderItem}
              keyExtractor={item => item.id} 
              // numColumns={3}   horizontal 없을 때 쓰자!! ex) 피드                      
            />
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
        <View style={styles.fixed}>
          <TouchableOpacity onPress={() => {navigation.navigate('addClothes')}}>
            <Image
                source={require('../assets/pngs/addClothes.png')}
                style={styles.addbutton}
            />
          </TouchableOpacity>
          
        </View>
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
      marginHorizontal:7,
      marginTop:8,
    },
    addbutton: {
      width: 64,
      height: 64,
      resizeMode: 'contain',  //그림자 넣기
      // marginBottom: 500,
    },
    fixed: {
      position: 'absolute',
      // top: 100,
      // left: 0,
      right: 16,
      bottom: 16, //하단탭 기준 16 offset 자동으로 됨.
    },
    

  });