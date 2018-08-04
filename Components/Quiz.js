import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, Dimensions, TouchableOpacity } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Actions } from 'react-native-router-flux';

import bg from '../Assets/bg.png';



class Quiz extends React.Component {
  constructor (props) {
  super(props)
  this.state = {
    value : 0,
    values : 0,
    screenHeight: Dimensions.get('window').height,
    screenWidth: Dimensions.get('window').width,
    objCount: 1,
    index: 0
  }
}
componentDidMount(){
  var lenge = this.props.data.Quiz;
  var leng = lenge.length - 1;
  this.state.index = leng;}
scrollNext = (value) => {
  screenXWidth = this.state.screenWidth - 8;
  scrollXPos = screenXWidth * this.state.objCount;
  this.scroller.scrollTo({x: scrollXPos, y: 0});
  this.setState({
    values: this.state.value+this.state.values,
    objCount: this.state.objCount+1

    })
}
giveResult = () => {


}
  render() {
    var result = null;
    var index= this.state.index;
    var val = this.state.values;
    var half = index / 2;
    var one = index * 2;
    var two = one - 2;
    var maxPoints = index *3;



    if (val <= maxPoints) {
      result = this.props.data.Result ? this.props.data.Result.R3 : "Hier gibt es nichts zu sehen!";
      if (val <= one) {
        result = this.props.data.Result ? this.props.data.Result.R2 : "Hier gibt es nichts zu sehen!";
        if (val <= index) {
          result = this.props.data.Result ? this.props.data.Result.R1 : "Hier gibt es nichts zu sehen!";
        }
      }
    }

    return (
      <ImageBackground source={bg} blurRadius={30} style={{flex:1, position:"absolute",left:0, top:0, right:0, bottom:0, paddingRight:8,paddingLeft: 8,
      paddingTop:10, margin:0}}>
          <View style={styles.bgBox}>
            <Text>{this.props.data.Category}</Text>
            <Text style={{
              fontSize: 30,
              fontWeight: 'bold'
              }}>{this.props.data.Question}</Text>
            <Text>{this.props.data.Description}</Text>
          </View>
          <ScrollView ref={(scroller) => {this.scroller = scroller}}
            horizontal={true} scrollEnabled={false} showsHorizontalScrollIndicator={false} style={{flex: 2, flexDirection: 'row'}}>
            {this.props.data.Quiz ?
              this.props.data.Quiz.map((questiondata, i) =>
              <View style={styles.bgBoxQuestion} key={i}>
                <Text style={{fontWeight: 'bold', fontSize:24, marginBottom:15}}>{questiondata.Frage}</Text>
                <View style={{height:1, width:"100%", borderRadius:20, backgroundColor:"rgba(0,0,0,0.6)", marginBottom:30}}/>
                  <RadioForm
                    style={{
                      alignItems: "flex-start",
                      marginLeft: 30,
                      marginBottom:80
                    }}
                    radio_props={[
                      {label: questiondata.A1, value: 1 },
                      {label: questiondata.A2, value: 2 },
                      {label: questiondata.A3, value: 3 }
                    ]}
                    initial={0}
                    onPress={(value) => {this.setState({
                      value
                    })}}
                  />
                  <Text>{this.state.value}</Text>
                  <Text>{this.state.values}</Text>

                    <TouchableOpacity style={styles.myButton}
                      onPress={(value) => {this.scrollNext(value)}}>
                      <Text style={{ color:'#fff', fontSize:17, paddingTop:10,paddingBottom:10, fontWeight:'bold'}}>Weiter</Text>
                    </TouchableOpacity>
              </View>
              ) :   null }
              <View style={styles.bgBoxQuestion}>
                <Text>{this.state.values} von {maxPoints}</Text>
                <Text>{result}</Text>


                <TouchableOpacity style={styles.myButton}
                  onPress={()=> {Actions.pop()}}>
                  <Text style={{ color:'#fff', fontSize:17, paddingTop:10,paddingBottom:10, fontWeight:'bold'}}>Schließen</Text>
                </TouchableOpacity>
              </View>
          </ScrollView>

        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  myButton: {
    position: "absolute",
    bottom:10,
    alignSelf:"center",
    backgroundColor:"rgb(0,122,255)",
    width: 130,
    padding: 15,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
bgBox:{
  borderRadius:5, backgroundColor:"rgba(255,255,255,0.8)", padding:15
},
bgBoxQuestion:{
  borderRadius:5, backgroundColor:"rgba(255,255,255,0.8)", padding:15,
  marginTop:15,
  width:Dimensions.get('window').width - 16,
  marginRight:8
}

});
export default Quiz;
