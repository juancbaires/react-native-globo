//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, Image } from 'react-native';
const aboutGlobo = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const whatGlobo = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

// create a component
class About extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <Image
                    style={styles.pics}
                    source={require('../Sections/Img/arch640.jpg')}
                />
                <Text style={styles.aboutTitle}>Who We Are</Text>
                <Text style={styles.aboutText}>{aboutGlobo}</Text>
                <Image
                    style={styles.pics}
                    source={require('../Sections/Img/computer640.jpg')}
                />
                <Text style={styles.aboutTitle}>What We Do</Text>
                <Text style={styles.aboutText}>{whatGlobo}</Text>
                <Text onPress={() => this.props.navigation.goBack()} style={styles.backButton}>Go Back</Text>
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#ffffff'
    },
    pics: {
        height: 300,
    },
    aboutTitle: {
        paddingTop: 10,
        textAlign: 'center',

    },
    aboutText: {
        paddingBottom: 20,

    },
    backButton: {
        paddingBottom: 50,
        textAlign: 'center'
    }
});

//make this component available to the app
export default About;