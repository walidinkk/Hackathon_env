import React from 'react';
import { StyleSheet, Alert, Text, TextInput, View, } from 'react-native';
import Button from 'apsl-react-native-button';

export default class Signup extends React.Component {

  state = {
    searchItem: ''
  }

  handleChange(searchItem){
    this.setState({searchItem})
  }

  handleSubmit(){
    Alert.alert('Yay !');
  }

  render() {
    return (

        <View style={styles.container} >
          <Text h1 style={styles.title}>Inscription</Text>
          <TextInput 
          style={styles.text}
          placeholder="Prénom"
          
          />

          <TextInput
          style={styles.text}
          placeholder="Nom"
          
          // onChangeText={(searchItem) => this.handleChange(searchItem)}
          // value={this.state.searchItem}
          />

          <TextInput
          style={styles.text}
          placeholder="mail"
          />

          <TextInput
          style={styles.text}
          placeholder="Mot de passe"
          type='password'
          />
          <Button style={{borderColor: 'black', position :'absolute', top: 500, left: 130,width: 100}} onPress={this.handleSubmit} title="VALIDER" >VALIDER</Button>
          
        </View>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '20%',
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: '20%',
    paddingTop: '10%',
    
  },
  text:{
    marginTop: '10%',
    borderBottomWidth: 0.5
  },
  validation:{
    paddingTop: '300%',
  }
  
});
