import * as React from 'react';
import HomeScreen from './TopTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Image} from 'react-native';

const HomeStack = createStackNavigator();
const HomeStackScreen = ({navigation}) =>(
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#FDEEF9',
      height:100,
      }
  }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title:'',
      headerLeft: () => (
          <Icon.Button 
              name="bars" size={20} color="#000" 
              backgroundColor="transparent" 
              onFocus="none"
              onPress={() => navigation.openDrawer()}
          />
      ),
      headerRight:() =>
          <Image 
            source={require('../assets/logo.png')}
            style={{ width:40 , height:30 , marginRight:10}}  
        />
      }} />
  </HomeStack.Navigator>
  );
  export default HomeStackScreen;