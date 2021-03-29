import React from 'react';
import {
    View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

var { height, width } = Dimensions.get('screen');

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
        <ScrollView style={{
          width: '100%'
        }}>
          <View style = {styles.container}>
            <TouchableOpacity style={{
                width: 40,
                height: 40,
                position: 'absolute',
                right: 10,
                top: 7,
              }}>
                <Entypo
                  name="cross"
                  color="#99d1e9"
                  size={34}
                  onPress={() => navigation.navigate("Home")}
                />
              </TouchableOpacity>
            <View style = {styles.subtitle}>
              <Text style ={styles.subtext}>이 코디는 어떠신가요?</Text>
            </View>
            
            <View style = {styles.box}>
              <Image
                source={require('../assets/pngs/recomm.png')}
              />
            </View>

            <View style = {styles.box1}>
            <Image
                source={require('../assets/pngs/emptyStars.png')}
              />
            </View>

            <View style = {styles.box2}>
              <Image
                source={require('../assets/pngs/recommItem1.png')}
                style = {{marginLeft: 10,}}
              />
              <View style = {{marginLeft: 10,}}>
                <Text style={styles.subtext}>칼하트 비니</Text>
                <Text style={styles.greytext}>판매처 : 무신사 스토어</Text>
                <Text style={styles.greytext}>판매가 : 25,900원</Text>
              </View>
            </View>
            <View style = {styles.box2}>
              <Image
                source={require('../assets/pngs/recommItem2.png')}
                style = {{marginLeft: 10,}}
              />
              <View style = {{marginLeft: 10,}}>
                <Text style={styles.subtext}>나이키 조던 에어1</Text>
                <Text style={styles.greytext}>판매처 : NIKE 온라인 스토어</Text>
                <Text style={styles.greytext}>판매가 : 13,900원</Text>
              </View>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10,}}>
              <Image
                source={require('../assets/pngs/credit.png')}
                // style = {{marginLeft: 10,}}
              />
              <Text style={[styles.subtext, {marginLeft: 10,}]}>바로 구매</Text>
            </View>
            
          </View>
        </ScrollView>
        
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
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        marginVertical: 15,
    },
    subtext: {
        fontFamily: 'NanumSquareR',
        fontSize: 18,
        // marginRight: 5,
    },
    greytext: {
      fontFamily: 'NanumSquareR',
      fontSize: 12,
      color: '#cfcfcf',
      marginVertical: 3,
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
    box1: {
      width: '100%', 
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
    },
    box2: {
      width: '100%', 
      height: 80,
      flexDirection: 'row',
      // backgroundColor: 'grey',
      borderWidth: 1,
      borderColor: '#dfdfdf',
      borderRadius: 5,
      marginVertical: 5,
      alignItems: 'center',
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
     

})

export default RecommendScreen2;