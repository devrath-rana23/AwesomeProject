import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Image } from 'react-native';
import { LOGO } from './src/image/index.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Separator = () => (
  <View style={styles.separator} />
);
export class Login extends Component {
  render() {
    return (
      <View >
        <Image
          style={styles.logo}
          source={LOGO}
        />
        <Text style={{ fontSize: 40, fontWeight: 'bold', fontFamily: "serif", color: '#000000', marginLeft: 17 }}>Log-in</Text>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Your email id" />
          <Separator />
          <Text style={styles.label}>Password</Text>
          <View style={{ flexDirection: 'row', }}>
            <TextInput
              style={styles.inputBox}
              secureTextEntry={true}
              placeholder="Password"
            />
            <Ionicons
              name="eye"
              style={{ marginLeft: 280, marginBottom: 0, marginTop: 18, marginRight: 0, }}
              size={20}
            />
          </View>
          <Separator />
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
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