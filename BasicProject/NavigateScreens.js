import React, { Component } from 'react';
import { Button, ScrollView, Text, TouchableOpacity, View, Image, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from './Register.js';
import { Login } from './Login.js';
import { Forgetpassword } from './Forgetpassword';
import { LOGO } from './src/image/index.js';

const Stack = createNativeStackNavigator();
const Separator = () => (
    <View style={styles.separator} />
);
const ButtonSeparator = () => (
    <View style={styles.buttonSeparator} />
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: 412,
        height: 210,
    },
    separator: {
        marginVertical: 100,
    },
    buttonSeparator: {
        marginVertical: 8,
    }
});

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image
                    style={styles.logo}
                    source={LOGO}
                />
                <Separator />
                <View style={{ alignItems: 'center' }}>
                    <Button
                        title="Login"
                        color="#1b3c42"
                        onPress={() => navigation.navigate('Login')}
                    />
                    <ButtonSeparator />
                    <Button
                        title="Register"
                        color="#1b3c42"
                        onPress={() => navigation.navigate('Register')}
                    />
                    <ButtonSeparator />
                    <Button
                        title="Forgetpassword"
                        color="#1b3c42"
                        onPress={() => navigation.navigate('Forgetpassword')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

function RegisterScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Register />
            <View style={{ marginVertical: 20, }}></View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
            >
                <Text >Already have an account? Login</Text>
            </TouchableOpacity >
        </View>
    );
}

function ForgetpasswordScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Forgetpassword />
            <View style={{ marginVertical: 20, }}></View>
            <TouchableOpacity
                style={{ height: 370 }}
                onPress={() => navigation.navigate('Login')}
            >
                <Text >Back to login</Text>
            </TouchableOpacity >
        </View>
    );
}

function LoginScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SafeAreaView style={{flex: 1,
    backgroundColor: '#ffffff',}}>
                <Login />
            </SafeAreaView>
            <TouchableOpacity style={{ backgroundColor: '#1b3c42', marginLeft: 20, marginRight: 20, height: 40, borderRadius: 55 }}
                onPress={() => {
                    Alert.alert('Login Button pressed');
                }}
            >
                <Text style={{ color: "#ffffff", textAlign: 'center', fontWeight: "bold", fontSize: 17, paddingTop: 6 }}>
                    Login
                </Text>
            </TouchableOpacity >
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
