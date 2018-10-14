import React from 'react';
import { StyleSheet, Text,SafeAreaView, View, Button, ScrollView, TouchableOpacity, StatusBar, Animated,
  Image, Easing } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import config from './config';
import * as firebase from 'firebase';
import {
  createStackNavigator,
} from 'react-navigation';
import Main from './Components/Main'
import Quiz from './Components/Quiz'
import Nav from './Components/Nav';
import {styleguide} from "./Components/x_styleguide";
firebase.initializeApp(config);

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    styleguide: {
      yellow: "#FFC363",
      red: "#CD405B",
      blue: "#279BC2",
      gray: "#3C3D42",
      lightgray:"#F7F7F7",
      boxShadow: "inset 0px -20px 60px 0px #00000010"
    },
  }
}
  render(){
    return(
       <RootStack styleguide={this.state.styleguide}/>
    )
  }
}


const RootStack = createStackNavigator({
  Home: {
    screen: Main,
    props: this.state

  },
  Quiz: {
    screen: Quiz
  },
});

export default App;
