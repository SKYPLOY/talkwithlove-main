import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,Image,} from "react-native";
import { Input } from 'react-native-elements';
import { ListItem, CheckBox, Body } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
export default  Question = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={require('../assets/iconcheck.png')} style={{margin:10}}/>
            <Text style={styles.modalText}>ลงทะเบียนเสร็จเรียบร้อย</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =>  setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}
                onPress={() => navigation.navigate('Home')}
              >เริ่มต้นใช้งาน</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <ScrollView>
        <View style={styles.Box}>
            <View><Image source={require('../assets/logo.png')} style={styles.ImageLogo}/></View>
            <View style={{justifyContent:"center"}}>
              <Text style={styles.logo}>ตอบคำถามต่อไปนี้</Text>
            </View>
        </View>
        <View style={{padding:10}}>
          <View style={styles.textCheck}><Text>1.คุณเป็น?</Text></View>
            <ListItem>
              <CheckBox checked={true} />
              <Body style={styles.textCheck}><Text>ผู้หญิง</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} />
              <Body style={styles.textCheck}><Text>ผู้ชาย</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} color="green"/>
              <Body style={styles.textCheck}><Text>อื่นๆ</Text></Body>
            </ListItem>
            <Input placeholder='ระบุ' style={{paddingStart:5 }}/>
            <View style={styles.textCheck}><Text>2.รสนิยมทางเพศของคุณ?</Text></View>
            <ListItem>
              <CheckBox checked={true} />
              <Body style={styles.textCheck}><Text>เกย์</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} />
              <Body style={styles.textCheck}><Text>เลสเบี้ยน</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} />
              <Body style={styles.textCheck}><Text>ไม่ฝักใฝ่ทางเพศ</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} color="green"/>
              <Body style={styles.textCheck}><Text>อื่นๆ</Text></Body>
            </ListItem>
            <Input placeholder='ระบุ' style={{paddingStart:5 }}/>
            <View style={styles.textCheck}><Text>3.คุณคิดว่าคุณมีนิสัยเป็นอย่างไร?</Text></View>
            <ListItem>
              <CheckBox checked={true} />
              <Body style={styles.textCheck}><Text>ใจดี</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} />
              <Body style={styles.textCheck}><Text>สุขุม</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} />
              <Body style={styles.textCheck}><Text>เจ้าชู้</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} color="green"/>
              <Body style={styles.textCheck}><Text>อื่นๆ</Text></Body>
            </ListItem>
            <Input placeholder='ระบุ' style={{paddingStart:5 }}/>
            <View style={styles.textCheck}><Text>4.คุณชอบคนแบบไหน?</Text></View>
            <ListItem>
              <CheckBox checked={true} />
              <Body style={styles.textCheck}><Text>ร่าเริง</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} />
              <Body style={styles.textCheck}><Text>สุขุม</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} />
              <Body style={styles.textCheck}><Text>เจ้าชู้</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} color="green"/>
              <Body style={styles.textCheck}><Text>อื่นๆ</Text></Body>
            </ListItem>
            <Input placeholder='ระบุ' style={{paddingStart:5 }}/>
            <View style={styles.textCheck}><Text>5.คุณต้องการเห็น?</Text></View>
            <ListItem>
              <CheckBox checked={true} />
              <Body style={styles.textCheck}><Text>ผู้หญิง</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} />
              <Body style={styles.textCheck}><Text>ผู้ชาย</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} color="green"/>
              <Body style={styles.textCheck}><Text>ทุกคน</Text></Body>
            </ListItem>
          </View>
          <View style={{padding:10}}>
            <View style={styles.textCheck}><Text>6.คุณต้องการหาคนอายุเท่าไร?</Text></View>
            <Input placeholder='ระบุ' style={{paddingStart:5 }}/>
        </View>
        <View style={styles.buttonstart}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
             >
            <Text style={{width:310, textAlign:'center',color:'#515151'}}>ตกลง</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:"#FDEEF9" ,
  },
  modalView: {
    marginLeft:30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:300
  },
  button: {
    borderRadius: 5,
    padding: 10,
  },
  buttonOpen: {
    backgroundColor: "#FFFFFF",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    width:250,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
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
  buttonstart:{
    paddingBottom:10,
    width:100,
    alignItems: 'flex-end', 
    justifyContent: 'flex-start',
    right:-240
  },
  textCheck:{
    paddingStart:5
  }

      
});