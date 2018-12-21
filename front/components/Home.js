import React from "react";
import { StyleSheet, Alert, Text, TextInput, Button, View } from "react-native";
import Search from "./Search.js";

export default class Signup extends React.Component {
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
        <Search />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
