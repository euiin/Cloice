import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, FlatList, RefreshControl, ScrollView } from 'react-native';
import Axios from 'axios';
import Feeds from './Feeds';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useFocusEffect } from '@react-navigation/native';
import { BASE_URL } from '../../components';


const HomeScreen = ({navigation}) => {
  const [feedList, setFeedList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  useFocusEffect(React.useCallback(() => {
    const temp = async () => {
      await getFeed()
    }
    temp();
  }, [navigation]));

  const getFeed = () => {
    Axios.get(BASE_URL +'/getFeed').then((response) => {
      const feedArr = response.data;
      setFeedList(feedArr);
    })
  }

  const renderPost = (item) => {
    return (
      <TouchableOpacity onPress = {() => {navigation.navigate("FeedDetail", {
        item: item
      })}}>
        <Feeds item = {item}/>
      </TouchableOpacity>
    );
  }

  return (
    <>
    <View style={styles.top}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.button}>
          <Text>착용샷</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {flexDirection:'row',}]}>
          <Text>인기순</Text>
          <AntDesign
            name="swap"
            size={20}
            style={{transform: [{rotate: '270deg'}]}}
          />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={{marginRight: 16, width: 24}}>
        <SimpleLineIcons
          name="equalizer"
          size={24}
          style={{transform: [{rotate: '270deg'}]}}
        />
      </TouchableOpacity>
    </View>

    <View style={{marginTop: 10, marginBottom: "10%"}}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={async () => {
                setIsLoading(true)
                await getFeed()
                setIsLoading(false)
            }} />}
          style={styles.feed}
          data={feedList}
          key={''}
          renderItem={({ item }) => renderPost(item)}
          keyExtractor={item => item.id}
          numColumns = {2}
          showsVerticalScrollIndicator={false}/>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainImage: {
    height: 160,
    width: 160,
    resizeMode: 'contain',
    flex:1
  },
  top:{
    height: 46,
    borderBottomWidth: 1,
    borderBottomColor: '#dfdfdf',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button:{
    width: 74,
    height: 32,
    borderRadius: 20,
    borderColor: '#dfdfdf',
    borderWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  feed: {
      marginHorizontal: 16
  }
});

export default HomeScreen;