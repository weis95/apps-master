
import React, { Component } from "react";
import { View, TextInput, Dimensions } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "./styles";
import validate from "../../utility/validation";
const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

class Home extends Component {

  state = {
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules:{
          isEmail: true
        }
      },
      password:{
        value: "",
        valid: false,
        validationRules:{
          minLength: 6
        }
      }
    }
  }


  updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === "password") {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
              value,
              prevState.controls[key].validationRules,
              connectedValue
            )
          }
        }
      };
    });
  };

  render() {
    return (
      <Container>
        
          <View style={{
              marginTop: 40,
            }}>
            <Text>Email</Text>
            <TextInput
              style={[styles.inputFields]}
              placeholder="Your Email"
              value={this.state.controls.email.value}
              onChangeText={val => this.updateInputState("email", val)}
              valid={this.state.controls.email.valid}
            />
          </View>

          <View style={{
              marginTop: 30,
              marginBottom: 30
            }}>
            <Text>Password</Text>
            <TextInput
              style={[styles.inputFields]}
              placeholder="Your Password"
              value={this.state.controls.password.value}
              onChangeText={val => this.updateInputState("password", val)}
              valid={this.state.controls.password.valid}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 40,
              backgroundColor: "transparent"
            }}
          >
            <H3 style={styles.text}>BarLeuven</H3>
            <View style={{ marginTop: 8 }} />
          </View>
          <View style={{ marginBottom: 80, alignItems: 'center'}}>
            <Button
              style={styles.submitButton}
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
              disabled={
                !this.state.controls.email.valid ||
                !this.state.controls.password.valid
              }
            >
              <Text>Open Menu</Text>
            </Button>
          </View>
      </Container>
    );
  }
}
