import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity , StyleSheet } from 'react-native';


export class AppH extends Component {
  render() {
    return (
      <View style={
      myStyle.view

      }>
        <Text style={
         myStyle.text
        }>Attendance App</Text>
          
      </View>
    );
  }
}
const myStyle=StyleSheet.create({
view :{
  backgroundColor: '#f0f409',
        justifyContent:'center'
},
text:{
 fontWeight:'bold',
          marginLeft:65,
          fontSize:25
}

})




export default AppH;