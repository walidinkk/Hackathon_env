import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default class Charts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.chart}
          onPress={this.handleSubmit}
          source={require("../assets/chart.png")}
        />
        <View>
          <Text style={styles.title}>Détails</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center"
  },
  chart: {
    marginTop: 10,
    marginBottom: 30
  },
  title: {
    color: "#33C25C",
    fontSize: 18,
  },
});
