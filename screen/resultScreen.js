import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import db from '../config'

export default class App extends Component {

constructor(){
  super()
  this.state= {
  teams: ['Aaryan','Punya','Neerav']
  }
}

  resetdatabase=()=>{
    db.ref('Attendance/').update({
      Aaryan:{
      'present': false ,
      'absent' : true
     },
     Punya:{
      'present': false ,
      'absent' : true
     },
      Neerav:{
      'present': false ,
      'absent' : true
     }
     
     
     
      })
  }

componentDidMount(){
  console.log('mount')
  this.fetchData()
  

}



fetchData(){
  var teamdata = []

  db.ref('Teams').on('value',(data)=>{
    var teamList = data.val()


for(var team in teamList){
  if(teamList[team]['present']===true){

teamList[team]['teamName']=team

teamdata.push(teamList[team])
  
  
  }
}




console.log(this.state.teams)

  })
}


  render() {
    return (
      <View style={{flex:1}}>
      {this.state.teams.map((team)=> (
   <View
   style = {{ width:'25%',height:'6%',
   backgroundColor:team,margin:20,
   justifyContent:'center', alignItems:'center'}
   }> <Text>  {team} </Text> </View>
      ))}
   
     <Button title="reset" 
     onPress={
 this.resetdatabase
     }/>
    
</View>
    
    );
   
  }
}
