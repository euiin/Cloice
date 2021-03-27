import React from 'react';
import { Text,StyleSheet, FlatList, Image, View, Dimensions, TouchableOpacity, Pressable,TouchableHighlight} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ScrollView, TapGestureHandler } from 'react-native-gesture-handler';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import AntDesign from 'react-native-vector-icons/AntDesign';

const initialLayout = { width: Dimensions.get('window').width };
var { height, width } = Dimensions.get('screen');

const Post = ({navigation, route}) => {
  const { inputText } = route.params
  const { selImgDataArr } = route.params
  const { ImageURI } = route.params;
  
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',alignItems: 'center', marginVertical: 10,}}>
        <TouchableOpacity onPress={()=>{ navigation.navigate("MyProfile")}}>
        <Image source={require('../../login/profileImage/ProfileImage.jpg')} 
        style={{width:52,height:52, borderRadius:26, marginRight:10, borderColor:'#dfdfdf', borderWidth: 1}}/>
        </TouchableOpacity>
        <Text style={styles.text1}>민희님의 코디</Text>
      </View>
      <View style={styles.box}>
        <SwiperFlatList /*autoplay autoplayDelay={2} autoplayLoop*/ index={2} showPagination>
        <View style={[styles.child]}>
          <Image style={{height:'100%', width:'100%', resizeMode: 'contain'}} source={{uri: ImageURI}}/>
        </View>
        <View style={[styles.child, { backgroundColor: 'thistle' }]}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
          <Text style={styles.text}>3</Text>
        </View>
        <View style={[styles.child, { backgroundColor: 'teal' }]}>
          <Text style={styles.text}>4</Text>
        </View>
      </SwiperFlatList>
      </View>
      <ScrollView horizontal={true} style={{width: '100%'}}>
        
        {selImgDataArr.map((selImgDataArr, index) => {
          return(
          <View style={styles.minibox}>
            <Image source={selImgDataArr.src} key={index} style={{width: '100%', height: '100%'}}/>
          </View>
          )
        })}
      </ScrollView>
      <View style= {styles.likebox}>
        <AntDesign 
          name="heart"
          color="red"
          size={18}
        />
      </View>
      <View style = {{marginVertical: 5}}>
        <Text style ={styles.maintext}>{inputText}</Text>
      </View>
    </View>
  );    
}

export default Post

  


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#Fcfcfc',
    // height: '100%'
  },
  header: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width:'100%', 
    height: width-32,
    backgroundColor: '#fff',
    justifyContent:'center', 
    alignItems:'center',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  minibox: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    borderColor: '#dfdfdf',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likebox: {
    marginVertical: 10,
    width: '100%',
    // backgroundColor: 'yellow'
  },
  subtitle: {
    fontFamily: 'NanumSquareR',
    fontSize: 14,
    color:'#707070'
  },
  maintext: {
    fontFamily: 'NanumSquareR',
    fontSize: 12,
  },
  text1: {
    fontFamily: 'NanumSquareR',
    fontSize: 14,
  },
  child: { width:width-32, justifyContent: 'center' },
  text: { fontSize: width * 0.5, textAlign: 'center' },
})
