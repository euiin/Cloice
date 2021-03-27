import React from 'react';
import { StyleSheet, View, Text, TextInput, Alert, Image, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ClothInfo = ({ route, navigation }) => {
  const { item } = route.params;

  const Category = () => {
    if (item.top) return ("상의");
    else if (item.bottom) return ("하의");
    else if (item.outer) return ("아우터");
    else if (item.shoes) return ("신발");
    else if (item.hat) return ("모자");
    else if (item.acc) return ("액세서리");
  }

  const Style = () => {
    const mini=[]
    if (item.st_casual) mini.push("캐주얼  ");
    if (item.st_dandy) mini.push("댄디  ");
    if (item.st_street) mini.push("스트릿  ");
    if (item.st_hiphop) mini.push("힙합  ");
    return mini
  }

  return (
  <>
  <ScrollView>
    <View style = {styles.container}>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
      }}>
      <TouchableOpacity style={{
        width: 40,
        // backgroundColor: 'red',  나중에 얘네 고정되는걸로 고치기
        height: 40,
        position: 'absolute',
        left: 0,
        top: 0,
      }}>
        <Feather
          name="chevron-left"
          color="#99d1e9"
          size={32}
          onPress={() => {}}
        />
      </TouchableOpacity>

        <Image style = {{height: 260, width: 260 ,resizeMode: 'contain'}} source= {{uri: item.file}} />
        <TouchableOpacity style={{
          // backgroundColor:'grey',
          width: 40,
          height: 40,
          alignItems: 'flex-end',
          justifyContent: 'center',
          position: 'absolute',
          right: 0,
          top: 0,
        }}>
          <Entypo
            name="dots-three-vertical"
            color="#99d1e9"
            size={24}
            onPress={() => {}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.dottedBox}>
        <Text style={styles.TextBig}>
          {Category()} {item.clothName}
        </Text>
      </View>
      
      <View style={{
        justifyContent: 'center',
        marginTop: 10,
        }}>
        <Text style={styles.TextBasic}>상세정보</Text>
      </View>

      <View style={styles.line}/>

      <View style={{
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        width: '100%'
        }}>
        <View style= {item.spring ? styles.ShortButtonT : styles.ShortButtonF}>
          <Text style={styles.TextBasic}>봄</Text>
        </View>
        <View style= {item.summer ? styles.ShortButtonT : styles.ShortButtonF}>
          <Text style={styles.TextBasic}>여름</Text>
        </View>
        <View style= {item.fall ? styles.ShortButtonT : styles.ShortButtonF}>
          <Text style={styles.TextBasic}>가을</Text>
        </View>
        <View style= {item.winter ? styles.ShortButtonT : styles.ShortButtonF}>
          <Text style={styles.TextBasic}>겨울</Text>
        </View>
      </View>

      <View style={styles.infoBox}>
          <View style={styles.infoInner}>
            <Text style={styles.TextBold}>브랜드</Text>
            <Text style={[styles.TextBasic, {width: 230}]}>{item.brand}</Text>
            <TouchableOpacity style={{
              width: 20,
              height: 20,
            }}>
            <MaterialCommunityIcons
              name="pencil"
              color= '#b5b5b5'
              size={24}
            />
            </TouchableOpacity>
          </View>
        
        <View style={styles.infoInner}>
          <Text style={styles.TextBold}>색상</Text>
          <View style={[styles.colors, {backgroundColor: item.color1}]}/>
          <View style={[styles.colors, {backgroundColor: item.color2}]}/>
          <View style={[styles.colors, {backgroundColor: item.color3}]}/>
        </View>
        <View style={styles.infoInner}>
          <Text style={styles.TextBold}>스타일</Text>
          <Text style={styles.TextBasic}>{Style()}</Text>
        </View>
        <View style={styles.infoInner}>
          <Text style={styles.TextBold}>구매가격</Text>
          <Text style={styles.TextBasic}>{item.price} 원</Text>
        </View>
      </View>

      <View style={[styles.infoBox, {marginBottom: 10,}]}>
          <View style={styles.infoInner}>
            <Text style={styles.TextBold}>메모</Text>
            <Text style={[styles.TextBasic, {width: 230}]}>{item.memo}</Text>
            <TouchableOpacity style={{
              width: 20,
              height: 20,
            }}>
            <MaterialCommunityIcons
              name="pencil"
              color= '#b5b5b5'
              size={24}
            />
            </TouchableOpacity>
          </View>
      </View>
      
    </View>
    </ScrollView>
    </>
    )
  }
  
  const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        height: '100%',
        backgroundColor: '#fcfcfc'
      },
      dottedBox:{
        height: 36,
        width: '100%',
        borderColor: '#99d1e9',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 2,
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 10,
      },
      TextBig: {
        fontFamily: 'NanumSquareR',
        fontSize: 20,
      },
      TextBasic: {
        fontFamily: 'NanumSquareR',
        fontSize: 14,
      },
      TextBold: {
        fontSize: 14,
        width: 80,
        fontFamily: 'NanumSquareR',
        textShadowColor: 'black',
        textShadowRadius: 0.7,
      },
      line: {
        marginTop: 5,
        width: '100%',
        borderBottomColor: '#DFDFDFb0',
        borderBottomWidth: 0.7,
      },
      ShortButtonT: {
        width: '20%', //이거 퍼센트로 해야하나?
        height: 28,
        backgroundColor: '#dfdfdf',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
  
        elevation: 3,
      },
      ShortButtonF: {
        width: '20%', //이거 퍼센트로 해야하나?
        height: 28,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
  
        elevation: 3,
      },
      infoBox: {
        width: '100%',
        padding: 15,
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      infoInner: {
        flexDirection:'row', width: '100%', alignItems:'center', marginBottom: 7,
      },
      colors: {
        width: 22,
        height: 22,
        borderRadius: 11,
        borderColor: "#fff",
        borderWidth: 1.5,
        marginRight: 3,
      },

});

export default ClothInfo;