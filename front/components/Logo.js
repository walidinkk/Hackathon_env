import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 175, height: 45, marginTop: 60, marginBottom: 30, }}
          onPress={this.handleSubmit}
          source={require("../assets/logoScore.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
  },
});

