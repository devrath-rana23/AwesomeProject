import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Image, Button, Alert } from 'react-native';
import { LOGO } from './src/image/index.js';

const Separator = () => (
  <View style={styles.separator} />
);

export const Login = () => {
  return (
    <View >
      <Image
        style={styles.logo}
        source={LOGO}
      />
      <View style={styles.container}>
        <TextInput
          style={ styles.inputBox }
          placeholder="Email" />
          <Separator />
        <TextInput
          style={ styles.inputBox }
          secureTextEntry={true}
          placeholder="Password"
        />
        <Separator />
        <Button 
        title="Login" 
        color="#1b3c42"
        onPress={() => Alert.alert('Login button pressed')}
        />
        {/* <Text>Already got an account?</Text>
        <Text style={{color:'#0099ff',backgroundColor:'red', paddingLeft:200,marginBottom:200, }}>Login</Text> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 700,
    width: 350,
    paddingTop: 50,
  },
  logo: {
    width: 150,
    height: 100,
    marginLeft: 112,
    marginTop: 112,
  },
  inputBox: {
    backgroundColor: '#ffffff', 
  },
  separator:{
    marginVertical: 8,
  },
});