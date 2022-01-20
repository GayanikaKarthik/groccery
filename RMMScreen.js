import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';

export default class ReadyMade extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
      <TouchableOpacity style={styles.choicesBox}
      > 
      <Text style={styles.text}> Vegan Pasta </Text> 
      </TouchableOpacity>

            <TouchableOpacity style={styles.choicesBox}
            > 
      <Text style={styles.text}> Pizza </Text> 
      </TouchableOpacity>

            <TouchableOpacity style={styles.choicesBox}> 
      <Text style={styles.text}> Choclate Cake </Text> 
      </TouchableOpacity>

      <TextInput placeHolder={"Adress to deliver to?"}/>

       </ScrollView> 
      </View>
    );
  }
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

