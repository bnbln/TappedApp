import React from 'react';
import { StyleSheet, Text,SafeAreaView, View, Button, ScrollView, TouchableOpacity, StatusBar, Animated,
  Image, Easing } from 'react-native';
  import { Router, Scene } from 'react-native-router-flux';
  import * as firebase from 'firebase';
  import Main from './Components/Main'
  import Quiz from './Components/Quiz'
import Nav from './Components/Nav';
import Question from './Components/Question';

var config = {
  apiKey: "AIzaSyCHEEhEClVj7VrZ5PTcgKgNoMcGZBrscew",
  authDomain: "tapped-app-67f43.firebaseapp.com",
  databaseURL: "https://tapped-app-67f43.firebaseio.com",
  projectId: "tapped-app-67f43",
  storageBucket: "tapped-app-67f43.appspot.com",
  messagingSenderId: "737804765018"
};
firebase.initializeApp(config);
const App = () => {
  return (
    <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
      <Scene key="root">
        <Scene key="scarlet"
          component={Main}
          title="Tapped"
          initial
        />
      <Scene key="quiz"
          component={Quiz}
          title="Tapped"
        />
      </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#FFC80F', // changing navbar color
    height:60
  },
  navTitle: {
    color: 'white', // changing navbar title color
    fontSize: 30,
    marginBottom:0
  }
})

export default App;
