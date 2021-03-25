import React from 'react';
import { StyleSheet, View, Text, Alert, Image, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImageColors from "react-native-image-colors"

//여기 하단바 없애야 함.

const editClothes2 = ({ route, navigation }) => {
  const { imageURI } = route.params;

  const [data, setData] = React.useState({
    top: false,
    bottom: false,
    outer: false,
    shoes: false,
    hat: false,
    acc: false,
    spring: false,
    summer: false,
    fall: false,
    winter: false,
    color1: '',   //average
    color2: '',   //dominant
    color3: '',   //vibrant
    forAll: false,
    forFriends: false,
    forMe: false,
    
  })
  // console.log('this is average color')
  // console.log(data.color1)

  React.useEffect(() => {
    const fetchColors = async () => {
      const result = await ImageColors.getColors(imageURI, {
        fallback: '#000000',
        quality: 'low',
        pixelSpacing: 5,
      });

      if (result.platform === 'android') {
        setData({
          ...data,
          color1: result.average,
          color2: result.dominant,
          color3: result.vibrant,
        });
      }
    };

    fetchColors();
  }, []);

  const updateTop = () => {
    setData({
        ...data,
        top: !data.top,
        bottom: false,
        outer: false,
        shoes: false,
        hat: false,
        acc: false,
    });
  }
  const updateBottom = () => {
    setData({
        ...data,
        bottom: !data.bottom,
        top: false,
        outer: false,
        shoes: false,
        hat: false,
        acc: false,
    });
  }
  const updateOuter = () => {
    setData({
        ...data,
        outer: !data.outer,
        top: false,
        bottom: false,
        shoes: false,
        hat: false,
        acc: false,
    });
  }
  const updateShoes = () => {
    setData({
        ...data,
        shoes: !data.shoes,
        top: false,
        bottom: false,
        outer: false,
        hat: false,
        acc: false,
    });
  }
  const updateHat = () => {
    setData({
        ...data,
        hat: !data.hat,
        top: false,
        bottom: false,
        outer: false,
        shoes: false,
        acc: false,
    });
  }
  const updateAcc = () => {
    setData({
        ...data,
        acc: !data.acc,
        top: false,
        bottom: false,
        outer: false,
        shoes: false,
        hat: false,
    });
  }
  const updateSpring = () => {
    setData({
      ...data,
      spring: !data.spring,
    });
  }
  const updateSummer = () => {
    setData({
      ...data,
      summer: !data.summer,
    });
  }
  const updateFall = () => {
    setData({
      ...data,
      fall: !data.fall,
    });
  }
  const updateWinter = () => {
    setData({
      ...data,
      winter: !data.winter,
    });
  }
  const updateForAll = () => {
    setData({
      ...data,
      forAll: !data.forAll,
      forFriends: false,
      forMe: false,
    });
  }
  const updateForFriends = () => {
    setData({
      ...data,
      forAll: false,
      forFriends: !data.forFriends,
      forMe: false,
    });
  }
  const updateForMe = () => {
    setData({
      ...data,
      forAll: false,
      forFriends: false,
      forMe: !data.forMe,
    });
  }
  const validnext= (data.top|data.bottom|data.outer|data.shoes|data.hat|data.acc)&&(data.spring|data.summer|data.fall|data.winter)&&(data.color1!='')&&(data.color2!='')&&(data.color3!='')&&(data.forAll|data.forFriends|data.forMe)

  // const color1 = async () =>
  // async () => {
  //   await ImageColors.getColors(sampleImage, {
  //     fallback: "#228B22",
  //   })
  // };

  // const color2 = async () => {
  //   await ImageColors.getColors(sampleImage2, {
  //       fallback: "#228B22",
  //     })
  // };
  
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
          <View style={styles.Circle} />
          <View style={styles.emptyCircle} />
        </View>
        <View style={{   //글자들
          flexDirection: 'row',
          width: '87%',
          marginTop: 8,
          justifyContent: 'space-between'
        }}>
          <Text style={styles.Text}>배경제거</Text>
          <Text style={styles.nowText}>정보입력</Text>
          <Text style={styles.Text}>추가입력</Text>
        </View>

        <View style={{
          height: 180,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
          <Image style={{height:'100%', width:'100%', resizeMode: 'contain'}} 
                  source = {{uri: imageURI}} 
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
            <Text style={styles.subtext}>카테고리</Text>
            <FontAwesome
              name="star"
              color="red"
              size={8}
            />
          </View>

          <View style={{
            flexDirection: 'row',
          }}>
            <TouchableOpacity
              style= {data.top ? styles.LongButtonT : styles.LongButtonF}
              onPress={updateTop}
              >
              <Text style={styles.ButtonText}>상의</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style= {data.bottom ? styles.LongButtonT : styles.LongButtonF}
              onPress={updateBottom}>
              <Text style={styles.ButtonText}>하의</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style= {data.outer ? styles.LongButtonT : styles.LongButtonF}
              onPress={updateOuter}>
              <Text style={styles.ButtonText}>아우터</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%',
            marginTop: 10,
          }}>
            <TouchableOpacity 
              style= {data.shoes ? styles.LongButtonT : styles.LongButtonF}
              onPress={updateShoes}>
              <Text style={styles.ButtonText}>신발</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style= {data.hat ? styles.LongButtonT : styles.LongButtonF}
              onPress={updateHat}>
              <Text style={styles.ButtonText}>모자</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style= {data.acc ? styles.LongButtonT : styles.LongButtonF}
              onPress={updateAcc}>
              <Text style={styles.ButtonText}>액세서리</Text>
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
            <Text style={styles.subtext}>계절</Text>
            <FontAwesome
              name="star"
              color="red"
              size={8}
            />
          </View>

          <View style={{
            flexDirection: 'row',
            }}>
            <TouchableOpacity 
              style= {data.spring ? styles.ShortButtonT : styles.ShortButtonF}
              onPress={updateSpring}>
              <Text style={styles.ButtonText}>봄</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style= {data.summer ? styles.ShortButtonT : styles.ShortButtonF}
              onPress={updateSummer}>
              <Text style={styles.ButtonText}>여름</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style= {data.fall ? styles.ShortButtonT : styles.ShortButtonF}
              onPress={updateFall}>
              <Text style={styles.ButtonText}>가을</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style= {data.winter ? styles.ShortButtonT : styles.ShortButtonF}
              onPress={updateWinter}>
              <Text style={styles.ButtonText}>겨을</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          }}>
          <View style={styles.subtitle}>
            <Text style={styles.subtext}>색상</Text>
            <FontAwesome
              name="star"
              color="red"
              size={8}
            />
          </View>

          <View style={
            {flexDirection: 'row', 
            width: '70%', //색상*과 실제 동그라미 사이 간격
            justifyContent: 'flex-start'}
            }>
            <View style={[styles.colors, {backgroundColor: data.color1}]}/>
            <View style={[styles.colors, {backgroundColor: data.color2}]}/>
            <View style={[styles.colors, {backgroundColor: data.color3}]}/>

          </View>
          

        </View>

        <View style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          }}>
          <View style={styles.subtitle}>
            <Text style={styles.subtext}>공개범위</Text>
            <FontAwesome
              name="star"
              color="red"
              size={8}
            />
          </View>
          <View style={{
            flexDirection: 'row',
          }}>
            <TouchableOpacity
              style= {data.forAll ? styles.LongButtonT : styles.LongButtonF}
              onPress={updateForAll}>
              <Text style={styles.ButtonText}>전체공개</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style= {data.forFriends ? styles.LongButtonT : styles.LongButtonF}
              onPress={updateForFriends}>
              <Text style={styles.ButtonText}>친구공개</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style= {data.forMe ? styles.LongButtonT : styles.LongButtonF}
              onPress={updateForMe}>
              <Text style={styles.ButtonText}>나만보기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{
          width: '100%',
          alignItems: 'center',
          position: 'absolute',  //버튼 위치는 아래에고정
          bottom: 20,
        }}>
          <TouchableOpacity
            disabled={!validnext}
            style= {validnext ? styles.NextButtonT : styles.NextButtonF}
            onPress={()=>{ navigation.navigate("editClothes3", {imageURI: imageURI, dataSet1: data})}}
            >
            <Text style={styles.NextButtonText}>다음</Text>
          </TouchableOpacity>
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
    LongButtonT: {
      width: 68, //이거 퍼센트로 해야하나?
      height: 28,
      marginLeft: 20,
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
    LongButtonF: {
      width: 68, //이거 퍼센트로 해야하나?
      height: 28,
      marginLeft: 20,
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
    ShortButtonT: {
      width: 52, //이거 퍼센트로 해야하나?
      height: 28,
      marginLeft: 15,
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
      width: 52, //이거 퍼센트로 해야하나?
      height: 28,
      marginLeft: 15,
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
    ButtonText: {
      fontFamily: 'NanumSquareR',
      fontSize: 12,
    },
    NextButtonT: {
      width: 250, //이거 퍼센트로 해야하나?
      height: 44,
      backgroundColor: '#41b9ff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
    },
    NextButtonF: {
      width: 250, //이거 퍼센트로 해야하나?
      height: 44,
      backgroundColor: '#dfdfdf',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
    },
    NextButtonText: {
      fontFamily: 'NanumSquareR',
      fontSize: 14,
      color: '#fff'
    },
    colors: {
      width: 32,
      height: 32,
      borderRadius: 16,
      borderColor: "#fff",
      borderWidth: 1.5,
      marginRight: 5,
    }
  });

export default editClothes2;