import React from 'react';
import { Text,StyleSheet, FlatList, Image, View, Dimensions, TouchableOpacity, Pressable,TouchableHighlight} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ScrollView, TapGestureHandler } from 'react-native-gesture-handler';
import { DragResizeBlock,} from 'react-native-drag-resize-elements';

const initialLayout = { width: Dimensions.get('window').width };
var { height, width } = Dimensions.get('screen');



const Post = ({navigation, route}) => {
  const inputText = route.params
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>hello</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontSize:14, color:'#707070'}}>착용샷</Text>
      </View>
      <ScrollView horizontal={true} style={{width: '100%'}}>
        <View style={styles.minibox}>
          <Text>플랫리스트??</Text>
        </View>
        <View style={styles.minibox}>

        </View>
        <View style={styles.minibox}>

        </View>
        <View style={styles.minibox}>

        </View>
        <View style={styles.minibox}>

        </View>
        <View style={styles.minibox}>

        </View>
      </ScrollView>
      <View>
        <Text>좋아요?</Text>
      </View>
      <View style = {{marginVertical: 10}}>
        <Text style ={styles.maintext}>여기 글쓰기</Text>
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
  subtitle: {
    fontFamily: 'NanumSquareR',
    fontSize: 14,
    color:'#707070'
  },
  maintext: {
    fontFamily: 'NanumSquareR',
    fontSize: 10,
  },
})