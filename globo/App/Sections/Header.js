import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

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
                <Image
                    style={styles.logoStyle}
                    source={require('./Img/Globo_logo_REV.png')}
                />


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
        flex: 1,
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
    },
    headStyle: {
        paddingTop: 30,
        paddingBottom: 10,
        paddingRight: 10,
        backgroundColor: '#35605a',
        flex: 1,
        flexDirection: 'row',
        borderColor: '#000000'
    },
    logoStyle: {
        flex: 1,
        width: undefined,
        height: undefined,

    }
})

export default Header