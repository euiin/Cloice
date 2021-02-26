import React  from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';

const MyProfile_Story = ({navigation}) => {
    return (
        <View style={{padding:6, borderColor:'#dfdfdf', borderTopWidth:1,borderBottomWidth:1}}>
        <Text style={{fontSize:11}} >옷장</Text> 
        <ScrollView horizontal={true} style={{flexDirection:'row', /*paddingTop:10, paddingBottom:10*/}} >
            <TouchableOpacity onPress={() => navigation.navigate("Closet")} >
                <Image source={require('../android/app/src/assets/fonts/옷장버튼.png')}
                style={[styles.storyimage]}/>
            </TouchableOpacity>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')}
            style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')}
            style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')}
            style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')}
            style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')}
            style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')}
            style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')}
            style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')}
            style={[styles.storyimage]}/>
            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')}
            style={[styles.storyimage]}/>
        </ScrollView>
        </View>
    );
}

export default MyProfile_Story;

const styles = StyleSheet.create({
    storyimage: {
        width:60, 
        height:60, 
        borderRadius:52, 
        marginHorizontal:7
    },
});