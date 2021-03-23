import * as React from 'react';
import { 
  View, 
  Text,
  Image,
  StyleSheet, 
  Alert,

} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'



function FirstApp({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/logo.png')}/>
        <View><Text style={styles.Name_app}>TALK WITH LOVE</Text></View>
        
        <View style={styles.Box}>
            <View style={styles.INBoxButtonLogin}>
              <Button 
                  onPress={() => navigation.navigate("Register")}
                  buttonStyle={{backgroundColor: "#ffffff" }}
                  title="เริ่มต้นใช้งาน" titleStyle={{ color: '#515151', fontSize:16,fontFamily:"Roboto",width:100}}
              ></Button>
            </View>
            <View style={styles.BoxButton}>
              <Text style={styles.TextToPage1}>มีบัญชีอยู่แล้วใช่ไหม ?</Text>
              <Button 
                 onPress={() => navigation.navigate("Login")} title="เข้าสู่ระบบ"titleStyle={{ color: 'blue', fontSize:12,fontFamily:"Roboto" }}
                 type="clear"></Button>
            </View>

        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{ 
            flex: 1,
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor:"#FDEEF9" ,
            
          },
    Box:{
      flex: 0.5,
      top:100,
      alignItems: 'center', 
      justifyContent: 'center',
    },    
    Name_app :{
      fontWeight:"bold",
      fontSize:30,
      
    } ,  
    BoxButton:{
      height:45,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
     
    },
    INBoxButton:{
      margin:10,
      width:150
    },
    INBoxButtonLogin:{
      margin:10,
      width:320
    },
    Text_login:{
      margin:10,
      alignItems: 'center', 
      justifyContent: 'center'
    },
    TextToPage1:{
      color:"#515151",
      fontSize:12,
      margin:2,
    }
})
export default FirstApp;