import React from 'react';
import { View, Image, Text, Button, StyleSheet,
   TouchableOpacity, ScrollView, Dimensions, FlatList, SafeAreaView } from 'react-native';
import HaeuiFeedData from '../ClosetScreens/HaeuiFeedData'

const initialLayout = { width: Dimensions.get('window').width };
var { height, width } = Dimensions.get('screen');

const HaeuiPost = () => {
    const renderItem = ({ item,index }) => (
        <View>
          <TouchableOpacity>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={item.src} style={[{ width: (width-32) / 4 }, { height: (width-32) / 4 }, { marginBottom: 2 }, index % 4 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 } ]} />
          </View>
          </TouchableOpacity>   
        </View>
      );
    return (
        <FlatList style={{flexDirection : "column"}}
        data={HaeuiFeedData} 
        renderItem={renderItem} 
        keyExtractor={item => item.id} 
        numColumns={4} 
        windowSize={10}          
      />
    )

}

export default HaeuiPost;