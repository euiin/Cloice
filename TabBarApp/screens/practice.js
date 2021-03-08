import React, { useCallback } from 'react';
import { 
    TouchableOpacity, 
    Text } from 'react-native';

import { useNavigation, CommonActions } from '@react-navigation/native';

const Component = (props) => {
    const navigation = useNavigation();

    const onPress = useCallback(() => {
        navigation.dispatch(CommonActions.reset(
            {
                index: 0, 
                routes: [{ 
                    name: 'Home', // <-- 홈으로 스택 초기화 
                    params: { 
                        param1: 'value' }, // <-- 전달할 파라미터 }, 
                    }
                ]
            })
        );
    }, [navigation]);

    return (
    <TouchableOpacity onPress={onPress}>
        <Text>
            초기화
        </Text>
    </TouchableOpacity>
    );
}