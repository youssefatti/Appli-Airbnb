import React from "react";
import { ScrollView } from "react-native";
import axios from "axios";
//import { FlatList, TouchableOpacity, Text } from "react-native";
import RoomsList from "./RoomsList";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "MonAirbnb",
    headerTitleStyle: {
      color: "black"
    },
    headerTintColor: "black",
    headerStyle: {
      backgroundColor: "rgb(237, 102, 100)",
      borderBottomWidth: 0
    }
  };

  state = {
    roomsData: []
  };

  componentDidMount() {
    axios
      .get("https://airbnb-api.now.sh/api/room?city=paris")
      .then(response => {
        this.setState(
          {
            roomsData: [...response.data.rooms]
          },
          () => console.log(" : recup de réponse : ")
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <RoomsList
        roomsData={this.state.roomsData}
        navigation={this.props.navigation}
      />
    );
  }
}
