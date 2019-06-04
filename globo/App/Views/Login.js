//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Alert, AsyncStorage } from 'react-native';

// create a component
class Login extends Component {
    static NavigationOptions = {
        header: null
    }
    state = {
        username: '',
        password: '',
    }
    cancelLogin = () => {
        Alert.alert('Login canceled')
        this.props.navigation.navigate('HomeRT')
    }

    loginUser = () => {
        if (!this.state.username) {
            Alert.alert('Please enter username')
        }
        else if (!this.state.password) {
            Alert.alert('Please enter password')
        }
        else {
            AsyncStorage.getItem('userLoggedIn', (err, result) => {

                if (result !== 'none') {
                    Alert.alert('Somebody is already logged in')
                    this.props.navigation.navigate('HomeRT')
                }
                else {

                    AsyncStorage.getItem(this.state.username, (err, result) => {

                        if (result !== null) {

                            if (result !== this.state.password) {
                                Alert.alert('incorrect password')
                            }
                            else {
                                AsyncStorage.setItem('userLoggedIn', (err, result) => {
                                    Alert.alert(`${this.state.username} is Logged in`)
                                    this.props.navigation.navigate('HomeRT')
                                })
                            }
                        } else {
                            Alert.alert(`No account for ${this.state.username}`)
                            this.props.navigation.navigate('HomeRT')
                        }
                    })
                }
            })
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Login</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ username: text })}
                    value={this.state.username}
                />
                <Text style={styles.label}>Enter Username</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ password: text })}
                    value={this.state.password}
                    secureTextEntry={true}
                />
                <Text style={styles.label}>Enter Password</Text>

                <TouchableHighlight onPress={this.loginUser} underlayColor="#31e981">
                    <Text style={styles.buttons}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.cancelLogin} underlayColor="#31e981">
                    <Text style={styles.buttons}>Cancel Login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: 10,
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    input: {
        flex: 1,
        width: "80%",
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    },
    label: {
        paddingBottom: 10
    }
})

//make this component available to the app
export default Login;
