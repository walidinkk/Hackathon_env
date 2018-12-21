import React from 'react';
import { StyleSheet, Alert, Text, TextInput, View, } from 'react-native';
import Button from 'apsl-react-native-button';

export default class Login extends React.Component {

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
            <Text h1 style={styles.title}>Me connecter</Text>
            <TextInput
            style={styles.text}
            placeholder="mail"
            // onChangeText={(searchItem) => this.handleChange(searchItem)}
            // value={this.state.searchItem}
            />

            <TextInput
            style={styles.text}
            placeholder="Mot de passe"
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            />
            
            <Button style={{borderColor: 'black', position :'absolute', top: 400, left: 110,width: 150}} onPress={this.handleSubmit} title="CONNEXION" >CONNEXION</Button>
          
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
    marginTop: '1%',
    paddingTop: '5%',
    borderBottomWidth: 0.5
  },
  
});
