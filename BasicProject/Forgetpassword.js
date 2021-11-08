import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Image, Alert, Pressable } from 'react-native';
import { LOGO } from './src/image/index.js';
export class Forgetpassword extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image
            style={styles.logo}
            source={LOGO}
          />
        </View>
        <View style={styles.heading}>
          <Text style={styles.heading_text}>Forgetpassword</Text>
        </View>
        <View style={styles.form_container}>
          <View style={styles.form_fields_container}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Your email id" />
          </View>
          <Pressable
            onPress={() => Alert.alert('Forgetpassword Button pressed')}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? '#ddd'
                  : '#1b3c42'
              },
              styles.button
            ]}
          >
            <Text style={styles.button_text}>Forgetpassword</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image_container: {
    flex: 1,
  },
  logo: {
    width: 412,
    height: 210,
  },
  heading: {
    margin: 20,
  },
  heading_text: {
    fontFamily: 'serif',
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',
  },
  form_container: {
    flex: 1,
    borderWidth: 20,
    borderColor: '#fff',
    alignItems: 'stretch',
  },
  form_fields_container: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  label: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000',
  },
  inputBox: {
    paddingBottom: 1,
  },
  button: {
    padding: 12,
    borderRadius: 50,
  },
  button_text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});