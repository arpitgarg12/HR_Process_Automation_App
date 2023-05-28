import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,Button, StyleSheet, Alert, SafeAreaView, ImageBackground } from 'react-native';
import WelcomePage from './WelcomePage'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const LoginPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Check if the entered credentials are valid
        if (username === 'admin' && password === 'password') {
            // Redirect to the welcome page
            navigation.navigate('WelcomePage');
        } else {
            // Show an error message for invalid credentials
            Alert.alert('Invalid Credentials', 'Please enter valid admin credentials.');
        }
    };

    return (
        <SafeAreaView style={{flex:1}}>
            <ImageBackground
                source={require('../src/images/background-image.jpg')}
                style={styles.backgroundImage}
            >
                <Text style={styles.heading}>Welcome to Mintavibe HR Portal</Text>

                <Text style={styles.description}>
                    Your one-stop solution for all HR processes.
                </Text>
                <Text style={styles.heading}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                {/* <TouchableOpacity style={{backgroundColor:"green", paddingVertical:10, paddingHorizontal:20,borderWidth:1,borderColor:"green", borderRadius:10,width:100 }}  onPress={()=> navigation.navigate("WelcomePage")}>
                    <Text style={{fontSize:15, color:"#ffffff", textAlign:'center'}}>Login</Text>
                </TouchableOpacity> */}
                <Button title="Login" onPress={()=> handleLogin()} />
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 70,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#00ff00',
        textAlign: 'center',
      },
      description: {
        fontSize: 16,
        marginBottom: 40,
        color: '#ffffff',
        textAlign: 'center',
      },
});

export default LoginPage;
