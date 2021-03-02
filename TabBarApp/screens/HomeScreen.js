import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
//import { useTheme } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data = {images}
        renderItem = {({ item }) => {
            <Image source={{uri: item.uri}} />
        }}
      />
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});