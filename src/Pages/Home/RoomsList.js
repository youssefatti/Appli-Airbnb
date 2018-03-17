import React from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  View
} from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class RoomsList extends React.Component {
  render() {
    const rooms = this.props.roomsData.map((room, index) => {
      room.key = index.toString();
      return room;
    });
    return (
      <FlatList
        style={{}}
        data={rooms}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 20
            }}
            title="Room"
            onPress={() =>
              this.props.navigation.navigate("Room", {
                id: item._id,
                userPicture: item.photos[0],
                navigation: { navigation: this.props.navigation }
              })
            }
          >
            <View style={{}}>
              <ImageBackground
                style={{
                  width: "100%",
                  height: height / 3,

                  alignItems: "flex-end",
                  justifyContent: "flex-end"
                }}
                source={{ uri: item.photos[0] }}
              >
                <View
                  style={{
                    flexDirection: "row"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 30,
                      color: "white",
                      marginLeft: 10,
                      marginBottom: 10,

                      flex: 1
                    }}
                  >
                    {item.price} €
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                borderBottomWidth: 1,
                borderBottomColor: "rgb(223,223,223)",
                paddingBottom: 20,
                paddingTop: 20
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flex: 1
                }}
              >
                <View style={{ justifyContent: "space-around", flex: 1 }}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ fontSize: 16, fontWeight: "bold" }}
                  >
                    {item.title}
                  </Text>
                  <Text>{item.ratingValue} reviews</Text>
                </View>
                <Image
                  style={{ width: 60, height: 60, borderRadius: 30 }}
                  source={{ uri: item.user.account.photos[0] }}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}
