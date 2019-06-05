import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native'


class Menu extends Component {
    onPress = () => {
        Alert.alert("you tapped the button")
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => { this.props.navigate('LessonsRT') }}>
                        <Text style={styles.buttonText}>Lessons</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => { this.props.navigate("RegisterRT") }}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}>Blog</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => { this.props.navigate('ContactRT') }}>
                        <Text style={styles.buttonText}>Contact</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => { this.props.navigate('QuizRT') }}>
                        <Text style={styles.buttonText}>Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}>About</Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: '#35605a'
    },
    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1,
    },
    buttonStyles: {
        backgroundColor: '#35605a',
        height: '50%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
    }

})

export default Menu;