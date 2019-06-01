import React from "react"
import Header from "../Sections/Header"
import { View, Text, StyleSheet } from "react-native"


class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header message='Press to login'></Header>
                <Text style={{ flex: 8 }}>This will be the home page</Text>
                <Text style={{ flex: 6 }}>These other lines are here</Text>
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