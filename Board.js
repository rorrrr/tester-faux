import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import {
  setBoard,
  setActiveDeck,
  addPlayer1,
  addPlayer2
} from "./state/actions";
import Ranker from "handranker";

class Board extends Component {
  putInBoard() {
    let drawnCards = this.props.activeDeck
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
    this.props.setActiveDeck(
      this.props.activeDeck.filter(card => !drawnCards.includes(card))
    );
    this.props.setBoard(drawnCards);
  }

  AddScores() {
    var hand1 = { id: 1, cards: [this.props.player1Deck[0][0]] };
    var hand2 = { id: 2, cards: [this.props.player2Deck[0][0]] };
    var hand3 = {
      id: 3,
      cards: [this.props.player1Deck[0][1], this.props.player1Deck[0][2]]
    };
    var hand4 = {
      id: 4,
      cards: [this.props.player2Deck[0][1], this.props.player2Deck[0][2]]
    };
    var hand5 = {
      id: 5,
      cards: [
        this.props.player1Deck[0][3],
        this.props.player1Deck[0][4],
        this.props.player1Deck[0][5],
        this.props.player1Deck[0][6]
      ]
    };
    var hand6 = {
      id: 6,
      cards: [
        this.props.player2Deck[0][3],
        this.props.player2Deck[0][4],
        this.props.player2Deck[0][5],
        this.props.player2Deck[0][6]
      ]
    };

    var hands1 = [hand1, hand2];
    var hands2 = [hand3, hand4];
    var hands3 = [hand5, hand6];

    var results1 = Ranker.orderHands(hands1, this.props.board, Ranker);
    var resultsH = Ranker.orderHands(hands2, this.props.board, Ranker);
    var resultsO = Ranker.orderHands(hands3, this.props.board, Ranker.OMAHA_HI);

    if (results1[0].length == 1 && results1[0].id == 1) {
      this.props.addPlayer1(1);
      this.props.addPlayer2(-1);
    } else {
      this.props.addPlayer1(-1);
      this.props.addPlayer2(1);
    }
    // console.log("resultsH", resultsH[0][0].id);
    // console.log("resultsO", resultsO);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Board: </Text>
        {this.props.player2Deck.length > 0 &&
          this.props.player1Deck.length > 0 &&
          this.props.board.length == 0 && (
            <Button
              onPress={() => {
                this.putInBoard();
              }}
              title="Gib communnity cards"
              color="white"
              accessibilityLabel="Learn more about this purple button"
            />
          )}
        <Text style={styles.text}> {this.props.board} </Text>
        {this.props.board.length != 0 && this.AddScores()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    width: "100%",
    marginTop: 40
  },
  text: {
    fontSize: 40
  }
});

const mapStateToProps = store => {
  return {
    aces: store.aces,
    activeDeck: store.activeDeck,
    player1Deck: store.player1Deck,
    player2Deck: store.player2Deck,
    player1Score: store.player1Score,
    player2Score: store.player2Score,
    board: store.board
  };
};

const mapDispatchToProps = dispatch => ({
  setBoard: board => dispatch(setBoard(board)),
  setActiveDeck: activeDeck => dispatch(setActiveDeck(activeDeck)),
  addPlayer1: player1Score => dispatch(addPlayer1(player1Score)),
  addPlayer2: player2Score => dispatch(addPlayer2(player2Score)),
  setActiveDeck: activeDeck => dispatch(setActiveDeck(activeDeck))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
