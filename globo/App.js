import React from 'react';
import Home from './App/Views/Home.js'
import Contact from './App/Views/Contact.js'
import { createAppContainer, createStackNavigator } from 'react-navigation';

const MyRoutes = createStackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },

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

