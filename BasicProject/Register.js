import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Image, Alert, Pressable } from 'react-native';
import { LOGO } from './src/image/index.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class Register extends Component {

  constructor(props) {
    super(props);
    this.state = { passwordIsVisible: true, confirmPasswordIsVisible: true };
  }

  hideShowPasswordFuntionality = () => {
    this.setState((state, props) => {
      return { passwordIsVisible: !state.passwordIsVisible };
    });
  }

  hideShowConfirmPasswordFuntionality = () => {
    this.setState((state, props) => {
      return { confirmPasswordIsVisible: !state.confirmPasswordIsVisible };
    });
  }

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
          <Text style={styles.heading_text}>Sign-up</Text>
        </View>
        <View style={styles.camera_container}>
          <View style={styles.camera_icon_container}>
            <Ionicons
              name="camera"
              size={20}
            />
          </View>
        </View>
        <View style={styles.form_container}>
          <View style={styles.form_fields_container}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Your name" />
          </View>
          <View style={styles.form_fields_container}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Your email id" />
          </View>
          <View style={styles.form_fields_container}>
            <Text style={styles.label}>Contact no.</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Your contact number"
            />
          </View>
          <View style={styles.form_fields_container}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.input_box_with_icons}>
              <TextInput
                style={styles.inputBox}
                secureTextEntry={this.state.passwordIsVisible}
                placeholder="Password"
              />
              <Ionicons
                name={this.state.passwordIsVisible ? 'eye' : 'eye-off'}
                onPress={this.hideShowPasswordFuntionality}
                style={styles.eye_icon}
                size={20}
              />
            </View>
          </View>
          <View style={styles.form_fields_container}>
            <Text style={styles.label}>Confirm password</Text>
            <View style={styles.input_box_with_icons}>
              <TextInput
                style={styles.inputBox}
                secureTextEntry={this.state.confirmPasswordIsVisible}
                placeholder="Confirm password"
              />
              <Ionicons
                name={this.state.confirmPasswordIsVisible ? 'eye' : 'eye-off'}
                onPress={this.hideShowConfirmPasswordFuntionality}
                style={styles.eye_icon}
                size={20}
              />
            </View>
          </View>
          <Pressable
            onPress={() => Alert.alert('Create Account Button pressed')}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? '#ddd'
                  : '#1b3c42'
              },
              styles.button
            ]}
          >
            <Text style={styles.button_text}>Create Account</Text>
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
  camera_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera_icon_container: {
    backgroundColor: '#e1e6e2',
    padding: 40,
    borderRadius: 50,
    marginBottom: 20,
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
  input_box_with_icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eye_icon: {
    paddingTop: 10,
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