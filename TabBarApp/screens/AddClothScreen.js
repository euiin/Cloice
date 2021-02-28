import React from 'react';
import {
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IIcon from 'react-native-vector-icons/Ionicons';
import { icons } from '../components';

const AddClothScreen = ({ navigation }) => {
    const [images, setImages] = React.useState([]);

    const handleUpload = () => {
        launchImageLibrary({ maxWidth: 500, maxHeight: 500 }, (response) => {
            if(response.didCancel) {
                return;
            }

            const img = {
                uri: response.uri,
                type: response.type,
                name: response.fileName
            }
        });


    }

    const options = { //home 화면에만 색깔 적용
        title: 'Cloice', // 이거 안쓰면 원래 이름인 Home으로 적용된다.
        headerTitleAlign: 'center', 
        headerTitleStyle: {
          fontFamily: 'DancingScript',
          fontSize: 30
        },
        headerRight: () => (
          <Icon.Button name="menu" color='#000000' size={25} 
          backgroundColor="#ffffff" onPress={handleUpload}>
          </Icon.Button>
        ),
        headerLeft: () => (
          <IIcon.Button name="search" color='#000000' size={25} 
          backgroundColor="#ffffff" onPress={() => navigation.openDrawer()}>
          </IIcon.Button>
        )
      }


    React.useLayoutEffect(() => {
        navigation.setOptions(options);
    }, [navigation])

    return (
        <View>
            <Text>
                AddClothScreen
            </Text>
            <FlatList
                data = {images}
                renderItem = {({ item }) => {
                    <Image source={{uri: item.url}} />
                }}
            />
        </View>
    );
}

export default AddClothScreen;