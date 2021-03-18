import React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, ScrollView, Image
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';



const RecommendScreen2 = ({navigation}) => {

    const [data, setData] = React.useState({
        type_mine: false,
        type_new: false,
        type_all: false,
        ss_spring: false,
        ss_summer: false,
        ss_fall: false,
        ss_winter: false,
        st_casual: false,
        st_dandy: false,
        st_street: false,
        st_hiphop: false,
        pr_less3: false,
        pr_less5: false,
        pr_less10: false,
        pr_more10: false,
        opt_black: false,
        opt_beige: false,
        opt_color: false,
    })

    const updateTypeMine = () => {
        setData({
            ...data,
            type_mine: !data.type_mine,
            type_new: false,
            type_all: false,
        });
    }
    const updateTypeNew = () => {
        setData({
            ...data,
            type_new: !data.type_new,
            type_mine: false,
            type_all: false,
        });
    }
    const updateTypeAll = () => {
        setData({
            ...data,
            type_all: !data.type_all,
            type_new: false,
            type_mine: false,
        });
    }
    const updateSsSpring = () => {
        setData({
            ...data,
            ss_spring: !data.ss_spring,
            ss_summer: false,
            ss_fall: false,
            ss_winter: false,
        });
    }
    const updateSsSummer = () => {
        setData({
            ...data,
            ss_summer: !data.ss_summer,
            ss_spring: false,
            ss_fall: false,
            ss_winter: false,
        });
    }
    const updateSsFall = () => {
        setData({
            ...data,
            ss_fall: !data.ss_fall,
            ss_summer: false,
            ss_spring: false,
            ss_winter: false,
        });
    }
    const updateSsWinter = () => {
        setData({
            ...data,
            ss_winter: !data.ss_winter,
            ss_summer: false,
            ss_fall: false,
            ss_spring: false,
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
    const updatePrLess3 = () => {
      setData({
          ...data,
          pr_less3: !data.pr_less3,
          pr_less5: false,
          pr_less10: false,
          pr_more10: false,
      });
    }
    const updatePrLess5 = () => {
      setData({
          ...data,
          pr_less5: !data.pr_less5,
          pr_less3: false,
          pr_less10: false,
          pr_more10: false,
      });
    }
    const updatePrLess10 = () => {
      setData({
          ...data,
          pr_less10: !data.pr_less10,
          pr_less5: false,
          pr_less3: false,
          pr_more10: false,
      });
    }
    const updatePrMore10 = () => {
      setData({
          ...data,
          pr_more10: !data.pr_more10,
          pr_less5: false,
          pr_less10: false,
          pr_less3: false,
      });
    }
    const updateOptBlack = () => {
      setData({
          ...data,
          opt_black: !data.opt_black,
          opt_beige: false,
          opt_color: false,
      });
    }
    const updateOptBeige = () => {
      setData({
          ...data,
          opt_beige: !data.opt_beige,
          opt_black: false,
          opt_color: false,
      });
    }
    const updateOptColor = () => {
      setData({
          ...data,
          opt_color: !data.opt_color,
          opt_beige: false,
          opt_black: false,
      });
    }

    const st_all = (data.st_casual|data.st_dandy|data.st_street|data.st_hiphop)  //하나라도 set 되어있으면 true
    

    
      const snapPoints = [330, 0]
      const sheetRef = React.createRef();
      const fall = new Animated.Value(1);

      const renderContent = () => {

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
            <View style={styles.container}>
                <View style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 20,
                    }}>
                    <View style={styles.subtitle}>
                        <Text style={styles.subtext}>추천유형</Text>
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
                            style= {data.type_mine ? styles.LongButtonT : styles.LongButtonF}
                            onPress={updateTypeMine}
                        >
                            <Text style={styles.ButtonText}>내 옷으로만</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style= {data.type_new ? styles.LongButtonT : styles.LongButtonF}
                            onPress={updateTypeNew}
                            >
                            <Text style={styles.ButtonText}>새 옷으로만</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style= {data.type_all ? styles.LongButtonT : styles.LongButtonF}
                            onPress={updateTypeAll}
                            >
                            <Text style={styles.ButtonText}>모두 포함</Text>
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
                        style= {data.ss_spring ? styles.ShortButtonT : styles.ShortButtonF}
                        onPress={updateSsSpring}
                        >
                        <Text style={styles.ButtonText}>봄</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style= {data.ss_summer ? styles.ShortButtonT : styles.ShortButtonF}
                        onPress={updateSsSummer}
                        >
                        <Text style={styles.ButtonText}>여름</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style= {data.ss_fall ? styles.ShortButtonT : styles.ShortButtonF}
                        onPress={updateSsFall}
                        >
                        <Text style={styles.ButtonText}>가을</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style= {data.ss_winter ? styles.ShortButtonT : styles.ShortButtonF}
                        onPress={updateSsWinter}
                        >
                        <Text style={styles.ButtonText}>겨을</Text>
                        </TouchableOpacity>
                    </View>
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
                  // justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 20,
                  }}>
                  <View style={styles.subtitle}>
                    <Text style={[styles.subtext, {marginRight: 35}]}>포함할 옷</Text>
                  </View>

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
                    <View style={[styles.subtitle, {marginRight: 20,}]}>
                        <Text style={styles.subtext}>가격</Text>
                    </View>

                    <ScrollView contentContainerStyle={styles.horizontalScrollView}
                    horizontal= {true}>
                        <TouchableOpacity
                            style= {data.pr_less3 ? styles.LongButtonT : styles.LongButtonF}
                            onPress={updatePrLess3}
                        >
                            <Text style={styles.ButtonText}>3만원 미만</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style= {data.pr_less5 ? styles.LongButtonT : styles.LongButtonF}
                            onPress={updatePrLess5}
                            >
                            <Text style={styles.ButtonText}>5만원 미만</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style= {data.pr_less10 ? styles.LongButtonT : styles.LongButtonF}
                            onPress={updatePrLess10}
                            >
                            <Text style={styles.ButtonText}>10만원 미만</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style= {data.pr_more10 ? styles.LongButtonT : styles.LongButtonF}
                            onPress={updatePrMore10}
                            >
                            <Text style={styles.ButtonText}>10만원 이상</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <View style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 20,
                    }}>
                    <View style={styles.subtitle}>
                        <Text style={styles.subtext}>옵션</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <TouchableOpacity
                            style= {data.opt_black ? styles.LongButtonT : styles.LongButtonF}
                            onPress={updateOptBlack}
                        >
                            <Text style={styles.ButtonText}>블랙톤</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style= {data.opt_beige ? styles.LongButtonT : styles.LongButtonF}
                            onPress={updateOptBeige}
                            >
                            <Text style={styles.ButtonText}>베이지톤</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style= {data.opt_color ? styles.LongButtonT : styles.LongButtonF}
                            onPress={updateOptColor}
                            >
                            <Text style={styles.ButtonText}>컬러풀</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

                <View style={[styles.line, {marginTop: 30, marginBottom: 20,}]}/>

                <View style={{alignItems: 'flex-start', width: '100%', height: 230, marginTop: 10,}}>
                  <Image
                    source={require('../assets/pngs/bubble.png')}
                    style={styles.bubble}
                  />
                  <Image
                    source={require('../assets/pngs/ghost.png')}
                    style={styles.ghost}
                  />
                  
                  <View style=
                    {{position: 'absolute',
                      top: 25,
                      left: 115}}>
                    <Text style={styles.ghostment}>오늘 남은 추천 수{"\n"}2/5</Text>
                  </View>

                  <TouchableOpacity style={styles.recommBtn}
                    onPress={()=>{navigation.navigate("RecommendScreen2")}}>
                    <Text style={styles.recommText}>코디 추천받기</Text>
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

        {renderShadow()}
        </>
    );
}

const styles=StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        height: '100%',
        backgroundColor: '#fcfcfc'
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
        width: 68,
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
        width: 68,
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
    ButtonText: {
        fontFamily: 'NanumSquareR',
        fontSize: 12,
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
    style: {
        fontFamily: 'NanumSquareB',
        fontSize: 20,
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
      line: {
        marginTop: 10,
        width: '100%',
        borderBottomColor: '#dfdfdfb0',  //dfdfdfb0하면 투명도 적용되는 듯
        borderBottomWidth: 0.7,
    },
    substyle: {
      fontFamily: 'NanumSquareR',
      fontSize: 12,
      color: '#b5b5b5',
      marginLeft: 10,
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
    horizontalScrollView: {
    },
    ghost: {
      width: 121,
      height: 165,
      resizeMode: 'contain',
      position: 'absolute',
      top: 60,
      left: 40
    },
    bubble: {
      width: 113,
      height: 84,
      resizeMode: 'contain',
      marginLeft: 110
    },
    ghostment: {
      fontFamily: 'NanumSquareR',
      fontSize: 14,
      textAlign: 'center',
    },
    recommText: {
      fontFamily: 'NanumSquareR',
      fontSize: 24,
    },
    recommBtn: {
      width: 164,
      height: 45,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 60,
      right: 20,
      backgroundColor: '#fff',
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

})

export default RecommendScreen2;