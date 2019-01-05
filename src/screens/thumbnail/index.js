import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon, 
  Body,
  Left,
  Right
} from "native-base";
import styles from "./styles";
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { showLocation, Popup } from 'react-native-map-link'

export default  class NHThumbnail extends Component {
  state = {
    isVisible: false
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Maps</Title>
          </Body>
          <Right />
        </Header>

        <View style={styles1.container}>
        <Popup
          isVisible={this.state.isVisible}
          onCancelPressed={() => this.setState({ isVisible: false })}
          onAppPressed={() => this.setState({ isVisible: false })}
          onBackButtonPressed={() => this.setState({ isVisible: false })}
          options={{
            latitude: 50.87959,
            longitude: 4.70093,
            title: 'bars',
            
            cancelText: 'Cancel'
          }}
        />
        <TouchableOpacity style={{padding: 20}} onPress={() => { this.setState({ isVisible: true }) }}>
          <Text style={styles1.welcome}>
            Show in Maps
          </Text>
        </TouchableOpacity>
      </View>
      </Container>
    );
  }
}
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#4682BC',
    margin: 10
  }
});
