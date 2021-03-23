import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import FirstAppStackScreen from '../screens/FirstAppScreen';
import RegisterStackScreen from '../screens/RegisterScreen';
import LoginStackScreen from '../screens/LoginScreen';
import HomeStackScreen from '../screens/HomeStackScreen';
import QuestionnaireScreen from '../screens/QuestionnaireScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import UpImageUserScreen from '../screens/UpImageUserScreen';

import {DrawerContent} from '../screens/DrawerContent';



const Drawer = createDrawerNavigator();


function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props =><DrawerContent {...props}/>}>
        <Drawer.Screen name="FirstApp" component={HomeStackScreen} />
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen  name="Login" component={LoginStackScreen}  />
        <Drawer.Screen name="Register" component={RegisterStackScreen} />
        <Drawer.Screen name="Question" component={QuestionnaireScreen} />
        <Drawer.Screen name="MyProfile" component={MyProfileScreen} />
        <Drawer.Screen name="UserProfile" component={UserProfileScreen} />
        <Drawer.Screen name="UpImageUser" component={UpImageUserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;