//import liraries
import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import HTML from 'react-native-render-html'

// create a component
class BlogDetail extends Component {
    static NavigationOptions = {
        header: null
    }
    state = {
        postLoaded: false
    }
    componentDidMount() {
        let blogId = this.props.navigation.getParam('blogId', 'NO BLOG')
        return fetch(`https://public-api.wordpress.com/rest/v1.1/sites/juan954054101.wordpress.com/posts/${blogId}`)
            .then(res => res.json())
            .then(responseJSON => {
                this.setState({
                    postLoaded: true,
                    postTitle: responseJSON.title,
                    postImage: responseJSON.featured_image,
                    postContent: responseJSON.content,
                    postID: responseJSON.ID
                })
            })
            .catch(err => console.log(err))
    }

    goBack = () => {
        this.props.navigation.navigate('BlogRT')
    }

    render() {
        const blogTagStyles = {
            img: { display: 'none' },
        }
        const blogClassStyles = {
            b1Title: { marginLeft: 'auto', marginRight: 'auto', },
            b1Content: { marginLeft: 10, marginRight: 10 },
            biBack: { marginLeft: 'auto', marginRight: 'auto', paddingBottom: 20, }
        }
        let postDetails = `
            <div class="b1Title">
                <h1>${this.state.postTitle}</h1>
            </div>
            <div class="b1Content">
                ${this.state.postContent}
            </div>
            <div>
                <a href=${this.state.postID} style="textDecorationLine: none, color: #000000">
                <h2>Go Back</h2>
                </a>
            </div>
        `
        return (
            <View style={{ paddingTop: 30 }}>

                {this.state.postLoaded && (
                    <ScrollView>
                        <Image
                            style={{ width: '100%', height: 200 }}
                            source={{ uri: this.state.postImage }}
                        />
                        <HTML
                            html={postDetails}
                            tagsStyles={blogTagStyles}
                            classesStyles={blogClassStyles}
                            onLinkPress={() => this.goBack()}
                        />


                    </ScrollView>
                )}
                {!this.state.postLoaded && (
                    <View style={{ paddingTop: 20, alignItems: 'center' }}>
                        <Text>LOADING</Text>
                    </View>
                )}
            </View>
        )
    }
}


//make this component available to the app
export default BlogDetail
    ;
