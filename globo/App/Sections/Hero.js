import React from 'react';
import { StyleSheet, Image } from 'react-native'

class Hero extends React.Component {
    render() {
        return (
            <Image
                style={styles.heroImage}
                source={require('./Img/laptop2.jpg')}
            />
        );
    }
}

const styles = StyleSheet.create({
    heroImage: {
        width: undefined,
        height: undefined,
        flex: 8
    }
})

export default Hero;