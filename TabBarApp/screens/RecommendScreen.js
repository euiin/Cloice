import React from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

const RecommendScreen = () => {
    return (
        <View style={styles.container}>
            <Text>hello</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
    },
})

export default RecommendScreen;