import React from 'react';
import { Text,StyleSheet, FlatList, Image, View, Dimensions, TouchableOpacity, BackHandler} from 'react-native';
import { ScrollView, TapGestureHandler } from 'react-native-gesture-handler';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialLayout = { width: Dimensions.get('window').width };
var { height, width } = Dimensions.get('screen');

const MyProfileFeedDetail = ({ route }) => {
  const { item } = route.params;
  const renderSwipper = () => {
      return(
        <SwiperFlatList showPagination paginationActiveColor = "#99D1E9" paginationDefaultColor = "#dfdfdf">
          <View style={[styles.child]}>
            <Image style={{height:'100%', width:'100%', resizeMode: 'contain'}} source={{uri: item.captureImageURI}}/>
          </View>
          <View style={[styles.child]}>
            <Image style={{height:'100%', width:'100%', resizeMode: 'contain'}} source={{uri: item.ImageURI}}/>
          </View>
        </SwiperFlatList>
      ); 
  }
  
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',alignItems: 'center', marginVertical: 10,}}>
        <TouchableOpacity onPress={()=>{}}>
        <Image source={require('../../login/profileImage/ProfileImage.jpg')} 
        style={{width:52,height:52, borderRadius:26, marginRight:10, borderColor:'#dfdfdf', borderWidth: 1}}/>
        </TouchableOpacity>
        <Text style={styles.text1}>{item.NICK}님의 코디</Text>
      </View>
      <View style={styles.box}>
        {renderSwipper()}
      </View>
      <View style= {styles.likebox}>
        <AntDesign 
          name="heart"
          color="red"
          size={18}
        />
      </View>
      <View style = {{marginVertical: 5}}>
        <Text style ={styles.maintext}>{item.POST_TEXT}</Text>
      </View>
    </View>
  );    
}

export default MyProfileFeedDetail

  


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
})
