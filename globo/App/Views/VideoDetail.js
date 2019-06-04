import React, { Component } from 'react';
import { Text, View, } from "react-native";
import { WebView } from 'react-native-gesture-handler';


class VideoDetail extends Component {
    static NavigationOptions = {
        header: null
    }
    render() {
        let tubeId = this.props.navigation.getParam('ytubeId', 'NO VIDEO')
        let tubeURL = `https://www.youtube.com/embed/${tubeId}`
        return (
            <WebView
                style={{ marginTop: 20 }}
                javaScriptEnabled={true}
                source={{ uri: tubeURL }}
            />
        );
    }
}

export default VideoDetail;