import React from "react";
import {
  StyleSheet,
  Alert,
  Text,
  TextInput,
  Button,
  View,
  Image
} from "react-native";

export default class Search extends React.Component {
  state = {
    searchItem: ""
  };

  handleChange(searchItem) {
    this.setState({ searchItem });
  }

  handleSubmit() {
    Alert.alert("Yay !");
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Veuillez entrer la référence du produit"
          onChangeText={searchItem => this.handleChange(searchItem)}
          value={this.state.searchItem}
        />
        <Image
          style={styles.searchIcon}
          onPress={this.handleSubmit}
          source={require("../assets/iconSearch.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "flex-start",
    marginTop: 75,
    marginRight: 20
  },
  input: {
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#9B9B9B",
    padding: 10,
    height: 40
  },
  searchIcon: {
    width: 40,
    height: 40,
    marginLeft: 10
  }
});
