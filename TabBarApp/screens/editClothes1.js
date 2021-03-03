import React from 'react';
import { StyleSheet, View, Text, Alert, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const editClothes1 = ({ route, navigation }) => {
  const { image } = route.params;
  const imageURI = "data:" + image.mime + ";base64," + image.data;

  return (
    <>
        <View style = {styles.container}>
          <Image  //dashed line 고정
            source={require('../assets/pngs/dashedLine.png')}
            style={{
              width: '80%',
              resizeMode: 'contain',
              position: 'absolute',
              top: 30,   //30만큼 띄웠으니까 원들은 margintop 해주기
            }}
          />
          <View style={{   //원 세개
            flexDirection: 'row',
            width: '80%',
            marginTop: 22,
            justifyContent: 'space-between'
          }}>
            <View style={styles.Circle} />
            <View style={styles.emptyCircle} />
            <View style={styles.emptyCircle} />
            
          </View>
          <View style={{   //글자들
            flexDirection: 'row',
            width: '87%',
            marginTop: 8,
            justifyContent: 'space-between'
          }}>
            <Text style={styles.nowText}>배경제거</Text>
            <Text style={styles.Text}>정보입력</Text>
            <Text style={styles.Text}>추가입력</Text>
          </View>

          <View style={{
            height: 180,
            width: '100%',
            backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
            <Image style={{height:'100%', width:'100%', resizeMode: 'contain'}} source = {{uri: imageURI}} />
          </View>
            
          <View style={{
            width: '100%',
            alignItems: 'center',
            position: 'absolute',  //버튼 위치는 아래에고정
            bottom: 20,
          }}>
            <TouchableOpacity
              style= {styles.NextButtonT}
              onPress={()=>{ navigation.navigate("editClothes2", {imageURI: imageURI}) }}
              >
              <Text style={styles.NextButtonText}>다음</Text>
            </TouchableOpacity>
          </View>
  
        </View>
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
      Circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#99d1e9",
        borderColor: "#70707099",
        borderWidth: 1.5,
      },
      emptyCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#fff",
        borderColor: "#70707099",
        borderWidth: 1.5,
      },
      Text: {
        fontFamily: 'NanumSquareR',
        fontSize: 12,
      },
      nowText: {
        fontFamily: 'NanumSquareB',
        fontSize: 12,
      },
      subtitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
      subtext: {
        fontFamily: 'NanumSquareR',
        fontSize: 16,
        marginRight: 5,
      },
      NextButtonT: {
        width: 250, //이거 퍼센트로 해야하나?
        height: 44,
        backgroundColor: '#41b9ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
      },
      NextButtonText: {
        fontFamily: 'NanumSquareR',
        fontSize: 14,
        color: '#fff'
      },
});

export default editClothes1;