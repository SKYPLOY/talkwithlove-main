import React from 'react';
import { 
  View, 
  Image,
  StyleSheet,
  Text,
  KeyboardAvoidingView
} from 'react-native';
import { Button ,Input} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from "formik";
import * as yup from "yup";
import {useDispatch} from 'react-redux';

import * as authAction from '../redux/actions/authActions';


const formSchema = yup.object({
  fullName: yup.string().required().min(3),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
  confirmPassword: yup.string().required().min(6),
  date:yup.string().required().min(10)
});

const RegisterStackScreen = (navData) => {

  const dispatch = useDispatch(); 

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          confirmPassword:"",
          date:""
        }}
        validationSchema={formSchema}
        onSubmit={(values) => {
          dispatch(authAction.registerUser(values))
            .then(result => {
              if(result.success) {
                navData.navigation.navigate("Question");
              } else {
                Alert.alert('Registration failed. Try Again')
              }   
            })
            .catch(err => console.log(err)) 
        }}
      >
        {(props) => (
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.Box}>
                <View><Image source={require('../assets/logo.png')} style={styles.ImageLogo}/></View>
                <View style={{justifyContent:"center"}}>
                  <Text style={styles.logo}>สร้างบัญชี</Text>
                </View>
            </View> 
            <View style={{padding:20}}>
              <Input
                placeholder='ชื่อผู้ใช้งาน'
                onChangeText={props.handleChange("fullName")}
                value={props.values.fullName}
                onBlur={props.handleBlur("fullName")}
                leftIcon={<Icon name='user' size={24} color='#404040'/> }
                />
                <Text style={styles.errors}>{props.touched.fullName && props.errors.fullName}</Text>
                <Input
                placeholder='อีเมล์'
                onChangeText={props.handleChange('email')}
                value={props.values.email}
                onBlur={props.handleBlur('email')}
                leftIcon={<Icon name='envelope' size={24} color='#404040'/> }
                />
                <Text style={styles.errors}>{props.touched.email && props.errors.email}</Text>
                <Input
                placeholder='รหัสผ่าน'
                secureTextEntry={true}
                onChangeText={props.handleChange('password')}
                value={props.values.password}
                onBlur={props.handleBlur('password')}
                leftIcon={<Icon name='lock' size={30} color='#404040'/> }
                />
                <Text style={styles.errors}>{props.touched.password && props.errors.password}</Text>

                <Input
                placeholder='ยืนยันรหัสผ่าน'
                secureTextEntry={true}
                onChangeText={props.handleChange('confirmPassword')}
                value={props.values.confirmPassword}
                onBlur={props.handleBlur('confirmPassword')}
                leftIcon={<Icon name='lock' size={30} color='#404040'/> }
                />
                <Text style={styles.errors}>{props.touched.confirmPassword && props.errors.confirmPassword}</Text>
                <Input
                placeholder='วันเกิด'
                onChangeText={props.handleChange('date')}
                value={props.values.date}
                onBlur={props.handleBlur('date')}
                leftIcon={<Icon name='calendar' size={24} color='#404040'/> }
                />
                <Text style={styles.errors}>{props.touched.date && props.errors.date}</Text>
            </View>
              <View style={{padding:20}}>
                  <Button onPress={props.handleSubmit}
                      buttonStyle={{backgroundColor: "#ffffff"}}
                      title="ต่อไป" titleStyle={{ color: '#515151', fontSize:14,fontFamily:"Roboto" }}>
                  </Button>
                </View>
            </ScrollView>
          </View>

        )}


      </Formik>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container:{ 
            flex: 1,
            backgroundColor:"#FDEEF9" ,
            paddingTop:50 
          },
    Box:{
            margin:20,
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
      width:290,
      justifyContent: 'center',
      margin:40,
      top:-50
    },
    logo:{
      backgroundColor:"#FFFFFF",
      borderRadius:10,
      fontSize:18,
      width:210,
      height:50,
      color:"#232323",
      padding:10,
      top:-15
    },
    InputText:{
      marginLeft:10,
      fontSize:16
    },

  //------- edit here ------//
    errors: {
      color: "red",
      bottom:20,
      marginLeft:10 
    }
    
})
export default RegisterStackScreen;