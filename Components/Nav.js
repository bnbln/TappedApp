import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import png from '../Assets/Symbol.png';


class Nav extends React.Component {
  render() {
    return (
      <View style={{
          flexDirection: 'row',
          backgroundColor: '#FFC971',
          height:60,
          shadowColor: "black",
          shadowOffset:{width: 0,height: -200},
          shadowOpacity:1,
          shadowRadius:10,
          alignItems: 'center',
          paddingLeft: 15,
          paddingRight: 30
        }}>
        <Text style={{
            fontWeight: 'bold',
            fontSize: 30,
          }}>Tapped</Text>
        <Image style={{ width: 40, height: 40, position: 'absolute', right:15}}
          source={png}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({


});
export default Nav;
