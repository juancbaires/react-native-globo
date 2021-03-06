//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import HTML from "react-native-render-html";
// create a component
class Blog
    extends Component {
    static NavigationOptions = {
        header: null
    }
    state = {
        blogLoaded: false
    }
    componentDidMount() {
        return fetch('https://public-api.wordpress.com/rest/v1.1/sites/juan954054101.wordpress.com/posts/')
            .then(response => response.json())
            .then((res) => {
                this.setState({
                    blogLoaded: true,
                    blogList: Array.from(res.posts)
                })
            })
            .catch(err => console.log(err))
    }

    chooseBlog = (blogID) => {
        this.props.navigation.navigate('BlogDetailRT', { 'blogId': blogID })

    }
    render() {
        return (
            <View>
                {this.state.blogLoaded && (
                    <View style={{ paddingTop: 40 }} >
                        <FlatList
                            data={this.state.blogList}
                            keyExtractor={(item, index) => item.ID.toString()}
                            renderItem={({ item }) =>
                                <BlogItem
                                    id={item.ID}
                                    title={item.title}
                                    imageSrc={item.featured_image}
                                    excerpt={item.excerpt}
                                    choosePost={this.chooseBlog}
                                />
                            }
                        />

                    </View>
                )}
                {!this.state.blogLoaded && (
                    <View style={{ paddingTop: 30 }}>
                        <Text>LOADING</Text>
                    </View>
                )}
            </View>
        );
    }
}


export class BlogItem extends Component {

    blogChoice = () => {
        this.props.choosePost(this.props.id)
    }

    render() {
        let blogItems = `
        <a href=${this.props.id} style="textDecorationLine: none; color: #000000; textAlign: center">
            <img src=${this.props.imageSrc} />
            <h1 >${this.props.title}</h1>
            ${this.props.excerpt}
        </a>

        `;
        return (
            <View style={{ borderBottomWidth: 2, borderBottomColor: '#000000', borderStyle: 'solid' }}>
                <HTML html={blogItems} onLinkPress={() => this.blogChoice()} />
            </View>
        );
    }
}


//make this component available to the app
export default Blog;
