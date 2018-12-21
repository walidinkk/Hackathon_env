import React from 'react';
import { StyleSheet, Alert, Text, TextInput, View, } from 'react-native';
import Button from 'apsl-react-native-button';
import Logo from './Logo';

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
        <Logo />
          <Text h1 style={styles.title}>Inscription</Text>
          <TextInput 
          style={styles.input}
          placeholder="Prénom"
          
          />

          <TextInput
          style={styles.input}
          placeholder="Nom"
          
          // onChangeText={(searchItem) => this.handleChange(searchItem)}
          // value={this.state.searchItem}
          />

          <TextInput
          style={styles.input}
          placeholder="mail"
          />

          <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
          />
            
          <Button
          onPress={this.handleSubmit}
          style={styles.button}
          title="Inscription"
          >
          <Text style={styles.text}>Valider</Text>
        </Button>
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
    color: "#33C25C",
  },
  text:{
    color: "#33C25C"
  },
  validation:{
    paddingTop: '300%',
    
  },
  button: {
    alignSelf: "center",
    width: 230,
    borderWidth: 1,
    borderColor: "#33C25C",
    margin: 15,
    marginTop: 50,
  },
  input: {
    marginTop: '1%',
    paddingTop: '5%',
    borderBottomWidth: 1,
    borderColor: "#33C25C"
  },
  
});
