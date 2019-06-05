//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import HTML from "react-native-render-html";
// create a component
class Blog
    extends Component {
    static NavigationOptions = {
        header: null
    }
    state = {
        blogLoaded: false
    }
    componentDidMount() {
        return fetch()
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Blog

                </Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Blog
    ;
