import React from 'react';
import { StyleSheet, View, Text, TextInput, Alert, Image, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const snapPoints = [330, 0]

const editClothes4 = ({ route, navigation }) => {
  const backAction = () => {
    navigation.navigate("Closet");
  }

  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
  })

  const imageURI = route.params.imageURI;

  const clothesData1 = route.params.dataSet1;
  const clothesData2 = route.params.dataSet2;

  const Category = () => {
    if (clothesData1.top) return ("상의")
    else if (clothesData1.bottom) return ("하의")
    else if (clothesData1.outer) return ("아우터")
    else if (clothesData1.shoes) return ("신발")
    else if (clothesData1.hat) return ("모자")
    else if (clothesData1.acc) return ("액세서리")
  }

  const Style = () => {
    const mini=[]
    if (clothesData2.st_casual) mini.push("캐주얼  ")
    if (clothesData2.st_dandy) mini.push("댄디  ")
    if (clothesData2.st_street) mini.push("스트릿  ")
    if (clothesData2.st_hiphop) mini.push("힙합  ")
    return mini
  }

  const OpenRange = () => {
    if (clothesData1.forAll) return ("전체공개")
    else if (clothesData1.forFriends) return ("친구공개")
    else if (clothesData1.forMe) return ("나만보기")
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
        <Entypo
          name="cross"
          color="#99d1e9"
          size={34}
          onPress={() => navigation.navigate("Closet")}
        />
      </TouchableOpacity>

        <Image style = {{height: 260, width: 260 ,resizeMode: 'contain'}} source= {{uri: imageURI}} />
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
            onPress={() => navigation.navigate('editClothes3')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.dottedBox}>
        <Text style={styles.TextBig}>
          [<Category/>] {clothesData2.name}
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
        <View style= {clothesData1.spring ? styles.ShortButtonT : styles.ShortButtonF}>
          <Text style={styles.TextBasic}>봄</Text>
        </View>
        <View style= {clothesData1.summer ? styles.ShortButtonT : styles.ShortButtonF}>
          <Text style={styles.TextBasic}>여름</Text>
        </View>
        <View style= {clothesData1.fall ? styles.ShortButtonT : styles.ShortButtonF}>
          <Text style={styles.TextBasic}>가을</Text>
        </View>
        <View style= {clothesData1.winter ? styles.ShortButtonT : styles.ShortButtonF}>
          <Text style={styles.TextBasic}>겨울</Text>
        </View>
      </View>

      <View style={styles.infoBox}>
          <View style={styles.infoInner}>
            <Text style={styles.TextBold}>브랜드</Text>
            <Text style={[styles.TextBasic, {width: 230}]}>{clothesData2.brand}</Text>
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
          <View style={[styles.colors, {backgroundColor: clothesData1.color1}]}/>
          <View style={[styles.colors, {backgroundColor: clothesData1.color2}]}/>
          <View style={[styles.colors, {backgroundColor: clothesData1.color3}]}/>
        </View>
        <View style={styles.infoInner}>
          <Text style={styles.TextBold}>스타일</Text>
          <Text style={styles.TextBasic}><Style/></Text>
        </View>
        <View style={styles.infoInner}>
          <Text style={styles.TextBold}>구매가격</Text>
          <Text style={styles.TextBasic}>{clothesData2.price} 원</Text>
        </View>
        <View style={[styles.infoInner, {marginBottom: 0}]}>
          <Text style={styles.TextBold}>공개</Text>
          <Text style={styles.TextBasic}><OpenRange/></Text>
        </View>
      </View>

      <View style={[styles.infoBox, {marginBottom: 10,}]}>
          <View style={styles.infoInner}>
            <Text style={styles.TextBold}>메모</Text>
            <Text style={[styles.TextBasic, {width: 230}]}>{clothesData2.memo}</Text>
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

export default editClothes4;