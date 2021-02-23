import React, {useState} from 'react';

import {
  View, StyleSheet, Button, Alert 
} from 'react-native';


const App = () => {

  const goAlert = () =>
      Alert.alert(
        "~~님, Cloice 가입이 완료되었습니다.",             // 첫번째 text: 타이틀 제목
        "로그인을 진행해주세요.",                         // 두번째 text: 그 밑에 작은 제목
      [                              // 버튼 배열
        {
          text: "네",                              // 버튼 제목
          onPress: () => console.log("회원가입 완료"),     //onPress 이벤트시 콘솔창에 로그를 찍는다
          style: "cancel"
        },
        // { text: "네", onPress: () => console.log("그렇다는데") }, //버튼 제목
      ],
      { cancelable: false }
    );

  return (
    <Button title={"학생 체크"} onPress={goAlert} />
  );
};

export default App;
