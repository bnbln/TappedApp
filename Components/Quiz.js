import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Dimensions } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


class Quiz extends React.Component {
  constructor (props) {
  super(props)
  this.state = {
    value : 0
  }
}

  render() {
    console.log(this.props.data.Quiz);
    return (
      <View style={{flex:1}}>
        <ScrollView style={{
            flex: 1,
            marginLeft: 8,
            paddingTop:10

          }}>
          <Text>{this.props.data.Category}</Text>
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold'
            }}>{this.props.data.Question}</Text>
          <Text>{this.props.data.Description}</Text>
              {this.props.data.Quiz ?
                this.props.data.Quiz.map((questiondata, i) =>
                    <View
                    key={i}
                    style={{
                      marginTop: 30,

                    }}>
                    <Text style={{fontWeight: 'bold', fontSize:15, marginBottom:5}}>{questiondata.Frage}</Text>
                      <RadioForm
                        style={{
                          alignItems: "flex-start",
                          marginLeft: 30
                        }}
                        radio_props={[
                          {label: questiondata.A1, value: 0 },
                          {label: questiondata.A2, value: 1 },
                          {label: questiondata.A3, value: 2 }
                        ]}
                        initial={0}
                        onPress={(value) => {this.setState({value: this.state.value+value})}}
                      />

                    </View>
                ) :   null }
                <Text>{this.state.value}</Text>
        </ScrollView>
        <View style={styles.myButton}>
          <Button title="Weiter" color="#fff" onPress={()=>{
              alert('hi')
            }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
myButton: {
  position: "absolute",
  bottom:0,
  alignSelf:"center",
  backgroundColor:"rgb(0,122,255)",
  width: Dimensions.get('window').width,
  padding: 10,
}

});
export default Quiz;
