import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class ProductsGallery extends Component {
  render() {
    return (
      <View>
        <View style={[styles.container]}>
          <Text style={[styles.title]}>Mes produits</Text>
        </View>
        <View style={[styles.container]}>
          <View style={[styles.containerProduct]}>
            <Image
              style={styles.image}
              onPress={this.handleSubmit}
              source={require("../assets/samsung-galaxy-s9.jpg")}
            />
            <Text style={[styles.scoreProduct]}>Score: 3.8/5</Text>
          </View>
          <View style={[styles.containerProduct]}>
            <Image
              style={styles.image}
              onPress={this.handleSubmit}
              source={require("../assets/apple-iphone-8-plus.jpg")}
            />
            <Text style={[styles.scoreProduct]}>Score: 3.2/5</Text>
          </View>
          <View style={[styles.containerProduct]}>
            <Image
              style={styles.image}
              onPress={this.handleSubmit}
              source={require("../assets/nokia-x5-51-plus.jpg")}
            />
            <Text style={[styles.scoreProduct]}>Score: 2.5/5</Text>
          </View>
          <Image
              style={styles.icon}
              onPress={this.handleSubmit}
              source={require("../assets/iconArrow.png")}
            />
        </View>
        <View style={[styles.barVertical]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    margin: 10
  },
  containerProduct: {
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    color: "#33C25C",
    fontSize: 18
  },
  scoreProduct: {
    color: "#33C25C",
    fontSize: 14
  },
  image: {
    width: 90,
    height: 90,
    margin: 10
  },
  icon: {
    width: 30,
    height: 30,
    margin: 10
  },
  barVertical: {
    borderBottomWidth: 1,
    borderColor: "#33C25C"
  }
});

// AppRegistry.registerComponent('App', () => App)
