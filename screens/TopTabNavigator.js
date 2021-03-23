import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { 
  View, 
} from 'react-native'; 
 
import Home from './HomeScreen'; 
import ListChatScreen from './ListChatScreen';
import Icon from 'react-native-vector-icons/FontAwesome' 

const Tab = createMaterialBottomTabNavigator();



export default function MyTabs() {
  return (
    <View style={{ flex: 1}}>
   {/* edit here */}
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#FA6FFD"
      inactiveColor="#000000"
      barStyle={{ backgroundColor: '#ffff' }}
      tabBarOptions={{
        activeTintColor: '#FA6FFD',
        inactiveTintColor: '#000000',
        labelStyle: {  color:'#FA6FFD'},
        showIcon: true,  
        showLabel:false, 
        style: { backgroundColor: '#FDEEF9' }
      }}
    >
      <Tab.Screen
        name="หน้าแรก"
        component={Home}
        options={{ tabBarIcon:({tintColor, focused})=>(  
          <Icon  
              name={focused ? 'users' : 'users'}  
              color={tintColor}  
              size={20}  
          />  
      )}}
      />
      <Tab.Screen
        name="แชท"
        component={ListChatScreen}
        options={{ tabBarIcon:({tintColor, focused})=>(  
          <Icon  
              name={focused ? 'comment' : 'comment'}  
              color={tintColor}  
              size={20}  
          />  
      )}}
      />
    </Tab.Navigator>
    </View>
  );
}