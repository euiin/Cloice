import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Closet = ({}) => {
    return (
        <View>
        <Text>Closet Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked')}
        />
        </View>
      );
  };
export default Closet;
  
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });