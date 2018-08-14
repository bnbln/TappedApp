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
static navigationOptions = {
    header: null,
    headerStyle: {
      backgroundColor: "#CD405B",
    },
  };
componentDidMount(){
  var lenge = this.props.navigation.state.params.data.Quiz;
  var leng = lenge.length - 1;
  this.state.index = leng;}
scrollNext = (value) => {
  screenXWidth = this.state.screenWidth - 8;
  scrollXPos = screenXWidth * this.state.objCount;
  this.scroller.scrollTo({x: scrollXPos, y: 0});
  this.setState({
    values: this.state.value+this.state.values,
    value: 0,
    objCount: this.state.objCount+1

    })
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
      result = this.props.navigation.state.params.data.Result ? this.props.navigation.state.params.data.Result.R3 : "Hier gibt es nichts zu sehen!";
      if (val <= one) {
        result = this.props.navigation.state.params.data.Result ? this.props.navigation.state.params.data.Result.R2 : "Hier gibt es nichts zu sehen!";
        if (val <= index) {
          result = this.props.navigation.state.params.data.Result ? this.props.navigation.state.params.data.Result.R1 : "Hier gibt es nichts zu sehen!";
        }
      }
    }

    {if (this.state.value === 0) {
       var dis = true;
    } else {
      var dis = false;
    }}
    console.log("quiz", this.props);
    return (
      <ImageBackground source={bg} blurRadius={30} style={{flex:1, position:"absolute",left:0, top:0, right:0, bottom:0, paddingRight:8,paddingLeft: 8,paddingBottom: 8,
        paddingTop:10, margin:0, backgroundColor: this.props.navigation.state.params.styleguide ? this.props.navigation.state.params.styleguide.red : "white"}}>
          <View style={styles.bgBox}>
            <Text style={{color: "white"}}>{this.props.navigation.state.params.data.Category}</Text>
            <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: "white"
              }}>{this.props.navigation.state.params.data.Question}</Text>
            <TouchableOpacity style={{
                backgroundColor: this.props.navigation.state.params.styleguide.gray,
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 0
                },
                shadowRadius: 2,
                shadowOpacity: 0.4,
                height: 40,
                width: 40,
                paddingLeft: 5,
                borderRadius: 100,
                borderColor: this.props.navigation.state.params.styleguide.gray,
                position: "absolute",
                left: -25
              }} onPress={() => {
                this.props.navigation.pop()
              }}></TouchableOpacity>
          </View>
          <ScrollView ref={(scroller) => {this.scroller = scroller}}
            horizontal={true} scrollEnabled={false} showsHorizontalScrollIndicator={false} style={{flex: 2, flexDirection: 'row'}}>
            {this.props.navigation.state.params.data.Quiz ?
              this.props.navigation.state.params.data.Quiz.map((questiondata, i) =>
              <View style={styles.bgBoxQuestion} key={i}>
                <View style={{
                    backgroundColor: this.props.navigation.state.params.styleguide.gray,
                    width: "100%",
                    height: 200,
                    padding: 30,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    justifyContent: "flex-end",
                    overflow: "hidden"
                  }}>
                  { questiondata.imgURL ?
                    <Image source={{uri: questiondata.imgURL}} style={{position: "absolute", top:0, left: 0, right:0, bottom: 0}}></Image>
                    : null }

                  <Text style={{fontWeight: 'bold', fontSize:24, marginBottom:15, color: "white"}}>{questiondata.Frage}</Text>
                </View>
                <View style={styles.bgBoxQuestionKid}/>
                  <RadioForm
                    buttonColor={this.props.navigation.state.params.styleguide.red}
                    style={{
                      alignItems: "flex-start",
                      marginLeft: 20,
                      marginTop: 25,
                      paddingRight: 40,

                    }}
                    radio_props={[
                      {label: questiondata.A1, value: 1 },
                      {label: questiondata.A2, value: 2 },
                      {label: questiondata.A3, value: 3 }
                    ]}
                    initial={null}
                    onPress={(value) => {this.setState({
                      value
                    })}}
                  />


                <TouchableOpacity style={{backgroundColor: this.props.navigation.state.params.styleguide.red,position: "absolute",
                bottom:15,
                right: 15,
                alignSelf:"flex-end",
                width: 130,
                padding: 15,
                borderRadius: 200,
                alignItems: 'center',}} disabled={dis}
                      onPress={(value) => {this.scrollNext(value)}}>
                      <Text style={{ color:'#fff', fontSize:17, paddingTop:10,paddingBottom:10, fontWeight:'bold'}}>Weiter</Text>
                    </TouchableOpacity>
              </View>
              ) :   null }
              <View style={styles.bgBoxQuestion}>
                <Text>{this.state.values} von {maxPoints}</Text>
                <Text>{result}</Text>


                <TouchableOpacity style={{backgroundColor: this.props.navigation.state.params.styleguide.red,position: "absolute",
                bottom:15,
                right: 15,
                alignSelf:"flex-end",
                width: 130,
                padding: 15,
                borderRadius: 200,
                alignItems: 'center',}}
                  onPress={()=> {this.props.navigation.pop()}}>
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
    right: 15,
    alignSelf:"flex-end",
    width: 130,
    padding: 15,
    borderRadius: 200,
    alignItems: 'center',
  },
bgBox:{
  borderRadius:5,
  backgroundColor:"rgba(255,255,255,0)",
  padding:15,
  paddingLeft: 40,
  marginTop: 20,
  justifyContent: 'center',
  marginLeft: 30,

},
bgBoxQuestion:{
  borderRadius:5,
  backgroundColor:"rgba(255,255,255,1)",
  marginTop:15,
  width:Dimensions.get('window').width - 16,
  marginRight:8,
  marginLeft: 0
},
bgBoxQuestionKid:{
  padding:15,

}

});
export default Quiz;
