import React  from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';

const MyProfileStoryData = [
    { id: '1',
      title: 'First Item',
      src: require('../../android/app/src/assets/fonts/옷장버튼.png'),
      navi:"Closet"
    },
    { id: '2',
      title: 'Second Item',
      src: require('../../android/app/src/assets/fonts/예일.png'),
    },
    { id: '3',
      title: 'Third Item',
      src: require('../../android/app/src/assets/fonts/예일.png'),
    },
    { id: '4',
      title: 'Third Item',
      src: require('../../android/app/src/assets/fonts/예일.png'),
    },
    { id: '5',
      title: 'Third Item',
      src: require('../../android/app/src/assets/fonts/예일.png'),
    },
    { id: '6',
      title: 'Third Item',
      src: require('../../android/app/src/assets/fonts/예일.png'),
    },
    { id: '7',
      title: 'Third Item',
      src: require('../../android/app/src/assets/fonts/예일.png'),
    },
    { id: '8',
    title: 'Third Item',
    src: require('../../android/app/src/assets/fonts/예일.png'),
    },
    { id: '9',
    title: 'Third Item',
    src: require('../../android/app/src/assets/fonts/예일.png'),
    },
    { id: '10',
    title: 'Third Item',
    src: require('../../android/app/src/assets/fonts/예일.png'),
    },  
];


const MyProfileStory = ({navigation}) => {
    const renderItem = ({ item }) => (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(item.navi)}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={item.src} style={[styles.storyimage]} />
            </View>
            </TouchableOpacity>   
        </View>
        );


    return (
        <View style={{padding:6, borderColor:'#dfdfdf', borderTopWidth:1,borderBottomWidth:1}}>
            <Text style={{fontSize:11}} >옷장</Text> 
            <FlatList
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                data={MyProfileStoryData} 
                renderItem={renderItem} 
                keyExtractor={item => item.id} 
                // numColumns={3}   horizontal 없을 때 쓰자!! ex) 피드                      
            />
        </View>
    );
}

export default MyProfileStory;

const styles = StyleSheet.create({
    storyimage: {
        width:60, 
        height:60, 
        borderRadius:52, 
        marginHorizontal:7
    },
});

{/* <ScrollView horizontal={true} style={{flexDirection:'row', /*paddingTop:10, paddingBottom:10}} >
<TouchableOpacity onPress={() => navigation.navigate("Closet")} >
    <Image source={require('../../android/app/src/assets/fonts/옷장버튼.png')}
    style={[styles.storyimage]}/>
</TouchableOpacity>
<Image source={require('../../android/app/src/assets/fonts/김민희.jpg')}
style={[styles.storyimage]}/>
<Image source={require('../../android/app/src/assets/fonts/김민희.jpg')}
style={[styles.storyimage]}/>
<Image source={require('../../android/app/src/assets/fonts/김민희.jpg')}
style={[styles.storyimage]}/>
<Image source={require('../../android/app/src/assets/fonts/김민희.jpg')}
style={[styles.storyimage]}/>
<Image source={require('../../android/app/src/assets/fonts/김민희.jpg')}
style={[styles.storyimage]}/>
<Image source={require('../../android/app/src/assets/fonts/김민희.jpg')}
style={[styles.storyimage]}/>
<Image source={require('../../android/app/src/assets/fonts/김민희.jpg')}
style={[styles.storyimage]}/>
<Image source={require('../../android/app/src/assets/fonts/김민희.jpg')}
style={[styles.storyimage]}/>
<Image source={require('../../android/app/src/assets/fonts/김민희.jpg')}
style={[styles.storyimage]}/>
</ScrollView> // 플랫리스트 자리에 들어갈꺼*/}