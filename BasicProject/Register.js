import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Image, Pressable, ToastAndroid } from 'react-native';
import { LOGO } from './src/image/index.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      passwordIsVisible: true,
      confirmPasswordIsVisible: true,
      name: '',
      email: '',
      contact_number: '',
      password: '',
      confirm_password: '',
      submitted: false,
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

  onFormSubmit = () => {

    let valid_name = false;
    let valid_email = false;
    let valid_contact_number = false;
    let valid_password = false;
    let valid_confirm_password = false;

    if (!this.state.name) {
      ToastAndroid.showWithGravityAndOffset('Name field is required.',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        100, 2500
      );
    } else {
      if (this.state.name.length < 8) {
        ToastAndroid.showWithGravityAndOffset('The name field minimum length should be 8.',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          100, 2500
        );
      } else {
        valid_name = true;
      }
    }
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
    if (!this.state.contact_number) {
      ToastAndroid.showWithGravityAndOffset('Contact number field is required.',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        100, 2500
      );
    } else {
      const phoneno_re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (this.state.contact_number.value.match(phoneno_re)) {
        valid_contact_number = true;
      } else {
        ToastAndroid.showWithGravityAndOffset('Contact number field is invalid.',
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
      if (this.state.password.value.match(password_regex)) {
        valid_password = true;
      } else {
        ToastAndroid.showWithGravityAndOffset('Password field is invalid.',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          100, 2500);
      }
    }
    if (!this.state.confirm_password) {
      ToastAndroid.showWithGravityAndOffset('Confirm Password field is required.',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        100, 2500
      );
    } else {
      if (this.state.password != this.state.confirm_password) {
        ToastAndroid.showWithGravityAndOffset('Confirm Password field is invalid.',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          100, 2500
        );
      } else {
        valid_confirm_password = true;
      }
    }

    if (valid_name && valid_email && valid_contact_number && valid_password && valid_confirm_password) {
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
              onChangeText={(value) => {
                this.setState((state, props) => {
                  return { name: value };
                });
              }}
              style={styles.inputBox}
              placeholder="Your name" />
          </View>
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
            <Text style={styles.label}>Contact no.</Text>
            <TextInput
              keyboardType='numeric'
              onChangeText={(value) => {
                this.setState((state, props) => {
                  return { contact_number: value };
                });
              }}
              style={styles.inputBox}
              placeholder="Your contact number"
            />
          </View>
          <View style={styles.form_fields_container}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.input_box_with_icons}>
              <TextInput
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
          <View style={styles.form_fields_container}>
            <Text style={styles.label}>Confirm password</Text>
            <View style={styles.input_box_with_icons}>
              <TextInput
                onChangeText={(value) => {
                  this.setState((state, props) => {
                    return { confirm_password: value };
                  });
                }}
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
            onPress={this.onFormSubmit}
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
          {
            this.state.submitted ? <Text>You are registered successfully as '{this.state.name}'</Text> : null
          }
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