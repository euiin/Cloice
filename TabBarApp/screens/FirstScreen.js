import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';

const FirstScreen = () => {

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>패션이 시작되는 곳,</Text>
            <Text style = {styles.text}>클로이스</Text>
            <View style={styles.images}>
                <Image
                    source={require('../assets/pngs/finallogo.png')}
                    style={styles.logo}
                />
            </View>
        </View>
    )
}

export default FirstScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.22;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#99d1e9',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    images: {
        // flex: 1,
        // width: 1,
        height: height_logo,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 130,
    },
    logo: {
        flex: 1,
        width: height_logo,
        // height: height_logo*0.25,
        resizeMode: 'contain',
        // backgroundColor: 'grey'
    },
    text: {
        fontFamily: 'NanumSquareB',   //이거 볼드로 어케하지?
        color: 'black',
        fontSize: 18,
        marginBottom: 10,
    },
});