import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, FlatList, RefreshControl, ScrollView } from 'react-native';
import Axios from 'axios';
import Feeds from './Feeds';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


const HomeScreen = ({navigation}) => {
  const [feedList, setFeedList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  //임시 데이터
  const posts = [
    {
        id: "1",
        name: "Joe McKay",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        timestamp: 1569109273726
    },
    {
        id: "2",
        name: "Karyn Kim",
        text:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        timestamp: 1569109273726
    },
    {
        id: "3",
        name: "Emerson Parsons",
        text:
            "Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
        timestamp: 1569109273726
    },
    {
        id: "4",
        name: "Kathie Malone",
        text:
            "At varius vel pharetra vel turpis nunc eget lorem. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing tristique risus nec feugiat in fermentum.",
        timestamp: 1569109273726
    }
];

  const getFeed = () => {
    Axios.get('/feed').then((response) => {
      const feedArr = response.data;
      setFeedList(feedArr);
    })
  }

  const renderPost = (item) => {
    return (
        <Feeds item = {item}/>
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
          data={posts}
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