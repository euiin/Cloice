import React from 'react';
import { Text, FlatList, Image, View, Dimensions, TouchableOpacity} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import SangeuiFeedData from './ClosetScreens/SangeuiFeedData';

const initialLayout = { width: Dimensions.get('window').width };
var { height, width } = Dimensions.get('screen');


const FirstRoute = () => {
    const renderItem = ({ item,index }) => (
        <View>
          <TouchableOpacity>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={item.src} style={[{ width: (width-32) / 3 }, { height: (width-32) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { marginLeft: 2 } : { marginLeft: 0 } ]} />
          </View>
          </TouchableOpacity>   
        </View>
      );
    return(
    <FlatList style={{flexDirection : "column"}}
        data={SangeuiFeedData} 
        renderItem={renderItem} 
        keyExtractor={item => item.id} 
        numColumns={3} />    
    );
}

const SecondRoute = () => {
    const renderItem = ({ item,index }) => (
        <View>
          <TouchableOpacity>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={item.src} style={[{ width: (width-32) / 3 }, { height: (width-32) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { marginLeft: 2 } : { marginLeft: 0 } ]} />
          </View>
          </TouchableOpacity>   
        </View>
      );
    return(
    <FlatList style={{flexDirection : "column"}}
        data={SangeuiFeedData} 
        renderItem={renderItem} 
        keyExtractor={item => item.id} 
        numColumns={3} />    
    );
}

// const  = ({ navigation }) => {
export default function AddPostScreen() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: '코디'},
      { key: 'second', title: '북마크' },
    ]);

    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
    });

    const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: '#99D1E9', height:4}}
          style={{ backgroundColor: '#ffffff' }}
          renderLabel={({route, color}) => (
            <Text style={{ color: 'black', margin: 8 }}>
              {route.title}
            </Text>
          )}
          pressColor='#cgcgcg' //회색으로 할까 고민중,
        />
    );

    return (
        <View style={{paddingLeft:16, paddingRight:16, backgroundColor: '#Fcfcfc'}}>
            <View style={{alignItems: "center",borderColor:'#dfdfdf', borderBottomWidth:1,paddingVertical:10}}>
                <Text style={{fontSize:14, color:'#707070'}}>룩북 만들기</Text>
            </View>
            <TabView //원래 View로 감싸고 있었다. 
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
            />
        </View>
    );
}
