import React, { Component } from 'react';
import { Text, View, StyleSheet } from "react-native";
import Header, { header } from "../Sections/Header";

class Contact extends Component {
    static NavigationOptions = {
        header: null,
    }
    render() {
        return (
            <View style={styles.container}>
                <Header message="press to login"></Header>
                <Text style={{ flex: 8 }}></Text>
                <Text style={{ flex: 6 }}></Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Contact;