import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight, Alert } from "react-native";
import Header from "../Sections/Header";
import { createStackNavigator } from "react-navigation";

class Contact extends Component {
    static NavigationOptions = {
        header: null,
    }
    state = {
        msg: 'Enter Message',
        name: 'Enter Name',
        email: 'Enter Email Address',
    }

    clearFields = () => {
        this.setState({
            msg: '',
            name: '',
            email: ''
        })
    }

    sendMessage = () => {
        Alert.alert(this.state.name, this.state.msg)
        this.props.navigation.goBack()
    }
    render() {
        return (
            <View style={styles.container}>
                <Header message="press to login"></Header>
                <Text style={styles.heading}>Contact Us</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => { this.setState({ name: text }) }}
                    value={this.state.name}
                />
                <TextInput
                    style={styles.multiInput}
                    onChangeText={(text) => this.setState({ msg: text })}
                    value={this.state.msg}
                    multiline={true}
                    numberOfLines={4}
                />
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email}
                />

                <TouchableHighlight onPress={this.sendMessage} underlayColor='#31e981'>
                    <Text style={styles.buttons}>Send Message</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.clearFields} underlayColor='#31e981'>
                    <Text style={styles.buttons}>Reset</Text>
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
        margin: 5
    },
    heaeding: {
        fontSize: 16,
        flex: 1,
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    multiInput: {
        flex: 2,
        width: '90%',
        paddingTop: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    buttons: {
        fontSize: 16,
        marginTop: 15,
    }
})

export default Contact;