import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  TouchableOpacity
} from "react-native";

export default class Menu extends Component {
  handleClick() {
    Alert.alert("Yay !");
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.onglet}>
          <Image
            source={require("../assets/iconHome.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.onglet}>
          <Image
            source={require("../assets/iconBulb.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.onglet}>
          <Image
            source={require("../assets/iconConversation.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.onglet}>
          <Image
            source={require("../assets/iconPointInt.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 420
  },
  onglet: {
    backgroundColor: "#33C25C",
    padding: 10,
    width: 103
  },
  image: {
    width: 40,
    height: 40,
    alignSelf:"center"
  },
});
