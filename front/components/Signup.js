import React from 'react';
import { StyleSheet, Alert, Text, TextInput, Button, View } from 'react-native';

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
      <View style={styles.container}>
        <TextInput
        placeholder="Nom"
        // onChangeText={(searchItem) => this.handleChange(searchItem)}
        // value={this.state.searchItem}
        />
        <Button onPress={this.handleSubmit} title="VALIDER" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
