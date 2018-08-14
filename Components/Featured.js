import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {styleguide} from "./x_styleguide";
import { withNavigation } from 'react-navigation';
import png from '../Assets/google-trends.png';




class Featured extends React.Component {
  constructor (props) {
  super(props);
  this.handleScroll = this.handleScroll.bind(this);
  this.state = {
    scrollX: new Animated.Value(0)

  }
}
handleScroll(e){
  var scroll = e.nativeEvent.contentOffset.x;
  if (scroll < 0) {
    this.setState({scrollX: e.nativeEvent.contentOffset.x})
  } else {
    this.setState({scrollX: 205})
  }
}

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: {
                 contentOffset: {
                   x: this.state.scrollX
                 }
               }
             }]
          )}
          scrollEventThrottle={ 1 }
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{flex: 2, flexDirection: 'row', overflow: "visible"}}>
          {this.props.all === "false" ?
          <TouchableOpacity>
            <Animated.View
              style={{
                minHeight: 250,
                marginTop: 15,
                marginBottom: 0,
                marginRight: -200,
                width: 200+65,
                left: -200,
                padding: 5,
                paddingLeft:this.state.scrollX.interpolate({
                inputRange: [-265, 0, 100],
                outputRange: [-60, 205, 205]  })
                ,
                backgroundColor: styleguide.gray,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
                position: "relative",
                alignItems: 'center',
                justifyContent: "center",
                shadowColor: "black",
                shadowOpacity:0.1,
                shadowRadius:40,
                }}>
              <Image source={png} style={{width:45,height:45}}/>
              <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={{color:"#fff", marginTop:10}}>{this.props.category}</Text>

            </Animated.View>

          </TouchableOpacity> : null
          }

          <FlatList
              data={this.props.data}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                item ?
                  this.props.all === "false" ?
                    item.Category === this.props.category ?
                      <TouchableOpacity style={styles.TouchBox}
                        onPress={() => this.props.navigation.navigate('Quiz', {
                          data: item,
                          styleguide: this.props.styleguide
                        })}>
                        <Text style={styles.QuestionInBox}>{item.Question}</Text>
                        <Text style={styles.DescriptionInBox}>{item.Description}</Text>
                      </TouchableOpacity>
                    : null :
                  <TouchableOpacity style={styles.TouchBox}
                    onPress={() => this.props.navigation.navigate('Quiz', {
                      data: item,
                      styleguide: this.props.styleguide
                    })}>
                    <Text style={styles.QuestionInBox}>{item.Question}</Text>
                    <Text style={styles.DescriptionInBox}>{item.Description}</Text>
                  </TouchableOpacity>
                : null )}
              />

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
  }
});
export default Featured;
