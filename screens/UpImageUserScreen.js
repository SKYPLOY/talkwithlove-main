import React, { useState } from "react";
import { 
  View, 
  Image,
  StyleSheet,
  Text
} from 'react-native';
import { Avatar , Icon, Button} from 'react-native-elements';


const UpImageUserScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <View  style={styles.Box}>
        <View><Image source={require('../assets/logo.png')} style={styles.ImageLogo}/></View>
        <View style={{justifyContent:"center"}}>
          <Text style={styles.logo}>อัพรูปโปรไฟล์</Text>
        </View>
      </View> 

      <View style={{justifyContent:'center', alignItems:'center', paddingTop:30}}>
        <Avatar
        rounded
        icon={{ name: 'plus' , color:'#888888', type: 'font-awesome', size:80}}
        size={200}
        backgroundColor={'#ffff'}
        >
        </Avatar>
      </View>

      <View style={{alignItems:'center', justifyContent:'center',marginRight:10,padding:50 }}>
      
          <Text style={{fontSize:20, color:"red",textDecorationLine: 'underline',}}>เพิ่มรูปโปรไฟล์</Text>
        
      </View>

      <View style={{padding:20, justifyContent:"flex-end"}}>
        <Button
          onPress={() =>  navigation.navigate("Home ")}
          buttonStyle={{backgroundColor: "#ffffff"}}
          title="เริ่มใช้งาน" titleStyle={{ color: '#515151', fontSize:14,fontFamily:"Roboto" }}>
        </Button>
      </View>

    </View>
  )
}
export default UpImageUserScreen;

const styles = StyleSheet.create({
  container:{ 
          flex: 1,
          backgroundColor:"#FDEEF9",
        },
  Box:{
          
          flexDirection: "row",
          alignItems: 'flex-end', 
          justifyContent: 'flex-start',
        },    
  ImageLogo:{
          margin:10,
          width:85,
          height:70
        },
  logo:{
          backgroundColor:"#FFFFFF",
          borderRadius:10,
          fontSize:18,
          width:230,
          height:50,
          color:"#232323",
          padding:10,
          top:-15
          
        },

})