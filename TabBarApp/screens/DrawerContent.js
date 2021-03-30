import React from 'react';
import {View, StyleSheet,TouchableOpacity, ToastAndroid} from 'react-native';//이제 여기서 text 이용 안하고
import {
    Avatar,
    Title,
    Caption,
    Drawer} from 'react-native-paper'; //paper에서 api 가져온다. 
import { 
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';

import { AuthContext } from '../components/context';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import IIcon from 'react-native-vector-icons/Ionicons';

export function DrawerContent(props, { loginStatus }) {

    const { signOut } = React.useContext(AuthContext);

    const signOutHandler = () => {
        ToastAndroid.showWithGravity("로그아웃 되셨습니다",
                                            ToastAndroid.SHORT,
                                            ToastAndroid.CENTER);

        signOut();
        props.navigation.jumpTo("Home")
    }

    return(// caption은 작은 글씨로(나중에 포인트 설정할때 해보자)
    //flexDirection:'row' 해야 그림 옆에 글씨가 들어간다.!!
        <View style={{flex:1}}> 
            <DrawerContentScrollView {...props}>
                <Drawer.Section style={styles.drawerSection} title='마이페이지'>
                    <TouchableOpacity  style={styles.drawerContent} onPress={()=>{props.navigation.navigate('MyProfile')}}>
                        <View style={styles.userInfoSection}>
                            <View style={{flexDirection:'row',marginTop: 15}}>
                                <Avatar.Image
                                    source={require('../login/profileImage/ProfileImage.jpg')}
                                    size={35}
                                />
                                <View style={{marginLeft:15 /*사진과의 거리*/, flexDirection:'row'}}>
                                    <Title style={styles.title}>내 프로필</Title>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <DrawerItem
                        icon={({size}) => (
                            <Icon
                            name='hanger'  
                            //name='home'
                            color={'#99D1E9'}
                            size={size}  
                            />
                        )}
                        label="내 옷장"
                        onPress={()=>{props.navigation.navigate('Closet')}}
                    />             
                    <DrawerItem
                        icon={({size}) => (
                            <SIcon
                            name='drawer'  
                            //name='home'
                            color={'#99D1E9'}
                            size={size}  
                            />
                        )}
                        label="구독"
                        onPress={()=>{}} // 일단, 눌렀을때 아무것도 안하는거
                    />
                </Drawer.Section>
                <Drawer.Section style={styles.drawerSection} title='결제'>
                    <DrawerItem
                        icon={({size}) => (
                            <IIcon
                            name='cart'  
                            //name='home'
                            color={'#99D1E9'}
                            size={size}  
                            />
                        )}
                        label="장바구니"
                        onPress={()=>{
                            if(loginStatus) {

                            } else {
                                props.navigation.navigate('Cart', {
                                    screen: "LoginScreen"
                                })
                            }
                        }} // 일단, 눌렀을때 아무것도 안하는거
                    /> 
                    <DrawerItem
                        icon={({size}) => (
                            <Icon
                            name='credit-card-multiple-outline'  
                            //name='home'
                            color={'#99D1E9'}
                            size={size}  
                            />
                        )}
                        label="결제 내역"
                        onPress={()=>{}} // 일단, 눌렀을때 아무것도 안하는거
                    />
                    <DrawerItem
                        icon={({size}) => (
                            <Icon
                            name='copyright'  
                            //name='home'
                            color={'#99D1E9'}
                            size={size}  
                            />
                        )}
                        label="포인트"
                        onPress={()=>{}} // 일단, 눌렀을때 아무것도 안하는거
                        
                    />
                </Drawer.Section>
                <Drawer.Section style={styles.drawerSection} title='클로이스'>
                    <DrawerItem
                        icon={({size}) => (
                            <IIcon
                            name='md-megaphone'  
                            //name='home'
                            color={'#99D1E9'}
                            size={size}  
                            />
                        )}
                        label="공지사항"
                        onPress={()=>alert('공지사항이 없습니다.')} // 일단, 눌렀을때 아무것도 안하는거
                    />
                    <DrawerItem
                        icon={({size}) => (
                            <Icon
                            name='cog'  
                            //name='home'
                            color={'#99D1E9'}
                            size={size}  
                            />
                        )}
                        label="설정"
                        onPress={()=>{props.navigation.navigate('Setting')}} // 일단, 눌렀을때 아무것도 안하는거
                    />                                     
                </Drawer.Section>        
            </DrawerContentScrollView>  
            <Drawer.Section style={styles.bottomDrawerSection}> 
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        typle='MaterialCommunityIcons'
                        name='exit-to-app'  
                        //name='home'
                        color={color}
                        size={size}  
                        />
                    )}
                    label="Sign OUT"
                    onPress={signOutHandler}
                />                    
            </Drawer.Section>          
        </View>
    );// 눈에 보이는 디자인은 여기 안에서 !!
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 8,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });