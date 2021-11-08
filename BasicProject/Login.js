import React, { useState } from 'react';
import { TextInput, ScrollView, Text, View, Image, StyleSheet, SafeAreaView, Pressable, ToastAndroid } from 'react-native';
import { LOGO, GMAIL_LOGO, FACEBOOK_LOGO } from './src/image/index.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({ navigation }) => {

  const [passwordIsVisible, setPasswordIsVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const hideShowPasswordFuntionality = () => {
    setPasswordIsVisible(!passwordIsVisible);
  }

  const formSubmit = () => {
    let valid_email = false;
    let valid_password = false;

    if (!email) {
      ToastAndroid.showWithGravityAndOffset('Email field is required.',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        100, 2500
      );
    } else {
      const email_re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (email_re.test(String(email).toLowerCase())) {
        valid_email = true;
      } else {
        ToastAndroid.showWithGravityAndOffset('Email field is invalid.',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          100, 2500
        );
      }
    }
    if (!password) {
      ToastAndroid.showWithGravityAndOffset('Password field is required.',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        100, 2500
      );
    } else {
      const password_regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if (password_regex.test(String(password))) {
        valid_password = true;
      } else {
        ToastAndroid.showWithGravityAndOffset('Password field is invalid.',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          100, 2500);
      }
    }
    if (valid_email && valid_password) {
      setSubmitted(!submitted);
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
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
              onChangeText={(value) => { setEmail(value) }}
              style={styles.inputBox}
              placeholder="Your email id" />
          </View>
          <View style={styles.form_fields_container}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.input_box_with_icons}>
              <TextInput
                onChangeText={(value) => { setPassword(value) }}
                style={styles.inputBox}
                secureTextEntry={passwordIsVisible}
                placeholder="Password"
              />
              <Ionicons
                name={passwordIsVisible ? 'eye' : 'eye-off'}
                onPress={hideShowPasswordFuntionality}
                style={styles.eye_icon}
                size={20}
              />
            </View>
          </View>
        </View>
        <Pressable
          onPress={() => navigation.navigate('Forgetpassword')}
          style={styles.forget_password_redirect_button}
        >
          <Text style={styles.redirect_button_text}>Forget password?</Text>
        </Pressable>
        <Pressable
          onPress={formSubmit}
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? '#ddd'
                : '#1b3c42'
            },
            styles.button
          ]}
        >
          <Text style={styles.button_text}>Login</Text>
        </Pressable>
        {
          submitted ? <Text>You are logged-in successfully as '{email}'</Text> : null
        }
        <Pressable
          onPress={() => navigation.navigate('Register')}
          style={styles.register_redirect_button}
        >
          <Text style={styles.redirect_button_text}>Don't have an account? Sign-up</Text>
        </Pressable>
        <View style={{ flex:1,alignItems:'center',marginVertical: 30 }}>
        <Text>Or signin with</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent:'center' }}>
          <Image
            source={GMAIL_LOGO}
            style={{ height: 50, width: 50 }}
          ></Image>
          <Image
            source={FACEBOOK_LOGO}
            style={{ height: 50, width: 50 }}
          ></Image>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  forget_password_redirect_button: {
    flex:1,
    marginTop:-30,
    marginRight:20,
    marginBottom: 20,
    alignItems:'flex-end',
  },
  register_redirect_button:{
    flex:1,
    marginTop:30,
    alignItems:'center',
  },
  redirect_button_text: {
    fontSize: 16,
    color: '#000',
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

export default LoginScreen;