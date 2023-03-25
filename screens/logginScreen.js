import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity, button,handleHomeScreen} from 'react-native';


const Loggin = ({navigation}) => {
  const handleHomeScreen =()=>{
    navigation.navigate('Home')
  }
  return (
    <ScrollView>
      
      <View style={styles.container}>
      
      <Text style={styles.color}> Registrate</Text>
        <Text></Text>
        <Image
        source={{
         uri: 'https://th.bing.com/th/id/R.5901e5df47315cd279d28324d1abcf96?rik=qMSZ5bkiQnt0Hw&riu=http%3a%2f%2fwww.spotacademy.in%2fimg%2fspot-academy%2flogin.png&ehk=xZthmEosc9TRjeDXFi92%2bTfA1%2fXSIqS902TQCTK1dmI%3d&risl=&pid=ImgRaw&r=0',  
        }}
        style={{width: 200, height: 200, borderRadius: 20}}
        />
       
      <TextInput
        style={{
          height: 40,
          borderColor: 'purple',
          borderWidth: 3,
          textAlign: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginTop:10,
          with:"auto",
          backgroundColor: '#FF8C00',
        }}
        placeholder="usuario"
      
      />
      
       <TextInput
        style={{
          height: 40,
          borderColor: 'purple',
          borderWidth: 3,
          textAlign: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginTop:10,
          with:"auto",
          backgroundColor: '#FF8C00',
        }}
        placeholder="contraseña"
      />
        
        </View> 
        <TouchableOpacity style={styles.button} onPress={handleHomeScreen}>
        <Text> Entrar</Text>
       </TouchableOpacity>
    </ScrollView>
    
   
  );
};
 const styles= StyleSheet.create({
  container: {
   marginTop: 5,
   alignItems: "center",
   height: 'auto',
   backgroundColor: '#00CED1',
  }, 
  color:{
    color:'black',
    fontWeight: 'bold',
    fontSize:45,
    
  },
  button: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'center',
    borderRadius: 5,
    marginTop:10,
    marginLeft:600,
    width: 100,
    backgroundColor: '#FF8C00',
    fontSize:23,
  }
});

export default Loggin;
