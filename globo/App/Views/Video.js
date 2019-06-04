import React, { Component } from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback, Button } from "react-native";
import { createStackNavigator } from "react-navigation";

class Video extends Component {

    static NavigationOptions = {
        header: null
    }
    state = {
        listLoaded: false,

    }
    componentDidMount() {

        return fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyAXmft5gh7jEMDMTSl0qW948K61AoSlgCA")
            .then(res => res.json()).then(resJSON => {
                this.setState({
                    listLoaded: true,
                    videoList: Array.from(resJSON.items)
                })
            }).catch(err => console.log(err))
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                {this.state.listLoaded && (
                    <View style={{ paddingTop: 30 }}>
                        <FlatList
                            data={this.state.videoList}
                            renderItem={({ item }) =>
                                <TubeItem
                                    navigate={navigate}
                                    id={item.id.videoId}
                                    title={item.snippet.title}
                                    imageSrc={item.snippet.thumbnails.high.url}
                                    key={item.id.videoId + 1}
                                />}
                        />
                    </View>
                )}
                {!this.state.listLoaded && (
                    <View style={{ paddingTop: 30 }}>
                        <Text>Loading</Text>
                    </View>
                )}
            </View>
        );
    }
}

export class TubeItem extends Component {
    onPress = () => {
        this.props.navigate('VideoDetailRT', { ytubeId: this.props.id })
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={{ paddingTop: 20, alignItems: 'center' }}>
                    <Image
                        style={{ width: '100%', height: 200 }}
                        source={{ uri: this.props.imageSrc }}
                    />
                    <Text>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default Video;