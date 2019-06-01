import React from "react"
import Header from "../Sections/Header"
import Hero from "../Sections/Hero"
import Menu from '../Sections/Menu'
import { View, Text, StyleSheet } from "react-native"


class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header message='Press to login'></Header>
                <Hero />
                <Menu />
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