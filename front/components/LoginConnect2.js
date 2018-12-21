import React from 'react';
import { StyleSheet, Alert, Text, TextInput, View, } from 'react-native';
import Button from 'apsl-react-native-button';
import Logo from './Logo';
import Home from './Home';

export default class Login extends React.Component {

  state = {
    searchItem: '',
    home: false
  }
  handlePressHome = () => {
      this.setState({ home : true })
    }
  handleChange(searchItem) {
    this.setState({ searchItem })
  }

  handleSubmit() {
    Alert.alert('Yay !');
  }

  render() {
    if(this.state.home === true){
      return <Home />
    }
    return (

      <View style={styles.container} >
        <Logo/>
        <Text h1 style={styles.title}>Me connecter</Text>
        <TextInput
          style={styles.input}
          placeholder="mail"
        // onChangeText={(searchItem) => this.handleChange(searchItem)}
        // value={this.state.searchItem}
        />

        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        />

        <Button
          onPress={this.handlePressHome}
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: '20%',
    paddingTop: '10%',
    color: "#33C25C"
  },
  button: {
    alignSelf: "center",
    width: 230,
    borderWidth: 1,
    borderColor: "#33C25C",
    margin: 15,
    marginTop: 50,
  },
  text: {
    color: "#33C25C"
  },
  input: {
    marginTop: '1%',
    paddingTop: '5%',
    borderBottomWidth: 1,
    borderColor: "#33C25C"
  },

});
