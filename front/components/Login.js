import React from "react";
import { StyleSheet, Alert, Text, TextInput, View, Image } from "react-native";
import Button from "apsl-react-native-button";
import { Navigation } from "react-native-navigation";
import LoginConnect2 from "./LoginConnect2"
import Signup from "./Signup"
export default class Login extends React.Component {

state = {
  redirect2 : false,
  sign: false
}

  handlePressLoginConnect2 = () => {
    this.setState({ redirect2 : true })
  }

  handlePressLoginSignup = () => {
    this.setState({ sign : true })
  }

  render() {
  if(this.state.redirect2 === true){
    return <LoginConnect2 />
  }
  if(this.state.sign === true){
    return <Signup />
  }

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/logoScore.png")}
        />
        <View style={styles.containerButton}>
          <Button
            
            style={styles.button}
            title="Connect to Facebook"
          >
            <Text style={styles.text}>Connect to Facebook</Text>
          </Button>
          <Button
            
            style={styles.button}
            title="Connect to Gmail"
          >
            <Text style={styles.text}>Connect to Gmail</Text>
          </Button>
          <Button
            onPress={() => {
                // this.props.navigation.navigate('LoginConnect2')
                this.handlePressLoginConnect2()
              }
          }
            style={styles.button}
            title="Connexion"
          >
            <Text style={styles.text}>Connexion</Text>
          </Button>
          <Button
            onPress={() => {
                          this.handlePressLoginSignup()
          }}
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
