import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Dimensions, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const LoginScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_validemail: false,
        secureTextEntry: true,
        // isValidUser: false
    })

    const checkEmailForm = (val) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(val) === true ) {
            setData({
                ...data,
                email: val,
                check_validemail: true,
                // isValidUser: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_validemail: false,
                // isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    // const loginHandle = (email, password) => {

    // }

    // android:windowSoftInputMode="adjustPan"

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <View style = {{flex:1, alignItems: 'flex-start'}
                }> */}
                {/* <View style={{marginBottom: 50}}></View> */}
                <View>
                    <Text style={styles.cloice}>Cloice</Text>
                </View>
                
                <View style={styles.box}>
                    <TextInput
                        placeholder="이메일을 입력하세요"
                        style={styles.innertext}  //글씨 쓰면 검정색으로 변하게
                        autoCapitalize='none'
                        onChangeText={(val)=>checkEmailForm(val)}
                    />
                    {data.check_validemail ?   //check_text~변화가 있으면 저 아이콘 보여주기
                    <Animatable.View animation= "bounceIn">
                        <Feather 
                        name="check-circle"
                        color="green"
                        size={18}
                        style={styles.minilogo}
                        />
                    </Animatable.View>
                    : null}
                </View>
                {/* { data.isValidUser ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>이메일 형식으로 입력해주세요.</Text>
                </Animatable.View>
                } */}

                <View style={styles.box}>
                    <TextInput
                        placeholder="비밀번호를 입력하세요"
                        // placeholderTextColor="#666666"
                        // secureTextEntry={true}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.innertext}
                        autoCapitalize='none'
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                        <Feather   //가리는 경우
                            name="eye-off"
                            color="grey"
                            size={18}
                            style={styles.minilogo}
                        /> 
                        :
                        <Feather   //보여주는 경우
                            name="eye"
                            color="grey"
                            size={18}
                            style={styles.minilogo}
                        /> 
                        }
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.button}  //로그인 버튼에 그림자 넣기
                    onPress={() => {loginHandle (data.email, data.password)}}
                    >
                    <Text style={{  
                        fontFamily: 'NanumSquareB',
                        fontSize: 16,
                        color: '#fff',
                        alignContent: 'center',
                        justifyContent: 'center',
                    }}>로그인</Text>
                    </TouchableOpacity>
                
                <View style={styles.sign}>
                    <Text style={[styles.text, {marginRight: 50, height: 40, textAlignVertical: 'center'}]}>아이디 / 비밀번호 찾기</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                    >
                        <Text style={[styles.text, {height: 40, textAlignVertical: 'center' }]}>회원가입</Text>
                    </TouchableOpacity>
                </View>

            </View>  
            <View style={styles.middle}>
                <View style={styles.footer}>
                    <Text style={styles.text}>SNS로 로그인</Text>
                    <View style={styles.images}>
                        <Image
                        source={require('../assets/pngs/kakao.png')}
                        style={styles.logo}
                        />
                        <Image
                        source={require('../assets/pngs/naver.png')}
                        style={styles.logo}
                        />
                        <Image
                        source={require('../assets/pngs/google.png')}
                        style={styles.logo}
                        />
                    </View>
                    
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;

const {height} = Dimensions.get("screen");  //폰 화면 비율로 로고 위치 정하는 방법!!
// const headersize = height*1.5;
const height_logo = height * 0.1;
const {width} = Dimensions.get("screen").width;
const width_bottom = width * 0.8;

const styles = StyleSheet.create({
    container: {
        flex: 1,   //flex는 view로 보이는 것들 간의 비율!!!
        // flexGrow: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 2,  //헤더가 2/3차지
        alignItems: 'center',   //화면의 좌우 중앙 정렬
        justifyContent: 'flex-end',  //위 아래 정렬
        // marginTop: 150,
        // paddingHorizontal: -headersize
    },
    middle: {
        flex: 1,  //얘가 헤더랑의 상대적 비율
        padding: 50
    },
    footer: {
        flex: 1,
        borderTopColor: '#dfdfdf',   //이거 투명도는 어케?
        borderTopWidth: 0.7,
        alignItems: 'center',
        paddingVertical: 40,  //비율로 안하고 이렇게 해도 되나?
        paddingHorizontal: 30
    },
    cloice: {
        fontFamily: 'DancingScript',   //이거 볼드로 어케하지?
        color: '#99d1e9',
        fontSize: 56,
        marginBottom: 20,
        marginTop: 100,
        textShadowColor: '#99d1e9',
        textShadowRadius: 8,   //이상한 흐릿한 느낌 ;;;;
        // paddingTop: 50,
    },
    logo: {
        flex: 1,
        width: height_logo,
        height: height_logo,
        // 로고들 사이 간격 더 띄우고 싶은데 어케함??
    },
    minilogo: {
        width: height_logo*0.3,
        height: height_logo*0.3,
        marginTop: 12,
        marginRight: 5
        // alignItems: 'center',
    },
    images: {
        flex:1,
        flexDirection: 'row',
        // justifyContent: 'space-around'  //얘는 어케 쓰는거?
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: '#b5b5b5',
        fontFamily: 'NanumSquareR',
        fontSize: 14,
        marginBottom: 15
    },
    innertext: {
        flex: 1,
        paddingLeft: 10,
        color: '#000',
        // fontFamily: 'NanumSquareR',   //이거 secure에 안먹힘
        fontSize: 12,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: height_logo*3.6,
        height: 48,
        marginTop: 30,   //마진은 해당 컴포넌트 외부, 즉 부모 컴포넌트와 나 자신과의 여백 넓히는거 패딩은 안쪽 컴포넌트의 여백
        backgroundColor: '#41B9FF',
        borderRadius: 10,
    },
    sign: {
        flexDirection: 'row',
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',  //내부 컴포넌트 좌우 중앙 정렬
        paddingTop: 20,
    },
    box: {
        flexDirection: 'row',
        width: height_logo*3.6,
        height: 45,
        padding: 0,   //dashed border가 text로부터 모든 방향으로 16px 만큼 떨어짐.
        marginTop: 16,  //각 box 간 폭 조정
        borderColor: '#707070',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#f9f9f9'
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
})