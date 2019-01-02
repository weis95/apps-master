import React, { Component } from "react";

import {

  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Badge,
  Text,
  Left,
  Right,
  Body
} from "native-base";

import { List, ListItem, SearchBar } from "react-native-elements";
import _ from "lodash";
import { getUsers, contains } from "./bars/index";



class NHListAvatar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      query: "",
      fullData: [],
    };

  }

  componentDidMount() {
    this.makeRemoteRequest();
  }



  makeRemoteRequest = () => {
    this.setState({ loading: true });
    getUsers()
      .then(users => {
        this.setState({
          loading: false,
          data: users,
          fullData: users,
        });

      })

      .catch(error => {

        this.setState({ error, loading: false });

      });

  };


  handleSearch = text => {
    const formatQuery = text.toLowerCase();
    const data = _.filter(this.state.fullData, user => {
      return contains(user, formatQuery);
    })
    this.setState({query: formatQuery, data})
  }

  renderSeparator = () => {

    return (

      <View

        style={{

          height: 1,

          width: "86%",

          backgroundColor: "#CED0CE",

          marginLeft: "14%"

        }}

      >

      </View>

    );

  };



  renderHeader = () => {

    return <SearchBar placeholder="Search for bar" lightTheme round onChangeText={this.handleSearch} />;

  };



  renderFooter = () => {

    if (!this.state.loading) return null;



    return (

      <View

        style={{

          paddingVertical: 20,

          borderTopWidth: 1,

          borderColor: "#CED0CE"

        }}

      >

        <ActivityIndicator animating size="large" />

      </View>

    );

  };



  render() {

    return (



 

      <SafeAreaView>

        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
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
            <Title>Bars in Leuven</Title>
          </Body>
          <Right />
        </Header>
          <FlatList

            data={this.state.data}

            renderItem={({ item }) => (

              <ListItem

                roundAvatar

                title={`${item.name.first} ${item.name.last}`}

                subtitle={item.email}

                avatar={{ uri: item.picture.thumbnail }}

                containerStyle={{ borderBottomWidth: 0 }}

              />

            )}

            keyExtractor={item => item.email}

            ItemSeparatorComponent={this.renderSeparator}

            ListHeaderComponent={this.renderHeader}

            ListFooterComponent={this.renderFooter}

          />

        </List>

      </SafeAreaView>

    );

  }

}




export default NHListAvatar;
