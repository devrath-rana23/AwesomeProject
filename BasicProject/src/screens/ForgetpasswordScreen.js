import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Image, ToastAndroid, Pressable, ScrollView } from 'react-native';
import { LOGO } from '../assets/image/index';

export class ForgetpasswordScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      submitted: false,
    };
  }

  onFormSubmit = () => {
    if (!this.state.email) {
      ToastAndroid.showWithGravityAndOffset('Email field is required.',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        100, 2500
      );
    } else {
      const email_re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (email_re.test(String(this.state.email).toLowerCase())) {
        this.setState((state, props) => {
          return { submitted: !state.submitted };
        });
      } else {
        ToastAndroid.showWithGravityAndOffset('Email field is invalid.',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          100, 2500
        );
      }
    }
  }

  render() {
    return (
      <ScrollView >
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
                keyboardType='email-address'
                onChangeText={(value) => {
                  this.setState((state, props) => {
                    return { email: value };
                  });
                }}
                style={styles.inputBox}
                placeholder="Your email id" />
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
              <Text style={styles.button_text}>Submit</Text>
            </Pressable>
            {
              this.state.submitted ? <Text>Forget password successfully '{this.state.email}'</Text> : null
            }
          </View>
        </View>
        <Pressable
          onPress={() => this.props.onNavigation.navigate('Login')}
          style={styles.redirect_button}
        >
          <Text style={styles.redirect_button_text}>Back to login</Text>
        </Pressable>
      </ScrollView >

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
  redirect_button: {
    marginBottom: 20,
    flex: 1,
    alignItems: 'center',
  },
  redirect_button_text: {
    fontSize: 16,
    color: '#000',
  },
});