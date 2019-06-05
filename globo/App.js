import React from 'react';
import Home from './App/Views/Home.js'
import Contact from './App/Views/Contact.js'
import Video from './App/Views/Video'
import VideoDetail from './App/Views/VideoDetail'
import Register from "./App/Views/Register";
import Login from "./App/Views/Login.js";
import Quiz from './App/Views/Quiz'
import Finish from './App/Views/QuizFinished'
import Blog from './App/Views/Blog'
import BlogDetail from "./App/Views/BlogDetail"
import About from './App/Views/About'

import { createAppContainer, createStackNavigator } from 'react-navigation';

const MyRoutes = createStackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  LessonsRT: {
    screen: Video
  },
  VideoDetailRT: {
    screen: VideoDetail
  },
  RegisterRT: {
    screen: Register
  },
  LoginRT: {
    screen: Login
  },
  QuizRT: {
    screen: Quiz,
  },
  FinishRT: {
    screen: Finish
  },
  BlogRT: {
    screen: Blog
  },
  BlogDetailRT: {
    screen: BlogDetail
  },
  AboutRT: {
    screen: About
  }
})

const AppContainer = createAppContainer(MyRoutes)

class App extends React.Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}

export default AppContainer

