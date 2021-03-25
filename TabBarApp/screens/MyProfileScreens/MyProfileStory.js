import React  from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import { BASE_URL } from '../../components'
import Axios from 'axios'

const MyProfileStory = ({navigation, email}) => {
  const [myProfileStoryData, setMyProfileStoryData] = React.useState([])

  React.useEffect(() => {
    console.log(email)
    Axios.post(BASE_URL + "/getCloset", {
      email: email,
    }).then((response) => {
      var arr = response.data;
      setMyProfileStoryData(arr);
    }).catch((error) => {;
      console.log("에러:", error);
      throw error;
    });
  }, [])

  const renderItem = ({ item }) => (
      <View>
          <TouchableOpacity onPress={() => navigation.navigate(item.navi)}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={{uri: item.file}} style={[styles.storyimage]} />
          </View>
          </TouchableOpacity>   
      </View>
      );

  return (
    <View style={{padding:6, borderColor:'#dfdfdf', borderTopWidth:1,borderBottomWidth:1}}>
        <Text style={{fontSize:11}} >옷장</Text> 
        <FlatList
          horizontal={true} 
          showsHorizontalScrollIndicator={false} 
          data={myProfileStoryData} 
          renderItem={renderItem} 
          keyExtractor={item => item.id} 
          // numColumns={3}   horizontal 없을 때 쓰자!! ex) 피드
        />
    </View>
  );
}

export default MyProfileStory;

const styles = StyleSheet.create({
    storyimage: {
        width:60, 
        height:60, 
        borderRadius:52, 
        marginHorizontal:7
    },
});