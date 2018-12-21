import React from "react";
import { StyleSheet, Alert, Text, TextInput, Button, View } from "react-native";
import Search from "./Search.js";
import DayScoring from "./DayScoring.js";
import ProductsGallery from "./ProductsGallery.js";
import Logo from "./Logo.js";
import Charts from "./Charts.js";
import Menu from "./Menu.js";

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
        <Logo />
        <Search />
        <ProductsGallery />
        <DayScoring />
        <Charts />
        <Menu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  }
});
