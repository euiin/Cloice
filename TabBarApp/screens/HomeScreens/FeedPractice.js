import React from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const FeedPractice = ({ item }) => {
  const navigation = useNavigation();

  return(
    <TouchableOpacity onPress={() => {navigation("FeedDetail", {
      item,
    })}}>
      <Card>
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    feed: {
      height: 100,
      width: '50%',
    } 
  });

export default FeedPractice;