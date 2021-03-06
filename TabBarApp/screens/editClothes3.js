import React from 'react';
import { StyleSheet, View, Text, TextInput, Alert, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const snapPoints = [330, 0]

const editClothes3 = ({ route }) => {
  const { imageURI } = route.params;

  const [data, setData] = React.useState({
      name: '',
      brand: '',
      price: '',
      st_casual: false,
      st_dandy: false,
      st_street: false,
      st_hiphop: false,
      memo: '',
  })

  const updateName = (val) => {
    setData({
        ...data,
        name: val
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
  const update_casual = () => {
    setData({
      ...data,
      st_casual: !data.st_casual,
    });
  }
  const update_dandy = () => {
    setData({
      ...data,
      st_dandy: !data.st_dandy,
    });
  }
  const update_street = () => {
    setData({
      ...data,
      st_street: !data.st_street,
    });
  }
  const update_hiphop = () => {
    setData({
      ...data,
      st_hiphop: !data.st_hiphop,
    });
  }
  const reset_style = () => {
    setData({
      ...data,
      st_casual : false,
      st_dandy: false,
      st_street: false,
      st_hiphop: false,
    });
  }
  const st_all = (data.st_casual|data.st_dandy|data.st_street|data.st_hiphop)  //하나라도 set 되어있으면 true
  const updateMemo = (val) => {
    setData({
        ...data,
        memo: val
    });
  }

  sheetRef = React.createRef();
  const fall = new Animated.Value(1);

  const handleUpdateStyle = (style) => {
    setData({
      ...data,
      // style: data.style.concat(style)
  });
  }

  renderContent = () => {

    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 24,
          height: 330,
          width: '100%'
        }}
      >
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.style}>스타일</Text>
          <TouchableOpacity style={{width: 25, height: 25, alignItems:'flex-end',}} onPress={()=>{ sheetRef.current.snapTo(1)}}>
            <AntDesign
            name="close"
            color="#000"
            size={20}
            />
          </TouchableOpacity>
          
        </View>
        
        <View style={styles.line}/>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
        }}>
          <View style={styles.miniCircle} />
          <Text style={styles.substyle}>옷 스타일 선택하기(중복 가능)</Text>
        </View>
        <View style={styles.line}/>

        <View style={[styles.btnStyle1, {paddingTop: 10}]}>
          <TouchableOpacity style={styles.btnStyle2} onPress={update_casual}
          >
            <View style={data.st_casual ? styles.Circle : styles.emptyCircle} />
            <Text style={styles.StyleText}>캐주얼</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnStyle2} onPress={update_dandy}>
            <View style={data.st_dandy ? styles.Circle : styles.emptyCircle} />
            <Text style={styles.StyleText}>댄디</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnStyle1}>
          <TouchableOpacity style={styles.btnStyle2} onPress={update_street}
          >
            <View style={data.st_street ? styles.Circle : styles.emptyCircle} />
            <Text style={styles.StyleText}>스트릿</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnStyle2} onPress={update_hiphop}>
            <View style={data.st_hiphop ? styles.Circle : styles.emptyCircle} />
            <Text style={styles.StyleText}>힙합</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnStyle1}>
          <TouchableOpacity 
            style={{
              width: '45%', 
              height: 40,
              // backgroundColor: 'grey',
              flexDirection: 'row', 
              justifyContent: 'center', 
              alignItems: 'center'}} 
            onPress={reset_style}>
            <AntDesign
              name="reload1"
              color="#000"
              size={20}
            />
            <Text style={styles.StyleText}>스타일 재설정</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ sheetRef.current.snapTo(1)}}
            style={{
              width: '45%', 
              height: 40,
              backgroundColor: '#41b9ff',
              flexDirection: 'row', 
              justifyContent: 'center', 
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Text style={[styles.StyleText, {marginLeft: 0, color: '#fff'}]}>스타일 결정하기</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    )
    };

  const AnimatedView = Animated.View
  const renderShadow = () => {
    const animatedShadowOpacity = Animated.interpolate(fall, {
      inputRange: [0, 1],
      outputRange: [0.5, 0],
    })

    return (
      <AnimatedView
        pointerEvents="none"
        style={[
          styles.shadowContainer,
          {
            opacity: animatedShadowOpacity,
          },
        ]}
      />
    )
  }

  return (
  <>
    <Animated.View style={{backgroundColor: '#000', opacity: Animated.add(0.7, Animated.multiply(fall, 1.0))}}>
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
          // justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          }}>
          <View style={styles.subtitle}>
            <Text style={[styles.subtext, {marginRight: 35}]}>스타일</Text>
          </View>

          {data.st_casual ? 
            <View style={styles.minibutton}>
              <Text style={styles.minitext}>캐주얼</Text>
            </View>
          :
          <></>
          }
          {data.st_dandy ? 
            <View style={styles.minibutton}>
              <Text style={styles.minitext}>댄디</Text>
            </View>
          :
          <></>
          }
          {data.st_street ? 
            <View style={styles.minibutton}>
              <Text style={styles.minitext}>스트릿</Text>
            </View>
          :
          <></>
          }
          {data.st_hiphop ? 
            <View style={styles.minibutton}>
              <Text style={styles.minitext}>힙합</Text>
            </View>
          :
          <></>
          }

          <TouchableOpacity style={{
            // marginLeft: 10,
            width: 25,
            height: 25,
            }}
            onPress={()=>{ sheetRef.current.snapTo(0)}}>
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
            onPress={()=>{navigation.navigate("ExampleStyle") }}
            >
            <Text style={styles.NextButtonText}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>

        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          initialSnap={1}
          callbackNode={fall}
          enabledGestureInteraction={true}
          borderRadius={10}
          // renderHeader={renderHeader}
          renderContent={renderContent}
          enabledContentTapInteraction={false}
        />
        

        {/* {renderShadow()} */}
        
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
      miniCircle: {
        width: 12,
        height: 12,
        borderRadius: 10,
        backgroundColor: "#99d1e9",
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
      shadowContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#000',
      },
      style: {
        fontFamily: 'NanumSquareB',
        fontSize: 20,
      },
      substyle: {
        fontFamily: 'NanumSquareR',
        fontSize: 12,
        color: '#b5b5b5',
        marginLeft: 10,
      },
      line: {
        marginTop: 10,
        borderBottomColor: '#DFDFDFb0',  //dfdfdfb0하면 투명도 적용되는 듯
        borderBottomWidth: 0.7,
    },
    btnStyle1: {
      flexDirection: 'row',
      // width: '90%',
      paddingTop: 5,
      paddingLeft: 10,
      justifyContent: 'space-between',
    },
    btnStyle2: {
      flexDirection: 'row',
      width: '40%',
      height: 32,
      alignItems: 'center',
      // backgroundColor: 'grey',
      // justifyContent: 'space-between'
    },
    StyleText: {
      fontFamily: 'NanumSquareR',
      fontSize: 14,
      color: '#000',
      marginLeft: 20,
    },
    minibutton: {
      marginLeft: 5,
      marginRight: 10,
      borderRadius: 5,
      height: 24,
      width: 48,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    minitext: {
      fontFamily: 'NanumSquareR',
      fontSize: 12,
    },
});

export default editClothes3;