import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from './Register.js';
import { Forgetpassword } from './Forgetpassword';
import HomeScreen from './HomeScreen.js';
import LoginScreen from './Login.js';

const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        margin: 10,
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
    image_container: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    buttons_container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 100,
    },
    logo: {
        width: 412,
        height: 210,
    },

});

const RegisterScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <Register />
                <Pressable
                    onPress={() => navigation.navigate('Login')}
                    style={styles.redirect_button}
                >
                    <Text style={styles.redirect_button_text}>Already have an account? Login</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>

    );
}

const ForgetpasswordScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Forgetpassword
                onNavigation={navigation}
            />
        </SafeAreaView>
    );
}



export class NavigateScreens extends Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                    />
                    <Stack.Screen
                        name="Register"
                        component={RegisterScreen}
                    />
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                    />
                    <Stack.Screen
                        name="Forgetpassword"
                        component={ForgetpasswordScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

}
