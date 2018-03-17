import React from "react";
import {
  FlatList,
  Image,
  View,
  ScrollView,
  Text,
  ImageBackground
} from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class Room extends React.Component {
  render() {
    console.log("data dans derniere page : ", this.props.data);
    return (
      <ScrollView>
        <FlatList
          style={{}}
          horizontal={true}
          data={this.props.data.photos}
          renderItem={({ item }) => (
            <ImageBackground
              style={{
                width: width,
                height: height / 2
              }}
              source={{ uri: item }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 30,
                    color: "white",
                    marginLeft: 10,
                    marginBottom: 10,
                    flex: 1
                    //backgroundColor: "black"
                  }}
                >
                  {this.props.data.price} €
                </Text>
              </View>
            </ImageBackground>
          )}
        />
        <View>
          <View>
            <View>
              <Text>{this.props.data.title}</Text>
              <Text>{this.props.data.ratingValue} reviews</Text>
              <Text numberOfLines={3} ellipsizeMode="tail">
                {this.props.data.description}
              </Text>
            </View>
            <View>
              <Image
                style={{
                  width: width,
                  height: height / 2
                }}
                source={{ uri: this.props.userPicture }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
