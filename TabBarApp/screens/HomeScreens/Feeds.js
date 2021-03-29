import React from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, Image } from 'react-native';
import { Header, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

const Feeds = ({ item }) => {
    return(
      <>
        <Content>
            <Card>
                <CardItem style= {{alignItems: 'center'}}>
                    <Image source={{uri: item.ImageURI}} style={styles.mainImage}/>
                </CardItem>
                <CardItem footer bordered style={styles.bottomCard}>
                    <Image source={require('../../login/profileImage/ProfileImage.jpg')} style={styles.profileImage}/>
                    <Body style={{paddingTop:3}}>
                        <Text style={styles.titleText}>{item.POST_TEXT}</Text>
                        <Text style={styles.nickText}>{item.NICK}</Text>
                    </Body>
                </CardItem>
            </Card>
        </Content>
      </>
    );
}

const styles = StyleSheet.create({
    mainImage: {
      height: 160,
      width: 160,
      resizeMode: 'contain',
      flex:1
    },
    profileImage: {
      height: 45, 
      width: 45, 
      resizeMode: 'contain',
    },
    bottomCard: {
      paddingLeft:0,
      height: 60,
      paddingTop:13,
      paddingRight:5,
    },
    titleText: {
      fontFamily: 'NanumSquareR',
      fontSize: 11
    },
    nickText: {
      fontFamily: 'NanumSquareR',
      fontSize: 10
    }
  });

export default Feeds;