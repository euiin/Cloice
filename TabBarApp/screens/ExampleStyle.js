import React from 'react';
import { Modal, StyleSheet, View, Text, TextInput, Alert, Image, TouchableOpacity } from 'react-native';


const ExampleStyle = ({navigation}) => {

    const [data, setData] = React.useState({
        show: false,
    })

    const show = () => {
        setData({
            ...data,
            show: true
        });
    }

    const close = () => {
        setData({
            ...data,
            show: false
        });
    }

    return(
        <>
            <View>
                <Text>example</Text>
            </View>

            <Modal
                animationType={'fade'}
                transparent={true}
                visible={data.show}
                onRequestClose={close}
            >

            </Modal>
        </>
    )
}

export default ExampleStyle