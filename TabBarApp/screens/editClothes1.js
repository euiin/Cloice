import React from 'react';
import { StyleSheet, View, Text, Alert, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const editClothes1 = ({ route, navigation }) => {
  const { image } = route.params;
  const imageURI = "data:" + image.mime + ";base64," + image.data;


  return (
    <>
        <View style = {styles.container}>
          <Image  //dashed line 고정
            source={require('../assets/pngs/dashedLine.png')}
            style={{
              width: '80%',
              resizeMode: 'contain',
              position: 'absolute',
              top: 30,   //30만큼 띄웠으니까 원들은 margintop 해주기
            }}
          />
          <View style={{   //원 세개
            flexDirection: 'row',
            width: '80%',
            marginTop: 22,
            justifyContent: 'space-between'
          }}>
            <View style={styles.Circle} />
            <View style={styles.emptyCircle} />
            <View style={styles.emptyCircle} />
            
          </View>
          <View style={{   //글자들
            flexDirection: 'row',
            width: '87%',
            marginTop: 8,
            justifyContent: 'space-between'
          }}>
            <Text style={styles.nowText}>배경제거</Text>
            <Text style={styles.Text}>정보입력</Text>
            <Text style={styles.Text}>추가입력</Text>
          </View>

          <View style={{
            height: 180,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
            <Image style={{height:'100%', width:'100%', resizeMode: 'contain'}} source = {{uri: imageURI}} />
          </View>
            
          <View style={{
            width: '100%',
            alignItems: 'center',
            position: 'absolute',  //버튼 위치는 아래에고정
            bottom: 20,
          }}>
            <TouchableOpacity
              style= {styles.NextButtonT}
              onPress={()=>{ navigation.navigate("editClothes2", {imageURI: imageURI}) }}
              >
              <Text style={styles.NextButtonText}>다음</Text>
            </TouchableOpacity>
          </View>
  
        </View>
        </>
      )
  }
  
  const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        height: '100%',
        backgroundColor: '#fcfcfc'
      },
      Circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#99d1e9",
        borderColor: "#70707099",
        borderWidth: 1.5,
      },
      emptyCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#fff",
        borderColor: "#70707099",
        borderWidth: 1.5,
      },
      Text: {
        fontFamily: 'NanumSquareR',
        fontSize: 12,
      },
      nowText: {
        fontFamily: 'NanumSquareB',
        fontSize: 12,
      },
      subtitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
      subtext: {
        fontFamily: 'NanumSquareR',
        fontSize: 16,
        marginRight: 5,
      },
      NextButtonT: {
        width: 250, //이거 퍼센트로 해야하나?
        height: 44,
        backgroundColor: '#41b9ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
      },
      NextButtonText: {
        fontFamily: 'NanumSquareR',
        fontSize: 14,
        color: '#fff'
      },
});

export default editClothes1;




// import React from 'react';
// import {
//   AppRegistry,
//   Image,
//   PixelRatio,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import ImagePicker from 'react-native-image-picker';

// export default class App extends React.Component {
//   state = {
//     avatarSource: null,
//   };

//   constructor(props) {
//     super(props);

//     this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
//   }

//   removeBackground = () => {
//     const data = this.state.avatarSource
//     console.log(data);
//     const formData = new FormData();
//     formData.append('photo', {
//       uri: this.state.avatarSource.uri,
//       type: 'image/png',
//       name: 'photo'
//     });

//     formData.append('size', 'auto');

//     return fetch('https://api.remove.bg/v1.0/removebg', {
//       method: 'POST',
//       headers: {
//         'X-API-Key': "zS5v1VuTj44hBaBmZ5Gwv4ca"
//       },
//       body: formData
//     }).then(res => {
//       if (!res.ok) {
//         return res.text().then(text => {
//           let message = text
//           try {
//             const json = JSON.parse(message)
//             if (json && json.errors && json.errors[0]) {
//               message = json.errors[0].title
//             }
//           } catch (err) { }
//           throw new Error(message)
//         })
//       }
//       return res.blob()
//     })
//       .then(nsdata => {
//         this.setState({
//           avatarSource: nsdata
//         })
//       })
//       .catch(err => {
//         console.error(err)
//       })
//   }

//   selectPhotoTapped() {
//     const options = {
//       quality: 1.0,
//       maxWidth: 500,
//       maxHeight: 500,
//       storageOptions: {
//         skipBackup: true,
//       },
//     };

//     ImagePicker.showImagePicker(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled photo picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         let source = { uri: response.uri };

//         // You can also display the image using data:
//         // let source = { uri: 'data:image/jpeg;base64,' + response.data };

//         this.setState({
//           avatarSource: source,
//         });
//       }
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         {/* <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
//           <View
//             style={[
//               styles.avatar,
//               styles.avatarContainer,
//               { marginBottom: 20 },
//             ]}
//           >
//             {this.state.avatarSource === null ? (
//               <Text>Select a Photo</Text>
//             ) : (
//                 <Image style={styles.avatar} source={this.state.avatarSource} />
//               )}
//           </View>
//         </TouchableOpacity> */}

//         <TouchableOpacity onPress={this.removeBackground}>
//           <View
//             style={[
//               styles.avatar,
//               styles.avatarContainer,
//               { marginBottom: 20 },
//             ]}
//           >
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   avatarContainer: {
//     borderColor: '#9B9B9B',
//     borderWidth: 1 / PixelRatio.get(),
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   avatar: {
//     borderRadius: 75,
//     width: 150,
//     height: 150,
//   },
// });