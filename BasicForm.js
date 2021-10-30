import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export class BasicForm extends Component {
    render() {
      return(
        <View style = {styles.container}>
          <Text style= {styles.paragraph}>
            Let's build a form
          </Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    conatiner: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
});