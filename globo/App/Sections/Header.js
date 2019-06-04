import React from 'react'
import { StyleSheet, Text, View, Image, AsyncStorage, Alert } from 'react-native'

class Header extends React.Component {
    state = {
        isLoggedIn: false,
        loggedUser: false
    }

    toggleUser = () => {
        if (this.state.isLoggedIn) {
            AsyncStorage.setItem('userLogginIn', 'none', (err, result) => {
                this.setState({
                    isLoggedIn: false,
                    loggedUser: false
                })
                Alert.alert('user logged out')
            })
        } else {
            this.props.navigate('LoginRT')
        }
    }


    componentDidMount() {
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if (result === 'none') {
                console.log('none')
            }
            else if (result === null) {
                AsyncStorage.setItem('userLoggedIn', (err, result) => {
                    console.log('Set user to none')
                })
            } else {
                this.setState({
                    isLoggedIn: true,
                    loggedUser: result
                })
            }
        })
    }

    render() {
        let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message
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