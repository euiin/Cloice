import React ,{ Component } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';

import {Container, Content, Header, Left, Body, Right} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const MyProfile = () => {
//     return (
//       <View style={styles.container}>
//         <Text>내 프로필</Text>
//         <Button
//           title="Right Here"
//           onPress={() => alert('Button Clicked!')}
//         />
//       </View>
//     );
// };
const MyProfile = ({navigation}) => {
      return (
          <Container>
              <Header style= {{ backgroundColor: '#ffffff'}}>
                    <Left style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontWeight:'bold', fontSize:17}}>minizzang</Text>
                        <Icon name='home' style={{paddingLeft:10, fontSize:14}}/>
                    </Left>
                    <Right style={{flexDirection:'row', alignItems:'center'}}>
                        <Icon name='home' style={{paddingRight:10, fontSize:23}}/>
                        <Icon name='home' style={{paddingRight:10, fontSize:23}}/>
                        <Icon name='dots-vertical'  style={{fontSize:23}}/>
                    </Right>
                </Header>
                <Content style= {{ backgroundColor: '#FCFCFC'}}>
                <View>
                    <ScrollView>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Icon.Button 
                            name='bell'
                            color='#DFDFDF' backgroundColor="#ffffff"
                            style={{padding:10, fontSize:30}} // 크기 키울 것
                            onPress={()=>{}}
                            />
                            <View style={{flex:3,padding:10,flexDirection:'column', alignItems:'center'}}>
                                <Image source={require('../android/app/src/assets/fonts/김민희.jpg')}
                                style={{width:100, height:100, borderRadius:50}}/>
                                <Text style={{fontSize:17, fontWeight:'bold'}}>민희</Text>
                                <Text>다이어트 중입니다 </Text>
                            </View>
                            <Icon.Button 
                            name='cog' 
                            color='#DFDFDF' backgroundColor="#ffffff"
                            style={{padding:10, fontSize:30}}
                            onPress={()=>{}}
                            />
                        </View>
                        <View style={{flexDirection:'row'}}>
                          <View style={{flex:3}}>
                              <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                                  <View style={{alignItems:'center'}}>
                                      <Text style={{fontSize:17, fontWeight:'bold'}}>112</Text>
                                      <Text style={{fontSize:12, color:'gray'}}>게시물</Text>
                                  </View>
                                  <View style={{alignItems:'center'}}>
                                      <Text style={{fontSize:17, fontWeight:'bold'}}>711</Text>
                                      <Text style={{fontSize:12, color:'gray'}}>팔로워</Text>
                                  </View>
                                  <View style={{alignItems:'center'}}>
                                      <Text style={{fontSize:17, fontWeight:'bold'}}>131</Text>
                                      <Text style={{fontSize:12, color:'gray'}}>팔로잉</Text>
                                  </View>
                              </View>
                          </View>
                        </View>
                        <Text>옷장</Text> 
                        <ScrollView horizontal={true} style={{flexDirection:'row', paddingTop:10, paddingBottom:10}} >
                            <TouchableOpacity onPress={()=>{navigation.navigate("Closet")}}>
                                <Image source={require('../android/app/src/assets/fonts/옷장버튼.png')}
                                style={{marginHorizontal:5, width:100, height:100, borderRadius:50}}/>
                            </TouchableOpacity>
                            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')}
                            style={{width:100, height:100, borderRadius:50, marginHorizontal:5}}/>
                            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')}
                            style={{width:100, height:100, borderRadius:50, marginHorizontal:5}}/>
                            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')}
                            style={{width:100, height:100, borderRadius:50, marginHorizontal:5}}/>
                            <Image source={require('../android/app/src/assets/fonts/김민희.jpg')}
                            style={{width:100, height:100, borderRadius:50, marginHorizontal:5}}/>
                        </ScrollView>
                        <View style={button_styles.container}>
                            <TouchableOpacity 
                                style={button_styles.button} 
                                onPress={()=>{}}>
                                <Text>코디</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={button_styles.button}
                                onPress={() => {}}>
                                <Text>북마크</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    </View>
                </Content>
            </Container>
      )
}


export default MyProfile;

const styles = StyleSheet.create({
container: {
flex: 1, 
alignItems: 'center', 
justifyContent: 'center'
},
});

const button_styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    },
button: {
    backgroundColor: '#ffffff',
    borderBottomColor: '#99D1E9',
    borderBottomWidth: 2,
    width: '40%',
    height: 40,
    justifyContent:'center',//위아래 가운데
    alignItems:'center'//글자를 가운데
    }
});

 