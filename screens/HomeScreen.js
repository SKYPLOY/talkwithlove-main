import * as React from 'react';
import { 
    View, 
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
import { Container,Content, Card, CardItem, Thumbnail, Button, Icon, Body, } from 'native-base';
import { Navigation } from '@material-ui/icons';



export default function FeedScreen({navigation}) {
    return (
      <Container style={styles.container}>
        <Content>
          <Card style={{width:335}}>
            <CardItem cardBody >
            <Image 
                  source={require('../assets/m13.jpg')} 
                  resizeMode= "cover"
                  style={{width:335,height:340, flex:1, justifyContent:'center'}} 
            />  
            </CardItem>
            <CardItem style={{justifyContent:'space-around'}}>
              <Body style={{flexDirection:'column',}}>
                <TouchableOpacity onPress={() =>  navigation.navigate("UserProfile")}>
                  <Text style={{marginRight:10, fontSize:20}}>Rowoon</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                  <Text note style={{marginRight:10}}>ชาย</Text>
                  <Text note>22 ปี</Text>
                </View>
              </Body>
              <Button transparent>
                  <Icon active name="chatbubble-ellipses-outline" /> 
              </Button>
            </CardItem>
          </Card>
          <Card style={{width:335}}>
            <CardItem cardBody >
            <Image 
                  source={require('../assets/m9.jpg')} 
                  resizeMode= "cover"
                  style={{width:335,height:340, flex:1, justifyContent:'center'}} 
            />  
            </CardItem>
            <CardItem style={{justifyContent:'space-around'}}>
              <Body style={{flexDirection:'column',}}>
                <TouchableOpacity onPress={() =>  navigation.navigate("MyProfile")}>
                  <Text style={{marginRight:10, fontSize:20}}>Rowoon</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                  <Text note style={{marginRight:10}}>ชาย</Text>
                  <Text note>22 ปี</Text>
                </View>
              </Body>
              <Button transparent>
                  <Icon active name="chatbubble-ellipses-outline" /> 
              </Button>
            </CardItem>
          </Card>
        </Content>
        
      </Container>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      padding:10
    },
    Icon:{
      color:'red'
    },
  })