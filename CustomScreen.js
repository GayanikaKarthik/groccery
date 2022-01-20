import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import {Header} from 'react-native-elements';

export default function CustomScreen() {
  return (
    <View style={styles.container}>
         
     <TextInput placeHolder={"Start your Custom order! List every item needed, and we will deliver to your adress!"}/> 
    <TextInput placeHolder={"Your Adress?"}/>

      <TouchableOpacity style={styles.choicesBox}
      > 
      <Text style={styles.text}> Submit </Text> 
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#3B7096',
  },
  choicesBox:{
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 15,
    width: 300,
    height: 65,
    backgroundColor: "#8FCAF4",
  },
  text:{
    fontSize: 20,
    marginLeft: 20,
    color: 'white',
    fontFamily: "Courier New",
  }
});


