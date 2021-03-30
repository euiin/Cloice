import React from 'react';
import { View, Image, Text, Button, StyleSheet,
   TouchableOpacity, ScrollView, Dimensions, FlatList, SafeAreaView } from 'react-native';
import SangeuiFeedData from '../ClosetScreens/SangeuiFeedData';
import {AddPostContext} from './AddPostContext';

const initialLayout = { width: Dimensions.get('window').width };
var { height, width } = Dimensions.get('screen');

const SangeuiPostGallery = () => {
  const renderItem = ({ item,index }) => (
      <View>
        <TouchableOpacity
        onPress={ () => {}}>              
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={item.src} style={[{ width: (width-32) / 4 }, { height: (width-32) / 4 }, { marginBottom: 2 }, index % 4 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 } ]} />
        </View>
        </TouchableOpacity>   
      </View>
    );
  
    return (
        <FlatList style={{flexDirection : "column", flexGrow: 1}}
        data={SangeuiFeedData} 
        renderItem={renderItem} 
        keyExtractor={item => item.id} 
        numColumns={4}        
      />
    )
}
export default SangeuiPostGallery;