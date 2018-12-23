import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

const pratik = require("../../../assets/contacts/pratik.png");
const sanket = require("../../../assets/contacts/sanket.png");
const megha = require("../../../assets/contacts/megha.png");
const atul = require("../../../assets/contacts/atul.png");
const saurabh = require("../../../assets/contacts/saurabh.png");
const varun = require("../../../assets/contacts/varun.png");
const datas = [
  {
    img: pratik,
    text: "BAR",
    note: "OPENING HOURS.",
    time: "OPEN"
  },
  {
    img: sanket,
    text: "BAR",
    note: "OPENING HOURS.",
    time: "CLOSED"
  },
  {
    img: sanket,
    text: "BAR",
    note: "OPENING HOURS.",
    time: "OPEN"
  },
  {
    img: sanket,
    text: "BAR",
    note: "OPENING HOURS.",
    time: "CLOSED"
  },
  {
    img: sanket,
    text: "BAR",
    note: "OPENING HOURS.",
    time: "OPEN"
  },
  {
    img: sanket,
    text: "BAR",
    note: "OPENING HOURS.",
    time: "OPEN"
  }
];

this.state = {
  loading: false,
  data: [],
  error: null,
  query: "",
  fullData: [], 
}

class NHListAvatar extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Bars in Leuven</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem avatar>
                <Left>
                  <Thumbnail small source={data.img} />
                </Left>
                <Body>
                  <Text>
                    {data.text}
                  </Text>
                  <Text numberOfLines={1} note>
                    {data.note}
                  </Text>
                </Body>
                <Right>
                  <Text note>
                    {data.time}
                  </Text>
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default NHListAvatar;
