import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Header extends React.Component {
    state = {
        isLoggedIn: false
    }

    toggleUser = () => {
        this.setState(previousState => {
            return { isLoggedIn: !previousState.isLoggedIn }
        })
    }

    render() {
        let display = this.state.isLoggedIn ? "sample user" : this.props.message
        return (
            <View style={styles.headStyle}>
                <Text
                    style={styles.headText}
                    onPress={this.toggleUser}>
                    {display}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
    },
    headStyle: {
        paddingTop: 30,
        paddingBottom: 10,
        paddingRight: 10,
        backgroundColor: '#35605a',
        flex: 1
    }
})

export default Header