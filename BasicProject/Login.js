import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Image } from 'react-native';
import { LOGO } from './src/image/index.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordIsVisible: true,
      confirmPasswordIsVisible: true,
      email: '',
      password: '',
    };
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

  formSubmit = () => {
    let valid_email = false;
    let valid_password = false;

    if (!this.state.email) {
      ToastAndroid.showWithGravityAndOffset('Email field is required.',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        100, 2500
      );
    } else {
      const email_re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (email_re.test(String(this.state.email).toLowerCase())) {
        valid_email = true;
      } else {
        ToastAndroid.showWithGravityAndOffset('Email field is invalid.',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          100, 2500
        );
      }
    }
    if (!this.state.password) {
      ToastAndroid.showWithGravityAndOffset('Password field is required.',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        100, 2500
      );
    } else {
      const password_regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if (password_regex.test(String(this.state.password))) {
        valid_password = true;
      } else {
        ToastAndroid.showWithGravityAndOffset('Password field is invalid.',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          100, 2500);
      }
    }
    if (valid_email && valid_password) {
      this.setState((state, props) => {
        return { submitted: !state.submitted };
      });
    }

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
          <Text style={styles.heading_text}>Log-in</Text>
        </View>
        <View style={styles.form_container}>
          <View style={styles.form_fields_container}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              keyboardType='email-address'
              onChangeText={(value) => {
                this.setState((state, props) => {
                  return { email: value };
                });
              }}
              style={styles.inputBox}
              placeholder="Your email id" />
          </View>
          <View style={styles.form_fields_container}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.input_box_with_icons}>
              <TextInput
                keyboardType='email-address'
                onChangeText={(value) => {
                  this.setState((state, props) => {
                    return { password: value };
                  });
                }}
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