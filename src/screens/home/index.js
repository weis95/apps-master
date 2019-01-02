
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native"
import { Container } from "native-base";
import Expo from "expo"

class Home extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }
  signIn = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId:
          "611390778677-3v9ok3bvr6pi585m9kcior9dadgi71fm.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      })

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        })
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }
  render() {
    return (

      <View style={styles.container}>
        {this.state.signedIn ? (
          <View>
          <Button
        title="Open Menu"
        onPress={() => this.props.navigation.navigate("DrawerOpen")}>
      </Button>
    
          <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
          </View>
        ) : (
          <LoginPage signIn={this.signIn} />
        )}


      </View>

    )
  }
}

const LoginPage = prop => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => prop.signIn()} />
    </View>
  )
}

const LoggedInPage = prop => {
  return (


    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{prop.name}</Text>
      <Image style={styles.image} source={{ uri: prop.photoUrl }} />
     
    </View>

    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})

export default Home;
