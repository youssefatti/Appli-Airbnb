import React from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./StylesLogIn";
import axios from "axios";

export default class LogIn extends React.Component {
  static propTypes = {
    mail: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    navigation: PropTypes.object
  };

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "rgb(237, 102, 100)",
      borderBottomWidth: 0
    }
  };

  state = {
    email: "arno@airbnb-api.com",
    password: "password01",
    data: null
  };

  checkUser = (email, password, cb) => {
    axios
      .post("https://airbnb-api.now.sh/api/user/log_in", {
        email,
        password
      })
      .then(function(response) {
        console.log(response);
        cb(response);
      })
      .catch(function(error) {
        console.log(error);
        alert("Log in incorrect");
      });
  };

  render() {
    console.log("LogInScreen is rendering");
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 80, height: 80 }}
          source={require("./icon_house.png")}
        />

        <Text style={{ color: "white", fontSize: 40 }}>Welcome</Text>

        <TextInput
          style={{
            borderColor: "white",
            borderBottomWidth: 1,
            fontSize: 25,
            paddingLeft: 10,
            width: "80%",
            height: 50,
            color: "white"
          }}
          keyboardType="email-address"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={{
            borderColor: "white",
            borderBottomWidth: 1,
            fontSize: 25,
            paddingLeft: 10,
            width: "80%",
            height: 50,
            color: "white"
          }}
          secureTextEntry="true"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <TouchableOpacity
          style={{
            width: "30%",
            height: 50,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            marginBottom: 100
          }}
          onPress={() => {
            this.checkUser(this.state.email, this.state.password, data => {
              navigate("Home", { navigation: this.props.navigation });
              this.setState({ data });
            });
          }}
          data={this.state.data}
        >
          <Text
            style={{
              color: "black",
              backgroundColor: "white"
            }}
          >
            {" "}
            Login{" "}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
