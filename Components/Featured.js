import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';



class Featured extends React.Component {
  constructor (props) {
  super(props)
}
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flex: 2, flexDirection: 'row'}}>
          <View style={{flex:1, marginBottom:10}}>
          {this.props.all === "false" ?
            <Text style={{position:"absolute"}}>{this.props.category}</Text> : null
          }
          </View>
        {this.props.data.map((data, i) =>
            {return this.props.all === "false" ?

              data.Category === this.props.category ?
            <TouchableOpacity style={styles.TouchBox}
            key={i}
            onPress={() => Actions.quiz({
              data
            })}>
              <Text style={styles.QuestionInBox}>{data.Question}</Text>
              <Text style={styles.DescriptionInBox}>{data.Description}</Text>

            </TouchableOpacity> : null :
            <TouchableOpacity style={styles.TouchBox}
            key={i}
            onPress={() => Actions.quiz({
              data
            })}>
              <Text style={styles.QuestionInBox}>{data.Question}</Text>
              <Text style={styles.DescriptionInBox}>{data.Description}</Text>

            </TouchableOpacity>

          }
        )}

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TouchBox: {
    minHeight: 250,
    marginTop: 30,
    marginBottom: 0,
    marginRight: 15,
    width: Dimensions.get('window').width - 95,
    padding: 20,
    left: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    position: "relative",
    alignItems: 'flex-start',
    shadowColor: "black",
    shadowOpacity:0.1,
    shadowRadius:40
  },
  QuestionInBox: {
    fontSize: 30,
    width: '80%',
    fontWeight: 'bold'
  },
  DescriptionInBox: {
    marginTop: 15
  }
});
export default Featured;
