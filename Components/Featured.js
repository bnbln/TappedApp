import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import png from '../Assets/google-trends.png';




class Featured extends React.Component {
  constructor (props) {
  super(props)
}
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flex: 2, flexDirection: 'row'}}>
          {this.props.all === "false" ?
          <TouchableOpacity style={styles.TouchBoxCategory}>
            <Image source={png} style={{width:45,height:45}}/>
            <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={{color:"#fff", marginTop:10}}>{this.props.category}</Text>

          </TouchableOpacity> : null
          }

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
    marginTop: 15,
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
    shadowRadius:40,
  },
  QuestionInBox: {
    fontSize: 30,
    width: '80%',
    fontWeight: 'bold'
  },
  DescriptionInBox: {
    marginTop: 15
  },
  TouchBoxCategory:{
    minHeight: 250,
    marginTop: 15,
    marginBottom: 0,
    marginRight: -200,
    width: 200+65,
    left: -200,
    padding: 5,
    paddingLeft: 205,
    backgroundColor: '#3F3C38',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    position: "relative",
    alignItems: 'center',
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity:0.1,
    shadowRadius:40,
    }
});
export default Featured;
