import React from 'react';
import { StyleSheet, View, Text, TextInput, Alert, Image, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const editClothes3 = ({ route }) => {
  const { imageURI } = route.params;

  const [data, setData] = React.useState({
      name: '',
      style: [],
      brand: '',
      price: '',
      memo: '',
  })

  const updateName = (val) => {
    setData({
        ...data,
        name: val
    });
  }
  const updateStyle = (val) => {
    setData({
        ...data,
        style: [val]
    });
  }
  const updateBrand = (val) => {
    setData({
        ...data,
        brand: val
    });
  }
  const updatePrice = (val) => {
    setData({
        ...data,
        price: val
    });
  }
  const updateMemo = (val) => {
    setData({
        ...data,
        memo: val
    });
  }

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
          <View style={styles.emptyCircle} />
          <View style={styles.emptyCircle} />
          <View style={styles.Circle} />
          
        </View>
        <View style={{   //글자들
          flexDirection: 'row',
          width: '87%',
          marginTop: 8,
          justifyContent: 'space-between'
        }}>
          <Text style={styles.Text}>배경제거</Text>
          <Text style={styles.Text}>정보입력</Text>
          <Text style={styles.nowText}>추가입력</Text>
        </View>

        <View style={{
          height: 180,
          width: '100%',
          backgroundColor: 'lightgrey',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
          <Image style = {{height: '100%', width: '100%' ,resizeMode: 'contain'}} source= {{uri: imageURI}} />
        </View>
        
        <View style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          }}>
          <View style={styles.subtitle}>
            <Text style={styles.subtext}>이름</Text>
          </View>

          <TextInput
            style={styles.inputText}
            placeholder='옷 이름을 입력하세요'
            placeholderTextColor='#dfdfdf'
            onChangeText={(val)=>updateName(val)}
          />
        </View>

        <View style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          }}>
          <View style={styles.subtitle}>
            <Text style={styles.subtext}>스타일</Text>
          </View>

          <TouchableOpacity style={{
            position: 'absolute',
            left: 80,
            width: 25,
            height: 25,
            }}>
            <Entypo
            name="plus"
            color="black"
            size={25}
            />
          </TouchableOpacity>
            
          
        </View>
        
        <View style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          }}>
          <View style={styles.subtitle}>
            <Text style={styles.subtext}>브랜드</Text>
          </View>

          <TextInput
            style={styles.inputText}
            placeholder='브랜드를 입력하세요'
            placeholderTextColor='#dfdfdf'
            onChangeText={(val)=>updateBrand(val)}
          />
        </View>

        <View style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          }}>
          <View style={styles.subtitle}>
            <Text style={styles.subtext}>구매가격</Text>
          </View>
          <TextInput
            style={styles.inputText}
            placeholder='구매가격을 입력하세요'
            placeholderTextColor='#dfdfdf'
            onChangeText={(val)=>updatePrice(val)}
          />
        </View>

        <View style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          }}>
          <View style={styles.subtitle}>
            <Text style={styles.subtext}>메모</Text>
          </View>
          <TextInput
            style={styles.inputText}
            placeholder='메모를 입력하세요'
            placeholderTextColor='#dfdfdf'
            onChangeText={(val)=>updateMemo(val)}
          />
        </View>
        
        <View style={{
          width: '100%',
          alignItems: 'center',
          position: 'absolute',  //버튼 위치는 아래에고정
          bottom: 20,
        }}>
          <TouchableOpacity
            style= {styles.NextButtonT}
            // onPress={()=>{ navigation.navigate("colorExample")}}
            >
            <Text style={styles.NextButtonText}>완료</Text>
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
      inputText: {
        fontFamily: 'NanumSquareR',
        fontSize: 14,
        position: 'absolute',
        left: 80,
      },
});

export default editClothes3;