import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image, StyleSheet, SafeAreaView, Alert, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from './Register.js';
import { Login } from './Login.js';
import { Forgetpassword } from './Forgetpassword';
import { LOGO, GMAIL_LOGO, FACEBOOK_LOGO } from './src/image/index.js';

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

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.image_container}>
                <Image
                    style={styles.logo}
                    source={LOGO}
                />
            </View>
            <View style={styles.buttons_container}>
                <Pressable
                    onPress={() => navigation.navigate('Login')}
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
                <Pressable
                    onPress={() => navigation.navigate('Register')}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? '#ddd'
                                : '#1b3c42'
                        },
                        styles.button
                    ]}
                >
                    <Text style={styles.button_text}>Register</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

function RegisterScreen({ navigation }) {
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

function ForgetpasswordScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <Forgetpassword />
                <Pressable
                    onPress={() => navigation.navigate('Login')}
                    style={styles.redirect_button}
                >
                    <Text style={styles.redirect_button_text}>Back to login</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}

function LoginScreen({ navigation }) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 0, backgroundColor: '#ffffff', }}>
            <SafeAreaView>
                <Login />
            </SafeAreaView>
            <TouchableOpacity
                style={{ marginLeft: 261, }}
                onPress={() => navigation.navigate('Forgetpassword')}
            >
                <Text>Forget password?</Text>
            </TouchableOpacity >
            <TouchableOpacity style={{ backgroundColor: '#1b3c42', marginLeft: 20, marginRight: 20, height: 40, borderRadius: 55, width: 370, marginVertical: 20 }}
                onPress={() => {
                    Alert.alert('Login Button pressed');
                }}
            >
                <Text style={{ color: "#ffffff", textAlign: 'center', fontWeight: "bold", fontSize: 17, paddingTop: 6 }}>
                    Login
                </Text>
            </TouchableOpacity >
            <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
            >
                <Text>Don't have an account? Sign-up</Text>
            </TouchableOpacity >
            <View style={{ marginVertical: 20 }}></View>
            <Text>Or signin with</Text>
            <View style={{ marginVertical: 20 }}></View>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={GMAIL_LOGO}
                    style={{ height: 50, width: 50 }}
                ></Image>
                <Image
                    source={FACEBOOK_LOGO}
                    style={{ height: 50, width: 50 }}
                ></Image>
            </View>
        </View>
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
