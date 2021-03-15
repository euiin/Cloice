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

    
    return (
        <>
        <View>
          <Text>hello</Text>
        </View>
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