import React from 'react';
import { StyleSheet, Text,SafeAreaView, View, Button, ScrollView, TouchableOpacity, StatusBar, Animated,
  Image, Easing, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import {styleguide} from "./x_styleguide";

import Nav from './Nav';
import Homescreen from './Homescreen';

import Featured from './Featured';
export default class Main extends React.Component {
  constructor (props) {
  super(props)
  this.spinValue = new Animated.Value(0)
  this.state = {
    questions :[],
    layout :[],
    categories :[],
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

static navigationOptions = {
    title: 'Tapped',
    headerStyle: {
      backgroundColor: "#CD405B",
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 27,
    },
  };

componentDidMount (){
  const rootRef = firebase.database().ref();
  const quRef = rootRef.child('Questions');
  const layRef = rootRef.child('Layout');
  const catRef = rootRef.child('Categories');
  quRef.on('value', snap => {
    this.setState({
      questions: snap.val()
    })
  });
  layRef.on('value', snap => {
    this.setState({
      layout: snap.val()
    })
  });
  catRef.on('value', snap => {
    this.setState({
      categories: snap.val()
    })
  });

}

  render() {
    console.log("Main Props",this.props);
    return (
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: styleguide.red
      }}>
      <StatusBar
                barStyle='light-content'
            />
          <ScrollView style={{backgroundColor: styleguide.red}} horizontal={false} >
            <Homescreen {...this.props}
              navigation={this.props.navigation}
              questions={this.state.questions}
              categories={this.state.categories}
              layout={this.state.layout}
              styleguide={this.state.styleguide}
              thisLayout="0" />
            <Featured category="All" all="true" data={this.state.questions}
              navigation={this.props.navigation}
              styleguide={this.state.styleguide}></Featured>
            <Homescreen {...this.props}
              navigation={this.props.navigation}
              questions={this.state.questions}
              categories={this.state.categories}
              layout={this.state.layout}
              styleguide={this.state.styleguide}
              thisLayout="1" />
            <Homescreen {...this.props}
              navigation={this.props.navigation}
              questions={this.state.questions}
              categories={this.state.categories}
              layout={this.state.layout}
              styleguide={this.state.styleguide}
              thisLayout="2" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
