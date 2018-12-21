import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProgressCircle from "react-native-progress-circle";

export default class DayScoring extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={[styles.title]}>Consommation journalière</Text>
        </View>
        <View style={styles.container2}>
          <View style={styles.infos}>
            <Text style={styles.textConso}>26 Mo</Text>
            <Text style={styles.text}>Soit 10g d'équivalent CO2</Text>
          </View>
          <ProgressCircle
            percent={4.2}
            radius={50}
            borderWidth={8}
            color="#33C25C"
            shadowColor="#999"
            bgColor="#fff"
          >
            <Text style={styles.textCircle}>{"4.2%"}</Text>
          </ProgressCircle>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    margin: 10,
    width: 380
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 10
  },
  info: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    color: "#33C25C",
    fontSize: 18
  },
  text: {
    fontSize: 15,
    color: "#33C25C"
  },
  textCircle: {
    fontSize: 25
  },

  textConso: {
    color: "#33C25C",
    fontSize: 40
  }
});

// AppRegistry.registerComponent('App', () => App)
