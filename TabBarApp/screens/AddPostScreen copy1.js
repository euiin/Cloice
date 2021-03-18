import React from 'react';
import { Text, FlatList, Image, View, Dimensions, Pressable,TouchableOpacity, StyleSheet} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ScrollView, TapGestureHandler } from 'react-native-gesture-handler';
import SangeuiPost from './AddPostScreens/SangeuiPost';
import HaeuiPost from './AddPostScreens/HaeuiPost';

const initialLayout = { width: Dimensions.get('window').width };
var { height, width } = Dimensions.get('screen');

const tabs = [
  { tabLabel: '상의',tabNo:0,},
  { tabLabel: '하의',tabNo:1,},
  { tabLabel: '아우터',tabNo:2,},
  { tabLabel: '신발',tabNo:3},
  { tabLabel: '모자',tabNo:4},
  { tabLabel: '액세서리',tabNo:5},
];



export default function AddPostScreen() {
  const [pageNo, setPageNo] = React.useState(0);
  const [pressed, setPressed] = React.useState(
    {pr: false,},
    {pr: false,},
    {pr: false,},
    {pr: false,},
    {pr: false,},
    {pr: false,},)
    
  const renderSwitch=(pageNo)=> {
    switch(pageNo) {
      case 0:
        return <SangeuiPost/>;
      case 1:
        return <HaeuiPost/>;
      case 2:
        return <SangeuiPost/>;
      case 3:
        return <HaeuiPost/>;
      case 4:
        return <HaeuiPost/>;
      case 5:
        return <HaeuiPost/>;
      default:
        return <SangeuiPost/>;
    }
  };
  const changePressed=(pageNo)=>{
    switch(pageNo) {
      case 0:
        setPressed({pr: true,}, {pr: false,},{pr: false,},
          {pr: false,},{pr: false,},{pr: false,});
          return;
      case 1:
        setPressed({pr: false,}, {pr: true,},{pr: false,},
          {pr: false,},{pr: false,},{pr: false,});
          return;
      case 2:
        setPressed({pr: false,}, {pr: false,},{pr: true,},
          {pr: false,},{pr: false,},{pr: false,});
          return;
      case 3:
        setPressed({pr: false,}, {pr: false,},{pr: false,},
          {pr: true,},{pr: false,},{pr: false,});
          return;
      case 4:
        setPressed({pr: false,}, {pr: false,},{pr: false,},
          {pr: false,},{pr: true,},{pr: false,});
          return;
      case 5:
        setPressed({pr: false,}, {pr: false,},{pr: false,},
          {pr: false,},{pr: false,},{pr: true,});
          return;
      default:
        return;
    }
  };

  return (
    <View style={{paddingHorizontal:16, backgroundColor: '#Fcfcfc'}}>
      <View style={{alignItems: "center",borderColor:'#dfdfdf', borderBottomWidth:1,paddingVertical:10}}>
          <Text style={{fontSize:14, color:'#707070'}}>룩북 만들기</Text>
      </View>
      <View style={{ width:'100%', height: width-55,}}>

      </View>
      <ScrollView horizontal style={{borderColor:'#dfdfdf', borderTopWidth:1,borderBottomWidth:1}}>
      {tabs.map((tabs,index) => {
        return(
          <TouchableOpacity
            activeOpacity={1}
            underlayColor="#DDDDDD"
            selectedBackgroundColor="pink"
            onPress={()=>{setPageNo(tabs.tabNo),changePressed(pageNo)}}
            style= { pressed[0].pr ? styles.clickT : styles.clickF}
            >
            <Text style={{fontSize:14}} key={index}>{tabs.tabLabel}</Text>

          </TouchableOpacity>
        )
      })}          
      </ScrollView>
      <View >
      {renderSwitch(pageNo)}
      </View>
    </View>
  );    
}

// {{tabs[index].click ? style=style.clickTrue : style=style.clickFalse}}


const styles = StyleSheet.create({
  clickT: {
    backgroundColor: '#dfdfdf',
    elevation: 5,
    shadowOffset: {width: 2, height: 4},
    paddingHorizontal:20,paddingVertical:5,
    marginHorizontal:8,marginVertical:12,borderRadius: 5,
  },
  clickF: {
    backgroundColor: '#ffffff',
    elevation: 5,
    shadowOffset: {width: 2, height: 4},
    paddingHorizontal:20,paddingVertical:5,
    marginHorizontal:8,marginVertical:12,borderRadius: 5,
  },
});




// const renderTabBar = props => (
//   <ScrollView horizontal={true} >
//   {tabs.map((tabs) => {
//     return(
//       <Pressable
//         onPress={()=>{}
//         }>
//         <Text>{tabs.tabNo}</Text>
//       </Pressable>
//     )
//   })}
//   </ScrollView>
// );