import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ForgetpasswordScreen } from '../screens/ForgetpasswordScreen';
import HomeScreen from '../screens/HomeScreen.js';
import LoginScreen from '../screens/LoginScreen.js';

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

const Register = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <RegisterScreen />
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

const Forgetpassword = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ForgetpasswordScreen
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
                        component={Register}
                    />
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                    />
                    <Stack.Screen
                        name="Forgetpassword"
                        component={Forgetpassword}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

}
