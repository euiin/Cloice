import React ,{ Component } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView, Dimensions, SafeAreaView } from 'react-native';

import {Container, Content, Header, Left, Body, Right} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MyProfile_Story from './MyProfile_Story';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const initialLayout = { width: Dimensions.get('window').width };
var { height, width } = Dimensions.get('screen');

var images=[
    require('../android/app/src/assets/fonts/김민희.jpg'),
    require('../android/app/src/assets/fonts/김민희.jpg'),
    require('../android/app/src/assets/fonts/김민희.jpg'),
    require('../android/app/src/assets/fonts/김민희.jpg'),
    require('../android/app/src/assets/fonts/김민희.jpg'),
    require('../android/app/src/assets/fonts/김민희.jpg'),
    require('../android/app/src/assets/fonts/김민희.jpg'),
    require('../android/app/src/assets/fonts/김민희.jpg'),
    require('../android/app/src/assets/fonts/김민희.jpg'),
    require('../android/app/src/assets/fonts/김민희.jpg'),
    require('../android/app/src/assets/fonts/김민희.jpg'),
    require('../android/app/src/assets/fonts/김민희.jpg'),
    require('../android/app/src/assets/fonts/김민희.jpg'),
    require('../android/app/src/assets/fonts/김민희.jpg'),
    require('../android/app/src/assets/fonts/김민희.jpg'),
    require('../android/app/src/assets/fonts/김민희.jpg'),
    require('../android/app/src/assets/fonts/김민희.jpg')
]

const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081'}]}>
        <Text style={{fontWeight:'bold', fontSize:50}}>anjdianjdi</Text>
    </View>
);

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
        {images.map((image, index) => {
            return (
            <View key={index} style={[{ width: (width-32) / 3 }, { height: (width-32) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
                <Image style={{ flex: 1, alignSelf:'stretch', width: undefined, height: undefined,}}
                    source={image}>
                </Image>
            </View>
        )
    })}
    </View>
);


export default function MyProfile({navigation}) {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: '코디'},
      { key: 'second', title: '북마크' },
    ]);
  
    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
    });

    const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: '#99D1E9', height:4}}
          style={{ backgroundColor: '#ffffff' }}
          renderLabel={({route, color}) => (
            <Text style={{ color: 'black', margin: 8 }}>
              {route.title}
            </Text>
          )}
          pressColor='#cgcgcg' //회색으로 할까 고민중,
        />
    );
  
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
            <View style={{ padding:16}}>
                <ScrollView>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                        <Icon.Button 
                            name='bell'
                            color='#DFDFDF' backgroundColor="#ffffff"
                            style={{marginLeft:-5,marginRight:-5}} // 크기 키울 것
                            onPress={()=>{}}
                            size={26}
                        />
                    </View>
                    <View style={{flex:3,padding:10,flexDirection:'column', alignItems:'center'}}>
                        <Image source={require('../android/app/src/assets/fonts/김민희.jpg')}
                        style={{width:100, height:100, borderRadius:50}}/>
                        <Text style={{fontSize:17, fontWeight:'bold',paddingTop:7}}>민희</Text>
                        <Text style={{padding:5}}>다이어트 중입니다 </Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1}}>
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
                    </View>
                    <View>
                        <Icon.Button 
                            name='cog' 
                            color='#DFDFDF' backgroundColor="#ffffff"
                            style={{marginRight:-12,paddingLeft:10}}
                            onPress={()=>{}}
                            size={26}
                        />
                    </View>
                </View>
                <MyProfile_Story navigation = {navigation}/>
                <View>
                    <TabView
                        renderTabBar={renderTabBar}
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={initialLayout}
                    />
                </View>
            </ScrollView>
            </View>
        </Content>
    </Container>

    );
}


const styles = StyleSheet.create({
container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    },
scene: { // 코디, 북마크 안에 스타일
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap' // 사진을 row로 넣었을때 화면 밖을 나가지 않도록 해준다.
  },
});

 