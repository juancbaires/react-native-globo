import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    AsyncStorage
} from "react-native";


class Register extends Component {
    static NavigationOptions = {
        header: null
    }
    state = {
        username: '',
        password: '',
        passwordConfirm: ''
    }

    cancelRegister = () => {
        Alert.alert("Registration canceled")
        this.props.navigation.navigate('HomeRT')
    }

    registerAccount = () => {
        if (!this.state.username) {
            Alert.alert('Please enter username')
        } else if (this.state.password !== this.state.passwordConfirm) {
            Alert.alert('Passwords do not Match!')
        } else {
            AsyncStorage.getItem(this.state.username, (err, result) => {
                if (result !== null) {
                    Alert.alert(`${this.state.username} already exists`)
                } else {
                    AsyncStorage.setItem(this.state.username, this.state.password, (err, result) => {
                        Alert.alert(`${this.state.username}'s account was created`)
                        this.props.navigation.navigate('HomeRT')
                    })
                }
            })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Register Account</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ username: text })}
                    value={this.state.username}
                />
                <Text style={styles.label}>Enter Username</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ password: text })}
                    secureTextEntry={true}
                    value={this.state.password}
                />
                <Text style={styles.label}>Enter Password</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ passwordConfirm: text })}
                    secureTextEntry={true}
                    value={this.state.passwordConfirm}
                />
                <Text style={styles.label}>Confirm Password</Text>

                <TouchableHighlight onPress={this.registerAccount} underlayColor="#31e981">
                    <Text style={styles.buttons}>Register</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.cancelRegister} underlayColor="#31e981">
                    <Text style={styles.buttons}>Cancel</Text>
                </TouchableHighlight>


            </View>
        );
    }
}

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

export default Register;