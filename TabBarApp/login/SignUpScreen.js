import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  ToastAndroid
} from 'react-native';
import Axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import DatePicker from 'react-native-date-picker';
import { ButtonGroup } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import DatePicker from 'react-native-datepicker';

const SignUpScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        nickname: '',
        check_validemail: false,
        check_emaildup: false,  //DB에서 중복된 거 있으면 true로 변경하기 어케 ??? 이거 바꾸기!!!!!!!!!!!!
        check_validpw: false,
        check_userpw: false,
        secureTextEntry: true,
        check_validnick: false,
        check_nickdup: false,  //이거 바꾸기!!!!!!!!!!!!!11
        userGender: '',
        femaleButton: 'grey',
        maleButton: 'grey',
        birthday: '',
        selectedIndex: null,
        tearmsall: false,
        terms1: false,
        terms2: false,
        terms3: false,
        terms4: false,
        termssms: false,
        termsemail: false,
    })

    const checkEmailForm = (val) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(val) === true) {
            Axios.post("http://10.0.2.2:3333/dupemail", {
                email: val,
            }).then((response) => {
                if(response.data.message) {
                    //중복된 이메일 있음
                    setData({
                        ...data,
                        email: val,
                        check_validemail: true,
                        check_emaildup: false,
                    });
                } else {
                    //중복된 이메일 없음
                    setData({
                        ...data,
                        email: val,
                        check_validemail: true,
                        check_emaildup: true,
                    });
                }
            }).catch((error) => {
                console.log("에러:", error);
                throw error;
            });
        } else {
            //이메일 형식이 틀린경우
            setData({
                ...data,
                email: val,
                check_validemail: false,
            });
        }
    }

    const checkPwForm = (val) => {
        const reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (reg.test(val) === true ) {
        // if (val.trim().length>=2) {
            setData({
                ...data,
                password: val,
                check_validpw: true,
            });
        } else {
            setData({
                ...data,
                password: val,
                check_validpw: false,
            });
        }
    }

    // const handlePasswordChange = (val) => {
    //     setData({
    //         ...data,
    //         password: val,
    //     });
    // }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const checkUserPw = (val) => {
        if (val==data.password) {
            setData({
                ...data,
                check_userpw: true,
            });
        } else {
            setData({
                ...data,
                check_userpw: false,
            });
        }
    }

    const checkValidNick = (val) => {
        if (val.length>=2 && val.length<=10) {
            Axios.post("http://10.0.2.2:3333/dupnick", {
                nickname: val,
            }).then((response) => {
                if(response.data.message) {
                    //중복된 닉네임 있음
                    setData({
                        ...data,
                        nickname: val,
                        check_nickdup: false,
                        check_validnick: true,
                    });
                } else {
                    //중복된 닉네임 없음
                    setData({
                        ...data,
                        nickname: val,
                        check_nickdup: true,
                        check_validnick: true,
                    });
                }
            }).catch((error) => {
                console.log("에러:", error);
                throw error;
            });
        } else {
            //형식에 맞지 않는 닉네임
            setData({
                ...data,
                nickname: val,
                check_validnick: false,
            });
        }
    }

    const genderbuttons = ['여성', '남성']

    const updateIndex = (index) => {
        if (index ==0) {
            setData({
            ...data,
            selectedIndex: index,
            userGender: 'female',
            });
        }
        else if (index ==1) {
            setData({
            ...data,
            selectedIndex: index,
            userGender: 'male',
            });
        }
    }

    const updateTermsAll = () => {
        if (data.tearmsall) {
            setData({
                ...data,
                tearmsall: !data.tearmsall,
                terms1: false,
                terms2: false,
                terms3: false,
                terms4: false,
                termssms: false,
                termsemail: false,
            });
        }
        else {
            setData({
                ...data,
                tearmsall: !data.tearmsall,
                terms1: true,
                terms2: true,
                terms3: true,
                terms4: true,
                termssms: true,
                termsemail: true,
            });
        }
    }

    const updateTerms1 = () => {
        setData({
            ...data,
            terms1: !data.terms1
        });
    }

    const updateTerms2 = () => {
        setData({
            ...data,
            terms2: !data.terms2
        });
    }

    const updateTerms3 = () => {
        setData({
            ...data,
            terms3: !data.terms3
        });
    }

    const updateTerms4 = () => {
        if (data.terms4) {  //false면 true로 바꾸고, 아래 두개 체크하기
            setData({
            ...data,
            terms4: !data.terms4,
            termssms: false,
            termsemail: false,
            });
        }
        else {
            setData({
                ...data,
                terms4: !data.terms4,
                termssms: true,
                termsemail: true,
                });
        }
        
    }

    const updateTermsSms = () => {
        setData({
            ...data,
            termssms: !data.termssms
        });
    }

    const updateTermsEmail = () => {
        setData({
            ...data,
            termsemail: !data.termsemail
        });
    }

    const isValidUser = (data.check_validemail && data.check_emaildup && data.check_userpw && data.check_validnick && data.check_nickdup && data.terms1 && data.terms2 && data.terms3 && (data.userGender!=''))

    const registerHandler = () => {
        console.log("회원 가입 버튼 누름")
        //회원정보 DB에 등록하기
        Axios.post("http://10.0.2.2:3333/register", {
            email: data.email,
            password: data.password,
            nickname: data.nickname,
            gender: data.userGender
        }).then((response) => {
            if(response.data.message) {
                ToastAndroid.showWithGravity("회원 가입 실패",
                                    ToastAndroid.SHORT,
                                    ToastAndroid.CENTER);
                console.log("로그인 실패!")
            } else {
                console.log("로그인 성공!")
                Alert.alert(
                    "(data.nickname) + 님, Cloice 가입이 완료되었습니다.",             // 첫번째 text: 타이틀 제목
                    "로그인을 진행해주세요.",                         // 두번째 text: 그 밑에 작은 제목
                [                              // 버튼 배열
                    {
                    text: "네",                              // 버튼 제목
                    onPress: () => navigation.navigate('LoginScreen'),     //onPress 이벤트시 콘솔창에 로그를 찍는다
                    style: "cancel"
                    },
                    // { text: "네", onPress: () => console.log("그렇다는데") }, //버튼 제목
                ],
                { cancelable: false }
                );
            }
        }).catch((error) => {
            ToastAndroid.showWithGravity("에러 발생",
                                            ToastAndroid.SHORT,
                                            ToastAndroid.CENTER);
            console.log("에러:", error);
            throw error;
        });
    }

    return (   /*리턴하는 건 하나로 묶어줘야 함*/
        <>
        <View style={styles.header}>
            <Feather
                    name="chevron-left"
                    color="#99d1e9"
                    size={32}
                    style={styles.minilogo}
                    onPress={() => navigation.navigate('LoginScreen')}
            />
            <Text style={styles.maintext}>회원가입</Text>
            <Feather    //정렬용 ㅠㅠ
                name="chevron-left"
                color="#fff"
                size={32}
                style={styles.minilogo}
            />
        </View>

        <KeyboardAwareScrollView style={styles.container}>
            <View style={
                [{marginTop: 5,
                borderBottomColor: '#DFDFDF',
                borderBottomWidth: 0.7,
                padding: 15,}]} >

                <Text style={styles.title}>정보 입력</Text>
            
                <View style={styles.alignsub}>
                    <Text style={styles.subtitle}>아이디 (이메일)</Text>
                    <FontAwesome
                        name="star"
                        color="red"
                        size={5}
                    />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='example@domain.com'
                    autoCapitalize="none"
                    // placeholderTextColor='#b5b5b5'
                    onChangeText={(val)=>checkEmailForm(val)}
                />
                
                {data.email != '' ?
                    data.check_validemail ?   //애니메이션 바꾸기
                        data.check_emaildup ?
                            (<Animatable.View animation= "bounceIn" style={[styles.alignsub, {marginTop: 5, marginLeft: 5}]}>
                                <Feather
                                name="check"
                                color="#99d1e9"
                                size={20}
                                />
                            <Text style={[styles.notice, {color: '#99d1e9'}]}>사용할 수 있는 이메일입니다.</Text>
                            </Animatable.View>)
                        : (<Animatable.View animation= "bounceIn" style={[styles.alignsub, {marginTop: 5, marginLeft: 5}]}>
                            <Feather
                            name="x"
                            color="red"
                            size={20}
                            />
                            <Text style={[styles.notice, {color: 'red'}]}>이미 가입된 이메일 입니다.</Text>
                            </Animatable.View>)
                    : (<Animatable.View animation= "bounceIn" style={[styles.alignsub, {marginTop: 5, marginLeft: 5}]}>
                        <Feather
                        name="x"
                        color="red"
                        size={20}
                        />
                        <Text style={[styles.notice, {color: 'red'}]}>올바르지 않은 이메일 형식입니다. (나중에 중복도 알려줘야 함)</Text>
                        </Animatable.View>)
                : null
                }
                
                <View style={styles.alignsub}>
                    <Text style={styles.subtitle}>비밀번호</Text>
                    <FontAwesome
                        name="star"
                        color="red"
                        size={5}
                    />
                </View>
                <View style={styles.pwinput}>
                    <TextInput
                        style={[{color: 'black', fontSize: 12, flex:1, paddingLeft: 12,}]}
                        placeholder='8자리 이상, 영어, 숫자, 특수문자 포함'
                        autoCapitalize="none"
                        // placeholderTextColor='#b5b5b5'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => checkPwForm(val)}
                        // onChangeText={(val) => handlePasswordChange(val)}  //-->이거 하면 안됨 왜?
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                        <Feather   //가리는 경우
                            name="eye-off"
                            color="grey"
                            size={18}
                            style={styles.minilogo2}
                        /> 
                        :
                        <Feather   //보여주는 경우
                            name="eye"
                            color="grey"
                            size={18}
                            style={styles.minilogo2}
                        /> 
                        }
                    </TouchableOpacity>
                </View>
                
                {data.password != '' ?
                    data.check_validpw ?   //애니메이션 바꾸기
                        (<Animatable.View animation= "bounceIn" style={[styles.alignsub, {marginTop: 5, marginLeft: 5}]}>
                            <Feather
                            name="check"
                            color="#99d1e9"
                            size={20}
                            />
                        <Text style={[styles.notice, {color: '#99d1e9'}]}>사용할 수 있는 비밀번호입니다.</Text>
                        </Animatable.View>)
                    : (<Animatable.View animation= "bounceIn" style={[styles.alignsub, {marginTop: 5, marginLeft: 5}]}>
                        <Feather
                        name="x"
                        color="red"
                        size={20}
                        />
                        <Text style={[styles.notice, {color: 'red'}]}>영어, 숫자, 특수문자 포함 8자리 이상으로 입력해주세요.</Text>
                        </Animatable.View>)
                : null
                }


                <TextInput
                    style={styles.input}
                    placeholder='비밀번호 확인'   //로그인 화면처럼 체크 버튼 뜨게하기!!!!
                    autoCapitalize="none"
                    placeholderTextColor='#b5b5b5'
                    onChangeText={(val) => checkUserPw(val)}
                    secureTextEntry = {true}
                />

                {data.password != '' ?
                    data.check_userpw ?   //애니메이션 바꾸기
                        (<Animatable.View animation= "bounceIn" style={[styles.alignsub, {marginTop: 5, marginLeft: 5}]}>
                            <Feather
                            name="check"
                            color="#99d1e9"
                            size={20}
                            />
                        <Text style={[styles.notice, {color: '#99d1e9'}]}>비밀번호가 일치합니다.</Text>
                        </Animatable.View>)
                    : (<Animatable.View animation= "bounceIn" style={[styles.alignsub, {marginTop: 5, marginLeft: 5}]}>
                        <Feather
                        name="x"
                        color="red"
                        size={20}
                        />
                        <Text style={[styles.notice, {color: 'red'}]}>비밀번호가 일치하지 않습니다.</Text>
                        </Animatable.View>)
                : null
                }   
                
                <View style={styles.alignsub}>
                    <Text style={styles.subtitle}>닉네임</Text>
                    <FontAwesome
                        name="star"
                        color="red"
                        size={5}
                    />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='2~10자까지 입력'
                    autoCapitalize="none"
                    placeholderTextColor='#b5b5b5'
                    onChangeText={(val) => checkValidNick(val)}
                />

                {data.nickname != '' ?
                    (data.check_validnick ?   //애니메이션 바꾸기
                        (data.check_nickdup ?
                            (<Animatable.View animation= "bounceIn" style={[styles.alignsub, {marginTop: 5, marginLeft: 5}]}>
                                <Feather
                                name="check"
                                color="#99d1e9"
                                size={20}
                                />
                            <Text style={[styles.notice, {color: '#99d1e9'}]}>사용가능한 닉네임입니다.</Text>
                            </Animatable.View>)
                            : (<Animatable.View animation= "bounceIn" style={[styles.alignsub, {marginTop: 5, marginLeft: 5}]}>
                                <Feather
                                name="x"
                                color="red"
                                size={20}
                                />
                                <Text style={[styles.notice, {color: 'red'}]}>중복된 닉네임입니다.</Text>
                                </Animatable.View>
                            ))
                    : (<Animatable.View animation= "bounceIn" style={[styles.alignsub, {marginTop: 5, marginLeft: 5}]}>
                        <Feather
                        name="x"
                        color="red"
                        size={20}
                        />
                        <Text style={[styles.notice, {color: 'red'}]}>2~10자리 이내의 닉네임을 입력해주세요.</Text>
                        </Animatable.View>))
                : null
                }   

                <View style={styles.alignsub}>
                    <Text style={styles.subtitle}>성별</Text>
                    <FontAwesome
                        name="star"
                        color="red"
                        size={5}
                    />
                </View>

                <View style={{alignItems: 'center'}}>
                    <ButtonGroup
                        buttons = {genderbuttons}
                        selectedBackgroundColor="pink"   //클릭했을 때 색깔 어케 바꿈???
                        selectedIndex={data.selectedIndex}
                        containerStyle = {[{
                            width: '100%',
                            height: 40,
                            backgroundColor: '#f9f9f9',
                            marginTop: 10,
                            borderRadius: 5,
                            borderColor: '#707070',
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }]}
                        buttonContainerStyle={{height: '100%'}}
                        textStyle={[styles.subtitle, {color: '#000'}]}
                        onPress = {updateIndex}
                    />
                </View>


                <View style={styles.alignsub}>
                    <Text style={styles.subtitle}>생년월일</Text>
                </View>

                <DatePicker
                    style={styles.datePickerStyle}
                    androidMode = "spinner"
                    date={data.birthday} // Initial date from state
                    mode="date" // The enum of date, datetime and time
                    placeholder="생년월일을 입력해주세요"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                          },
                        dateInput: {
                            marginLeft: 40,
                            backgroundColor: '#f9f9f9',
                            borderRadius: 5,
                            fontSize: 12,
                            fontFamily: 'NanumSquareR',
                            borderColor: '#707070',
                            borderWidth: 1,
                            height: 40,
                        }
                    }}
                    onDateChange={(val) => {setData({
                        ...data,
                        birthday: val,
                    });}}
                />
            </View>
            
            <View style={
                [{
                borderBottomColor: '#DFDFDF',
                borderBottomWidth: 0.7,
                padding: 15,}]} >

                <Text style={[styles.title, {paddingTop: 5}]}>본인 인증</Text>
            
                <View style={styles.alignsub}>
                    <Text style={styles.subtitle}>휴대폰 번호</Text>
                    <FontAwesome
                        name="star"
                        color="red"
                        size={5}
                    />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='010-1234-5678'
                    autoCapitalize="none"
                    placeholderTextColor='#b5b5b5'
                />

                <View style={styles.alignsub}>
                    <Text style={styles.subtitle}>인증 번호</Text>
                    <FontAwesome
                        name="star"
                        color="red"
                        size={5}
                    />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='인증 번호를 입력하세요'
                    autoCapitalize="none"
                    placeholderTextColor='#b5b5b5'
                />
            </View>

            <View style={{padding: 15}}>
                <Text style={[styles.title, {paddingTop: 5}]}>약관 동의</Text>
                <TouchableOpacity 
                    style = {[styles.alignsub, {width: '100%'}]}
                    onPress={updateTermsAll}>
                    {(data.tearmsall) ?
                    <Ionicons   //동의.. 아직 모두 동의 누르고 아래꺼 체크 풀면 모두 동의 체크 풀리게는 못함 ㅜㅜ
                       //&&data.tearm1&&data.tearm2&&data.tearm3
                        name="checkmark-circle"
                        color="#99d1e9"
                        size={30}
                    /> 
                    :
                    <Ionicons   //비동의
                        name="checkmark-circle"
                        color="#dfdfdfb0"
                        size={30}
                    /> 
                    }
                    <Text style={styles.yakgwan}>약관에 모두 동의합니다.</Text>
                </TouchableOpacity>
                    
                <View style={styles.line}/>

                <TouchableOpacity 
                    style = {styles.alignsub3}
                    onPress={updateTerms1}>
                    {data.terms1 ?
                        <Ionicons   //동의
                            name="checkmark-circle"
                            color="#99d1e9"
                            size={30}
                        /> 
                        :
                        <Ionicons   //비동의
                            name="checkmark-circle"
                            color="#dfdfdfb0"
                            size={30}
                        /> 
                    }
                    <Text style={styles.yakgwan}>(필수) 만 14세 이상입니다.</Text> 
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style = {styles.alignsub3}
                    onPress={updateTerms2}>
                    {data.terms2 ?
                        <Ionicons   //동의
                            name="checkmark-circle"
                            color="#99d1e9"
                            size={30}
                        /> 
                        :
                        <Ionicons   //비동의
                            name="checkmark-circle"
                            color="#dfdfdfb0"
                            size={30}
                        /> 
                    }
                    <Text style={styles.yakgwan}>(필수) 서비스 이용약관에 동의</Text> 
                </TouchableOpacity>

                <TouchableOpacity 
                    style = {styles.alignsub3}
                    onPress={updateTerms3}>
                    {data.terms3 ?
                        <Ionicons   //동의
                            name="checkmark-circle"
                            color="#99d1e9"
                            size={30}
                        /> 
                        :
                        <Ionicons   //비동의
                            name="checkmark-circle"
                            color="#dfdfdfb0"
                            size={30}
                        /> 
                    }
                    <Text style={styles.yakgwan}>(필수) 개인정보 수집이용에 동의</Text> 
                </TouchableOpacity>

                <TouchableOpacity 
                    style = {styles.alignsub3}
                    onPress={updateTerms4}>
                    {data.terms4 ?
                        <Ionicons   //동의
                            name="checkmark-circle"
                            color="#99d1e9"
                            size={30}
                        /> 
                        :
                        <Ionicons   //비동의
                            name="checkmark-circle"
                            color="#dfdfdfb0"
                            size={30}
                        /> 
                    }
                    <Text style={styles.yakgwan}>(선택) 홍보 및 마케팅 이용에 동의</Text> 
                </TouchableOpacity>

                <View style={[styles.alignsub3, {marginLeft: 40, marginBottom: 20,}]}>
                    <TouchableOpacity 
                        style = {styles.alignmini}
                        onPress={updateTermsSms}>
                        {data.termssms ?
                            <Feather   //동의
                                name="check"
                                color="#99d1e9"
                                size={20}
                            /> 
                            :
                            <Feather   //비동의
                                name="check"
                                color="#dfdfdfb0"
                                size={20}
                            /> 
                        }
                        <Text style={styles.yakgwan}>SMS</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {styles.alignmini}
                        onPress={updateTermsEmail}>
                        {data.termsemail ?
                            <Feather   //동의
                                name="check"
                                color="#99d1e9"
                                size={20}
                            /> 
                            :
                            <Feather   //비동의
                                name="check"
                                color="#dfdfdfb0"
                                size={20}
                            /> 
                        }
                        <Text style={styles.yakgwan}>이메일</Text> 
                    </TouchableOpacity>
                </View>
                
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{  
                        textAlign: 'center',
                        fontFamily: 'NanumSquareR',
                        fontSize: 12,
                        color: '#b5b5b5',
                    }}>'선택' 항목에 동의하지 않아도 서비스 이용이 가능합니다.{"\n"}
                    개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며,{"\n"}
                    동의 거부 시 회원제 서비스 이용이 제한됩니다.
                    </Text>
                </View>
                
            </View>

            
            <View style={{alignItems:'center'}}>
                <TouchableOpacity disabled={!isValidUser}  //disabled:true면 안 눌림.
                    style={isValidUser? styles.validbutton : styles.unvalidbutton}
                    onPress = {registerHandler}
                >
                <Text style={{  
                        fontFamily: 'NanumSquareB',
                        fontSize: 16,
                        color: '#fff',
                        alignContent: 'center',
                        justifyContent: 'center',
                    }}>가입완료</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAwareScrollView>
        </>
    )
}

export default SignUpScreen;

const {height} = Dimensions.get("screen");
// const wwidth = Dimensions.get("screen").width;
const height_logo = height * 0.1;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fcfcfc',
        paddingBottom: 30,  //?????
    },
    header:{
        height: 52,
        borderBottomColor: '#99d1e9',
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    minilogo: {
        width: height_logo*0.5,
        height: '100%',
        paddingLeft: 5,
        paddingTop: 8,
        // backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    minilogo2: {
        width: height_logo*0.4,
        height: height_logo*0.4,
        padding: 6,
        // backgroundColor: 'pink',
    },
    maintext :{
        fontFamily: 'NanumSquareB',
        fontSize: 20,
    },
    title: {
        fontFamily: 'NanumSquareR',
        fontSize: 16,
        textShadowColor: 'black',
        textShadowRadius: 1.2,
    },
    subtitle: {
        fontFamily: 'NanumSquareR',
        fontSize: 14,
        marginRight: 5,
    },
    innertext: {
        fontFamily: 'NanumSquareR',
        fontSize: 12,
        color: '#b5b5b5',
    },
    alignsub: {
        flexDirection: 'row',
        marginTop: 16,
        alignItems: 'center',
    },
    alignsub2: {
        flexDirection: 'row',
        // marginTop: 10,
        justifyContent: 'space-between',
    },
    alignsub3: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        width: '100%'
    },
    alignmini: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '20%'
    },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: '#f9f9f9',
        marginTop: 10,
        padding: 12,
        color: 'black',   //입력했을 때 text 컬러
        borderRadius: 5,
        fontSize: 12,
        // fontFamily: 'NanumSquareR',
        borderColor: '#707070',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pwinput: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        backgroundColor: '#f9f9f9',
        marginTop: 10,
        // padding: 12,  ????
        // color: 'black',   //입력했을 때 text 컬러
        borderRadius: 5,
        // fontSize: 12,
        // fontFamily: 'NanumSquareR',
        borderColor: '#707070',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {   //성별 선택 버튼
        width: '48%',
        height: 40,
        backgroundColor: '#f9f9f9',
        marginTop: 10,
        padding: 12,
        color: 'black',   //입력했을 때 text 컬러
        borderRadius: 5,
        fontSize: 12,
        fontFamily: 'NanumSquareR',
        borderColor: '#707070',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    birthbutton: {   //생년월일 선택 버튼
        width: '31%',
        height: 40,
        backgroundColor: '#f9f9f9',
        marginTop: 10,
        padding: 12,
        paddingRight: 5,
        color: 'black',   //입력했을 때 text 컬러
        borderRadius: 5,
        fontSize: 12,
        fontFamily: 'NanumSquareR',
        borderColor: '#707070',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notice: {
        fontFamily: 'NanumSquareR',
        fontSize: 12,
    },
    line: {
        marginTop: 5,
        borderBottomColor: '#DFDFDFb0',  //dfdfdfb0하면 투명도 적용되는 듯
        borderBottomWidth: 0.7,
    },
    yakgwan: {
        fontFamily: 'NanumSquareR',
        fontSize: 14,
        marginLeft: 5,
    },
    validbutton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: height_logo*3.5,
        height: 48,
        marginTop: 5,
        marginBottom: 35,
        backgroundColor: '#41B9FF',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    unvalidbutton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: height_logo*3.5,
        height: 48,
        marginTop: 5,
        marginBottom: 35,
        backgroundColor: '#DFDFDF',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    datePickerStyle: {
        width: '100%',
        marginTop: 10,
    },
})