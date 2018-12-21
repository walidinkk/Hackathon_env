import React from 'react';
import { StyleSheet, Alert, Text, TextInput, View, } from 'react-native';
import oursSmile from '../image/oursSmile.png';
import oursPollue from '../image/oursPollue.png';
import oursTriste from '../image/oursTriste.png';
export default class Mascotte extends React.Component {

  state = {
    oursSmile: oursSmile,
    oursPollue: oursPollue,
    oursTriste: oursTriste,
    
  }

  handleChange(searchItem){
    this.setState({searchItem})
  }

  handleSubmit(){
    Alert.alert('Yay !');
  }

  dealMascotte(soiledRate) {
    if (soiledRate <= 3) {
         
    } else if (soiledRate > 3 && soiledRate <= 7) {
      
    } else {

    }
  }

  render() {
    return (

        <View style={styles.container} >
        
        </View>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
   
  },
  
});
