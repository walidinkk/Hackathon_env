import React from 'react';
import { StyleSheet, Alert, Text, TextInput, Button, View } from 'react-native';

export default class Search extends React.Component {

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
        <Text>Modèle du produit</Text>
        <TextInput
        placeholder="Veuillez entrer la référence du produit"
        onChangeText={(searchItem) => this.handleChange(searchItem)}
        value={this.state.searchItem}
        />
        <Button onPress={this.handleSubmit} title="OK" />
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
