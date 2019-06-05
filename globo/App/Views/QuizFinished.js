//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

// create a component
class Finish extends Component {
    static NavigationOptions = {
        heading: null
    }

    exitQuiz = () => {
        this.props.navigation.navigate('HomeRT')
    }
    render() {
        let userScore = this.props.navigation.getParam('score', "Error - No score returned")
        let questionsMissed = this.props.navigation.getParam('missed', "Error - No questions Missed")
        let totalQuestions = this.props.navigation.getParam('questions', 'Error - No questions returned')
        return (
            <View style={styles.container}>
                <Text>Your quiz score was {userScore}</Text>
                <Text>You missed on {questionsMissed} out of {totalQuestions} questions</Text>

                <TouchableHighlight onPress={this.exitQuiz} style={styles.button}>
                    <Text>Finish Quiz</Text>
                </TouchableHighlight>
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
        paddingTop: 30,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%'
    }
});

//make this component available to the app
export default Finish;
