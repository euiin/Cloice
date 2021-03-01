import React from 'react';
import { View, Image, Text, Button, StyleSheet,
   TouchableOpacity, ScrollView, Dimensions, FlatList, SafeAreaView } from 'react-native';
import SangeuiFeedData from './SangeuiFeedData'


var { height, width } = Dimensions.get('screen');

const SangeuiFeed = ({ navigation }) =>{
  const renderItem = ({ item,index }) => (
    <View>
      <TouchableOpacity>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={item.src} style={[{ width: (width-32) / 3 }, { height: (width-32) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { marginLeft: 2 } : { marginLeft: 0 } ]} />
      </View>
      </TouchableOpacity>   
    </View>
  );
  return(
    <View style={{paddingLeft:16, paddingRight:16, backgroundColor: '#fcfcfc'}}>
      <ScrollView>
        <View style={{flexDirection:'row',alignItems: 'center',marginVertical:30}}>
          <TouchableOpacity onPress={()=>{ navigation.navigate("MyProfile")}}>
          <Image source={require('../../android/app/src/assets/fonts/김민희.jpg')} 
          style={{width:80,height:80, borderRadius:52, marginRight:10}}/>
          </TouchableOpacity> 
          <Text style={{fontSize:20}}>민희님의 상의 <Text style={{fontSize:14, color:'#707070'}}>10 </Text> </Text>                     
        </View>
        <FlatList style={{flexDirection : "column"}}
          data={SangeuiFeedData} 
          renderItem={renderItem} 
          keyExtractor={item => item.id} 
          numColumns={3}           
        />
      </ScrollView>
    </View>

  );
}

export default SangeuiFeed;