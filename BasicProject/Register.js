import React, { Component, useState } from 'react';
import { Text, StyleSheet, View, TextInput, Image, Alert, SafeAreaView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { LOGO } from './src/image/index.js';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { renderNode } from 'react-native-elements/dist/helpers';

const Separator = () => (
  <View style={styles.separator} />
);
export class Register extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View >
          <Image
            style={styles.logo}
            source={LOGO}
          />
          <Text style={{ fontSize: 40, fontWeight: 'bold', fontFamily: "serif", color: '#000000', marginLeft: 17 }}>Sign-up</Text>
          <View>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Your name" />
            <Separator />
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Your email id" />
            <Separator />
            <Text style={styles.label}>Contact no.</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Your contact number"
            />
            <Separator />
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.inputBox}
              secureTextEntry={true}
              placeholder="Password"
            />
            <Separator />
            <TouchableOpacity style={{ backgroundColor: '#1b3c42', marginLeft: 20, marginRight: 20, height: 36, borderRadius: 50 }}
              onPress={() => {
                Alert.alert('Create Account Button pressed');
              }}
            >
              <Text style={{ color: "#ffffff", textAlign: 'center', fontWeight: "bold", fontSize: 17, paddingTop: 6 }}>
                Create Account
              </Text>
            </TouchableOpacity >
            {/* <Text>Already got an account?</Text>
        <Text style={{color:'#0099ff',backgroundColor:'red', paddingLeft:200,marginBottom:200, }}>Login</Text> */}
          </View>
        </View>
      </SafeAreaView>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

  },
  logo: {
    width: 412,
    height: 210,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 17,
  },
  inputBox: {
    paddingLeft: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#000000',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 20,
    marginRight: 20,

  },
});