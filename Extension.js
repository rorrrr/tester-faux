import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Player1 from "./Player1";
import Player2 from "./Player2";
import Board from "./Board";
import UnusedCards from "./UnusedCards";

class Extension extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Player1 />
          <UnusedCards />
          <Player2 />
        </View>
        <View style={styles.board}>
          <Board />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%"
  },
  board: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "20%"
  }
});

export default Extension;
