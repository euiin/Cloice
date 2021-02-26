/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import FirstScreen from './screens/FirstScreen'
import MainTabScreen from './screens/MainTabScreen';
import MyProfile from './screens/MyProfile';
import Setting from './screens/Setting';
// import Cart from './screens/Cart';
import Login from './login/Login';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { DrawerContent} from './screens/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {

  const [isLoading, setIsLoading] = React.useState(true);

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
    (<>
        <NavigationContainer>
        <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/>}
        initialRouteName="Home" // 동영상에서는 없애줌
        drawerPosition= "right" //drawer가 오른쪽에 있어서 왼쪽으로 잡아당기면 열린다.
        >
          <Drawer.Screen name="Home" component={MainTabScreen} />
          <Drawer.Screen name="MyProfile" component={MyProfile} />
          <Drawer.Screen name="Setting" component={Setting} />
          <Drawer.Screen name="Cart" component={Login} />
        </Drawer.Navigator>

        </NavigationContainer>
      </>
    )
  );
}

export default App;
   