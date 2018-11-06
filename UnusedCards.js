import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { setAces, resetDeck1, resetDeck2, resetBoard } from "./state/actions";

class UnusedCards extends Component {
  reset() {
    this.props.resetBoard();
    this.props.resetDeck1();
    this.props.resetDeck2();
  }

  render() {
    return (
      <View style={styles.container}>
        {/*  <Text style={styles.text}> Cards Left: </Text>
        <Text style={styles.text}> {this.props.activeDeck.length} </Text>*/}
        <Text style={styles.text}> Player 1 Score: </Text>
        <Text style={styles.text}> {this.props.player1Score} </Text>
        <Text style={styles.text}> Player 2 Score: </Text>
        <Text style={styles.text}> {this.props.player2Score} </Text>
        <Button
          onPress={() => {
            this.reset();
          }}
          title="NEXTHAWND"
          color="white"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "flex-start"
  },
  text: {
    fontSize: 40
  }
});

const mapStateToProps = store => {
  return {
    aces: store.aces,
    activeDeck: store.activeDeck,
    player1Score: store.player1Score,
    player2Score: store.player2Score
  };
};

const mapDispatchToProps = dispatch => ({
  setAces: aces => dispatch(setAces(aces)),
  resetBoard: board => dispatch(resetBoard()),
  resetDeck1: deck => dispatch(resetDeck1()),
  resetDeck2: deck => dispatch(resetDeck2())
});

export default connect(mapStateToProps, mapDispatchToProps)(UnusedCards);
