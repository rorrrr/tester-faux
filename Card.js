import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

class Card extends Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor={"#eee"}
        style={{
          padding: 25,
          backgroundColor: "#F8F8F8",
          borderBottomWidth: 1,
          borderColor: "#eee"
        }}
        {...this.props.sortHandlers}
      >
        <Text>{this.props.data}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "20",
    width: "20",
    backgroundColor: "red"
  }
});

export default Card;
