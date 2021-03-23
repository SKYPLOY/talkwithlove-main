import React from 'react';
import { 
  View, 
  Image,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Alert,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button ,Input } from 'react-native-elements';

import {Formik} from "formik";
import * as yup from 'yup';
import {useDispatch} from 'react-redux';

import * as authAction from '../redux/actions/authActions';

const formSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(6)
})

const LoginStackScreen = navData => {
  const dispatch = useDispatch(); 
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding": "height"} 
        style={{ flex: 1 }}
        >
      <Formik
        initialValues={{
          user_Id:"",
          password: ""
        }}
        validationSchema={formSchema}
          onSubmit={(values) => {
            dispatch(authAction.loginUser(values))
            .then(result => {
              if(result.success) {
                navData.navigation.navigate('Home')
              } else {
                Alert.alert(result.message)
              }
              
            })
            .catch(err => console.log(err))
        }}
      >
        {(props) => (
            <View style={styles.container}>
            <View>
              <View  style={styles.Box}>
                <View><Image source={require('../assets/logo.png')} style={styles.ImageLogo}/></View>
                  <View style={{justifyContent:"center"}}>
                    <Text style={styles.logo}>เข้าสู่ระบบ</Text>
                  </View>
                </View> 
                <View style={{padding:20}}>
                  <Input
                    placeholder='อีเมล์ที่ลงทะเบียน'
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                    onBlur={props.handleBlur('email')}
                    leftIcon={
                      <Icon
                        name='user'
                        size={24}
                        color='#404040'
                      />
                    }
                  />
                  <Text style={styles.errors}>{props.touched.email && props.errors.email}</Text>
                  <Input
                    placeholder='รหัสผ่าน'
                    secureTextEntry={true}
                    onChangeText={props.handleChange('password')}
                    value={props.values.password}
                    onBlur={props.handleBlur('password')}
                    leftIcon={
                      <Icon
                        name='lock'
                        size={24}
                        color='#404040'
                      />
                    }
                  />
                  <Text style={styles.errors}>{props.touched.password && props.errors.password}</Text>
                </View>
                <View style={{padding:20}}>
                  <Button onPress={props.handleSubmit}
                      buttonStyle={{backgroundColor: "#ffffff"}}
                      title="เข้าสู่ระบบ" titleStyle={{ color: '#515151', fontSize:14,fontFamily:"Roboto" }}>
                  </Button>
                </View>
            </View> 
        </View>
        )}
         </Formik>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container:{ 
            flex: 1,
            backgroundColor:"#FDEEF9",
            paddingTop:50
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
    BoxInput:{
            flex:1,
            width:290,
            justifyContent: 'center',
            margin:40,
            top:-50
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
    ButtonPermission:{
      flex:0.5,
      alignItems: 'center', 
      justifyContent: 'center',
      top:-50,
      
      
    },
    InputText:{
        marginLeft:10,
        fontSize:16,
      },  
//-------- edit here ---------// 
      errors:{
        color:'red',
        bottom:20,
        marginLeft:10 
      }        
})
export default LoginStackScreen;