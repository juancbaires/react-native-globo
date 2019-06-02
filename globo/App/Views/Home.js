import React from "react"
import Header from "../Sections/Header"
import Hero from "../Sections/Hero"
import Menu from '../Sections/Menu'
import { View, Text, StyleSheet } from "react-native"
import { createStackNavigator, createAppContainer } from 'react-navigation';


class Home extends React.Component {
    static NavigationOptions = {
        header: null
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <Header message='Press to login'></Header>
                <Hero />
                <Menu navigate={navigate} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default Home;