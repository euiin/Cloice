import React from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

const Feeds = ({ item }) => {
    return(
        <Card style = {styles.feed}>
            <CardItem style= {{alignItems: 'center'}}>
                <Image source={require('../../assets/pngs/google.png')} style={{ height:200, width: 200, resizeMode: 'contain', flex:1 }}/>
            </CardItem>
            <CardItem>
                <Left>
                    <Thumbnail source={require('../../assets/pngs/naver.png')} />
                    <Body>
                        <Text style={{fontSize: 15}}>소녀소녀 룩이에요~ *^^*</Text>
                        <Text style={{fontSize: 14}}>민희</Text>
                    </Body>
                </Left>
            </CardItem>
        </Card>
    );
}

const styles = StyleSheet.create({
    feed: {
      height: 100,
      width: '50%',
    },
    container: {
        flex: 1,
        backgroundColor: "#EBECF4"
    },
    header: {
        paddingTop: 64,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500"
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    },
    
  });

export default Feeds;