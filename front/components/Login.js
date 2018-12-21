import React from "react";
import { StyleSheet, Alert, Text, TextInput, View, Image } from "react-native";
import Button from "apsl-react-native-button";
import { Navigation } from "react-native-navigation";

export default class Login extends React.Component {
  handleSubmit() {
    Alert.alert("Yay !");
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/logoScore.png")}
        />
        <View style={styles.containerButton}>
          <Button
            onPress={this.handleSubmit}
            style={styles.button}
            title="Connect to Facebook"
          >
            <Text style={styles.text}>Connect to Facebook</Text>
          </Button>
          <Button
            onPress={this.handleSubmit}
            style={styles.button}
            title="Connect to Gmail"
          >
            <Text style={styles.text}>Connect to Gmail</Text>
          </Button>
          <Button
            onPress={this.handleSubmit}
            style={styles.button}
            title="Connexion"
          >
            <Text style={styles.text}>Connexion</Text>
          </Button>
          <Button
            onPress={this.handleSubmit}
            style={styles.button}
            title="Inscription"
          >
            <Text style={styles.text}>Inscription</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  containerButton: {
    marginBottom: 50
  },
  button: {
    alignSelf: "center",
    width: 230,
    borderWidth: 1,
    borderColor: "#33C25C",
    margin: 15
  },
  text: {
    color: "#33C25C"
  },
  image: {
    width: 320,
    height: 82,
    marginBottom: 120
  }
});
