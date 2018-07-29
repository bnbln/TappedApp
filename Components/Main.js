import React from 'react';
import { StyleSheet, Text,SafeAreaView, View, Button, ScrollView, TouchableOpacity, StatusBar, Animated,
  Image, Easing } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';

import Nav from './Nav';
import Question from './Question';
//import database from '../Connection/Firebase.js';

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
  console.log(this.state.questions);
  console.log(this.state.content);
    return (
      <SafeAreaView style={styles.safeArea}>
      <StatusBar
                barStyle='light-content'
            />
        <ScrollView style={{backgroundColor: '#FFC80F',}}>
          <Text>{this.state.question}</Text>
          {this.state.questions.map((question, i) =>
            <Question
              key={i}
              q={question.Question}
              p={question.Description}
              action={(i) => Actions.quiz()}
              ></Question>
          )}
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
