import React from 'react';
import {
    Text,
    FlatList,
    Image
} from 'react-native';

const AddPostScreen = ({ navigation }) => {
    const [images, setImages] = React.useState([]);

    return (
        <View>
            <FlatList
                data = {images}
                renderItem = {({ item }) => {
                    <Image source={{uri: item.url}} />
                }}
            />
        </View>
    );
}

export default AddPostScreen;