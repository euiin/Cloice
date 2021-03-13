import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, FlatList, RefreshControl } from 'react-native';
import Axios from 'axios';
import Feeds from './FeedPractice'; //이거 나중에 Feeds로 바꾸기

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
      const base64Image = response.data.base64Iamge;
      const nickname = response.data.nickname;
      const text = response.data.text;
      var temp = {
        base64Image: base64Image,
        nickname: nickname,
        text: text
      }
      setFeedList(
        [temp,
          ...feedList,
      ])
    })
  }

  const renderPost = (item) => {
    return (
        <Feeds item = {item}/>
    );
  }


  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={async () => {
              setIsLoading(true)
              await getFeed()
              setIsLoading(false)
          }} />}
        style={styles.feed}
        data={posts}
        renderItem={({ item }) => renderPost(item)}
        keyExtractor={item => item.id}
        // numColumns = {2}
        showsVerticalScrollIndicator={false}/>
    </View>
  );
};

const styles = StyleSheet.create({
  feed: {
      marginHorizontal: 16
  }
});

export default HomeScreen;