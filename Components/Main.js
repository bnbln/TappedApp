import React from 'react';
import { StyleSheet, Text,SafeAreaView, View, Button, ScrollView, TouchableOpacity, StatusBar, Animated,
  Image, Easing, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';

import Nav from './Nav';
import Featured from './Featured';
export default class App extends React.Component {
  constructor () {
  super()
  this.spinValue = new Animated.Value(0)
  this.state = {
    questions :[]
  }
}
componentDidMount (){
  const rootRef = firebase.database().ref();
  const quRef = rootRef.child('Questions');
  quRef.on('value', snap => {
    this.setState({
      questions: snap.val()
    })
  });
}
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
      <StatusBar
                barStyle='light-content'
            />
          <ScrollView style={{backgroundColor: '#FFC971'}} horizontal={false} >
            <Featured category="Featured" all="false" data={this.state.questions}></Featured>
            <Featured category="All" all="true" data={this.state.questions}></Featured>
            <Featured category="Pop-Kultur" all="false" data={this.state.questions}></Featured>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFC80F'
  },

});
