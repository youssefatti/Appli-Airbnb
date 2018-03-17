import React from "react";
import { View, Text } from "react-native";
import axios from "axios";
import Room from "./Room";

export default class RoomScreen extends React.Component {
  static navigationOptions = {
    title: "Room",
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
    data: {}
  };

  componentDidMount() {
    const id = this.props.navigation.state.params.id;
    axios
      .get(`https://airbnb-api.now.sh/api/room/${id}`)
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(function(error) {
        console.log("error dans room : ", error);
      });
  }

  render() {
    return (
      <View>
        <Room data={this.state.data} userPicture={this.props.userPicture} />
      </View>
    );
  }
}
