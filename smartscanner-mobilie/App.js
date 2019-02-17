/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import axios from "axios"
import LinearGradient from "react-native-linear-gradient"
import Icon from "react-native-vector-icons/AntDesign"


let ip = "10.18.106.228"

const options = {
  title: 'Select Avatar',
  allowsEditing:false,
  cancelButtonTitle:null,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};


function takePicture(){
  ImagePicker.launchCamera(options, (response) => {
    // Same code as in above section!
    if(response.didCancel){
     
    }else{
      let data = response.data
      axios.post(`http://${ip}:5000/classify_image`,{data}).then((res)=>{
      const result = res.data.result
      
    }).catch((e)=>{
      
    })
    }
  });
}

export default class App extends Component {

 
  

  render() {
    return (
      <LinearGradient colors={["#0F2027","#203A43","#2C5364"]} style={styles.container}>
        <Text style={styles.welcome} style={{color:"white",fontSize:30}}>Smart Scanner</Text>
        <TouchableOpacity onPress={()=>{takePicture()}}>
          <View style={{marginTop:20}}>
          
          <Text style={styles.welcome} style={{color:"white",fontSize:20}}>
            <Icon name="camera" style={{fontSize:60}}/>
          </Text>
          </View>
        </TouchableOpacity>
        
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
