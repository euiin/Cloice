import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import FirstScreen from './screens/FirstScreen'
import MainTabScreen from './screens/MainTabScreen';
import MyProfile from './screens/MyProfile';
import MyProfileStackScreen from './screens/StackScreens/MyProfileStackScreen'
import HomeScreen from './screens/HomeScreens/HomeScreen'
import Setting from './screens/Setting';
import Cart from './screens/Cart';
import Login from './login/Login';

import { DrawerContent} from './screens/DrawerContent';
import AddPostScreen from './screens/AddPostScreen';

import { AuthContext } from './components/context';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  
  
  const initialLoginState = {
    userName: null,
    userToken: null,
  }

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      //사용자가 이미 로그인 되어있는지를 확인함.
      case 'TOKEN':
        return ({
          ...prevState,
          userToken: action.token,
        });
      case 'LOGIN':
        return ({
          ...prevState,
          userName: action.id,
          userToken: action.token,
        });
      case 'LOGOUT':
        return ({
          ...prevState,
          userName: null,
          userToken: null,
        });
      case 'REGISTER':
        return ({
          ...prevState,
          userName: action.id,
          userToken: action.token,
        });
    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
      signIn: async (userEmail) => {
        const userToken = userEmail;
        try {
          await AsyncStorage.setItem('userToken', userToken)
        } catch (e) {
          console.log(e)
        }
        console.log("signIn 실행됨.")
        dispatch({ type: 'LOGIN', id: userEmail, token: userToken });
        console.log("토큰은 " + loginState.userToken)
      },
      signOut: async () => {
        console.log("signOut 실행됨.")
        try {
          await AsyncStorage.removeItem('userToken')
        } catch (e) {
          console.log(e)
        }
        dispatch({ type: 'LOGOUT' });
      },
      loginCheck: async() => {
        console.log("loginCheck 실행됨.")
        var userToken = null;
        try {
          await AsyncStorage.getItem('userToken', (err, result) => {
            userToken = result
          });
        } catch (e) {
          console.log(e)
        }
        console.log("userToken은 "+userToken)
        dispatch({ type: 'TOKEN', token: userToken });
      }
  }), [])

  const change = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  change();

  return (
    isLoading ? (
      <FirstScreen/>
    ) :
    (
      <AuthContext.Provider value = {authContext}>
        <NavigationContainer independent={true} >
          <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/>}
            initialRouteName="Home" // 동영상에서는 없애줌
            drawerPosition= "right" //drawer가 오른쪽에 있어서 왼쪽으로 잡아당기면 열린다.
            >
            <Drawer.Screen name="Home" component={MainTabScreen} />
            <Drawer.Screen name="Setting" component={Setting} />
            <Drawer.Screen name="Cart" component={Cart} />
            {(loginState.userToken == null) ? (
              <Drawer.Screen name="MyProfile" component={Login} />
              ):(
              <Drawer.Screen name="MyProfile" component={MyProfile} />)
            }
          </Drawer.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    )
  );
}

export default App;