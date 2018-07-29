import React from 'react';
import { StyleSheet, Dimensions, Text, View, Button, ScrollView, TouchableOpacity, Animated,
  Image, Easing } from 'react-native';
  import { Actions } from 'react-native-router-flux';


class Question extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
        <View style={styles.container}>
          <View style={{flex: 1, flexDirection: 'row',
        paddingTop: 8}}>
          <TouchableOpacity style={{
            marginTop: 15,
            marginBottom: 0,
            width: Dimensions.get('window').width - 95,
            padding: 20,
            left: 15,
            backgroundColor: '#fff',
            borderRadius: 5,
            position: "relative",
            alignItems: 'flex-start',
            shadowColor: "black",
            //shadowOffset:10,
            shadowOpacity:0.1,
            shadowRadius:40,

              }}>
              <Text style={{
                  fontSize: 30,
                  width: '80%',
                  fontWeight: 'bold'
                }}>{this.props.q}</Text>
                <Text style={{
                  marginTop: 15
                  }}>{this.props.p}</Text>
        </TouchableOpacity>
        <TouchableOpacity
           style={{
             marginTop: 15,
             width: Dimensions.get('window').width - 60,
             padding: 20,
             paddingLeft: 90,
             left: 30,
             backgroundColor: '#fff',
             borderRadius: 5,
             position: "relative",
             alignItems: 'flex-start',
             shadowColor: "black",
             //shadowOffset:10,
             shadowOpacity:0.1,
             shadowRadius:40,
           }}
           onPress={this.props.action}

         >
        </TouchableOpacity>

        </View>
        </View>
    );
  }
}

function alertAbc() {
  console.log('abc');
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  question: {
    flex: 3,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    marginTop: 30,
    height: 40,
    padding: 20,
    left: 8,
    width: "84%",



  },
});
export default Question;
