import React from 'react';
import { StyleSheet, View, Text, Alert} from 'react-native';
// import ActionButton from 'react-native-action-button';
import { FloatingAction } from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/Ionicons';

const actions = [{
  text: 'Accessibility',
  icon: require('../assets/pngs/addClothes.png'),
  name: 'bt_accessibility',
  position: 2
}, {
  text: 'Language',
  icon: require('../assets/pngs/addClothes.png'),
  name: 'bt_language',
  position: 1
}, {
  text: 'Location',
  icon: require('../assets/pngs/addClothes.png'),
  name: 'bt_room',
  position: 3
}, {
  text: 'Video',
  icon: require('../assets/pngs/addClothes.png'),
  name: 'bt_videocam',
  position: 4
}];


const addClothes = () => {


    return (
        <>
        <Text>addClothes screen</Text>
        <View style={styles.container}>
          {/* <Text>
            Floating Action example
          </Text> */}
          <FloatingAction
            actions={actions}
            onPressItem={name => {
              Alert.alert("Icon pressed", `the icon ${name} was pressed`);
            }}
          />
        </View>
      </>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black'
    },
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
    fixed: {
      position: 'absolute',
      right: 16,
      bottom: 16, //하단탭 기준 16 offset 자동으로 됨.
    },
    container: {
      flex: 1,
      backgroundColor: "#fff"
    }
  });

export default addClothes;