import React from 'react';
import { View, Image, Text, Button, StyleSheet,
   TouchableOpacity, ScrollView, Dimensions, FlatList, SafeAreaView } from 'react-native';


var { height, width } = Dimensions.get('screen');

const ShoesFeed = ({ navigation, route }) =>{
  const { closetData } = route.params;
  const [closetDetailData, setClosetDetailData] = React.useState(closetData);
  var number = 0;

  const renderItem = ({ item, index }) => {
    if(item.category == "shoes") {
      number = number + 1;
      return (
        <View>
          <TouchableOpacity>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={{uri: item.file}} style={[{ width: (width-32) / 3 }, { height: (width-32) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { marginLeft: 2 } : { marginLeft: 0 } ]} />
          </View>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return(
    <View style={{paddingLeft:16, paddingRight:16, backgroundColor: '#fcfcfc'}}>
      <ScrollView>
        <View style={{flexDirection:'row',alignItems: 'center',marginVertical:30}}>
          <TouchableOpacity onPress={()=>{ navigation.navigate("MyProfile")}}>
          <Image source={require('../../../login/profileImage/ProfileImage.jpg')}
          style={{width:100,height:100, borderRadius:60, marginRight:10}}/>
          </TouchableOpacity> 
          <Text style={{fontSize:20}}>민희님의 신발 <Text style={{fontSize:14, color:'#707070'}}>{number} </Text> </Text>                     
        </View>
        <FlatList style={{flexDirection : "column"}}
          data={closetDetailData} 
          renderItem={renderItem} 
          keyExtractor={item => item.id} 
          numColumns={3}           
        />
      </ScrollView>
    </View>

  );
}

export default ShoesFeed;