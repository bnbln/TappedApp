import React from 'react';
import { StyleSheet, Text,SafeAreaView, View, Button, ScrollView, TouchableOpacity, StatusBar, Animated,
  Image, Easing, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import { withNavigation } from 'react-navigation';


import Nav from './Nav';
import Featured from './Featured';
export default class Homescreen extends React.Component {
  constructor (props) {
  super(props)
  this.getLayouts = this.getLayouts.bind(this);
  this.spinValue = new Animated.Value(0)
  this.state = {
    questions :[],
    layout :[],
    categories :[],
    layout1: "",
  }
}
componentDidMount (){
  this.getLayouts(this.props.layout, this.props.category)
}
getLayouts(layout, category){
  if (layout) {
    for (var i = 0; i < layout.length; i++) {
      this.state.layout1 =  category[i]

    }
  }
}



  render() {
    if (this.props.thisLayout) {
      var thisLayout = this.props.thisLayout;
      if (this.props.layout[thisLayout]) {
        var myLayout = this.props.layout[thisLayout].CategoryId;
        if (this.props.categories[myLayout]) {
          var layout0 = this.props.categories[myLayout];
        }
      }
    }

    return (
            <Featured navigation={this.props.navigation}
              category={layout0 ? layout0 : "All"}
              all={layout0 ? "false" : "true"}
              data={this.props.questions}
              styleguide={this.props.styleguide}
              ></Featured>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFC80F'
  },

});
