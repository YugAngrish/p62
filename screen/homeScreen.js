import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/appHeader';
import db from '../config.js'
import ResultScreen from './resultScreen'

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader />

<Text style={myStyle1.text}>Aaryan  </Text>
        <TouchableOpacity
            style={myStyle1.pbutton1}
          onPress={() => {
        db.ref('Attendance/').update({
          Aaryan :{
            'present' : true , 
            'absent' : false
          }
        })

          }}>
          <Text style={myStyle1.text}> Present </Text>
        </TouchableOpacity>

 <TouchableOpacity
            style={myStyle1.abutton1}
          onPress={() => {
          
           db.ref('Attendance/').update({
          Aaryan :{
            'present' : false , 
            'absent' : true
          }
        })

          }}>
          <Text style={myStyle1.text}> Absent </Text>
        </TouchableOpacity>

<Text style={myStyle1.text}> Punya  </Text>

        <TouchableOpacity
        style={myStyle1.pbutton1}
          onPress={() => {
          db.ref('Attendance/').update({
          Punya :{
            'present' : true , 
            'absent' : false
          }
        })
          }}>
          <Text style={myStyle1.text}>Present </Text>
        </TouchableOpacity>


 <TouchableOpacity
            style={myStyle1.abutton1}
          onPress={() => {
          
          db.ref('Attendance/').update({
          Punya :{
            'present' : false , 
            'absent' : true
          }
        })

          }}>
          <Text style={myStyle1.text}> Absent </Text>
        </TouchableOpacity>      
        
       <Text style={myStyle1.text}> Neerav </Text> 
         <TouchableOpacity
        style={myStyle1.pbutton1}
          onPress={() => {
           
         db.ref('Attendance/').update({
          Neerav :{
            'present' : true , 
            'absent' : false
          }
        })

          }}>
          <Text style={myStyle1.text}> Present </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={myStyle1.abutton1}
          onPress={() => {
          
          db.ref('Attendance/').update({
          Neerav :{
            'present' : false , 
            'absent' : true
          }
        })

          }}>
          <Text style={myStyle1.text}> Absent </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={myStyle1.button}
          onPress={() => {
          
            this.goToScreen()

          }}>
          <Text style={myStyle1.text}> Submit </Text>
        </TouchableOpacity>


 </View>
    )
  } 
  goToScreen=()=> {
    this.props.navigation.navigate('ResultScreen')


  };
}
const myStyle1 = StyleSheet.create({
  text: {
    fontWeight: 'Bold',
    fontSize: 25,
    marginTop:'1%'
  },
  pbutton1: {
    width: '35%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    border: 'solid',
    marginLeft: 25,
    backgroundColor:'green'
      
    
      },
      button: {
    width: '90%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    border: 'solid',
    margin: 25,
    backgroundColor:'blue'
      
    
      },
    abutton1: {
    width: '35%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-20.5%',
    border: 'solid',
    marginLeft: 185 ,
    backgroundColor:'red'
      }   
});
