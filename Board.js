import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import {
  setBoard,
  setActiveDeck,
  addPlayer1,
  addPlayer2,
  addPlayer1Tally,
  addPlayer2Tally
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

  addScores() {
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

    this.calculateResults1(results1);
    this.calculateResults2(resultsH);
    this.calculateResults3(resultsO);

    this.calculateBonus1(
      Ranker.orderHands([hand1], this.props.board, Ranker)[0][0].ranking,
      Ranker.orderHands([hand2], this.props.board, Ranker)[0][0].ranking
    );

    this.calculateBonus2(
      Ranker.orderHands([hand3], this.props.board, Ranker)[0][0].ranking,
      Ranker.orderHands([hand4], this.props.board, Ranker)[0][0].ranking
    );

    this.calculateBonus3(
      Ranker.orderHands([hand5], this.props.board, Ranker.OMAHA_HI)[0][0]
        .ranking,
      Ranker.orderHands([hand6], this.props.board, Ranker.OMAHA_HI)[0][0]
        .ranking
    );

    this.calculateScoop();

    // this.calculateBonus2();
  }

  calculateResults1(e) {
    if (e[0].length > 1) {
    } else if (e[0].length == 1 && e[0][0].id == 1) {
      this.props.addPlayer1(1);
      this.props.addPlayer2(-1);
      this.props.addPlayer1Tally();
    } else {
      this.props.addPlayer1(-1);
      this.props.addPlayer2(1);
      this.props.addPlayer2Tally();
    }
  }

  calculateResults2(e) {
    if (e[0].length > 1) {
    } else if (e[0].length == 1 && e[0][0].id == 3) {
      this.props.addPlayer1(2);
      this.props.addPlayer2(-2);
      this.props.addPlayer1Tally();
    } else {
      this.props.addPlayer1(-2);
      this.props.addPlayer2(2);
      this.props.addPlayer2Tally();
    }
  }

  calculateResults3(e) {
    if (e[0].length > 1) {
    } else if (e[0].length == 1 && e[0][0].id == 5) {
      this.props.addPlayer1(3);
      this.props.addPlayer2(-3);
      this.props.addPlayer1Tally();
    } else {
      this.props.addPlayer1(-3);
      this.props.addPlayer2(3);
      this.props.addPlayer2Tally();
    }
  }

  calculateBonus1(handranking1, handranking2) {
    switch (handranking1) {
      case "royal flush":
        var value1 = 9;
        break;
      case "straight flush":
        var value1 = 9;
        break;
      case "four of a kind":
        var value1 = 8;
        break;
      case "full house":
        var value1 = 7;
        break;
      case "flush":
        var value1 = 6;
        break;
      case "straight":
        var value1 = 5;
        break;
      case "three of a kind":
        var value1 = 4;
        break;
      case "two pair":
        var value1 = 3;
        break;
      case "pair":
        var value1 = 2;
        break;
      case "high card":
        var value1 = 1;
        break;
    }

    switch (handranking2) {
      case "royal flush":
        var value2 = 9;
        break;
      case "straight flush":
        var value2 = 9;
        break;
      case "four of a kind":
        var value2 = 8;
        break;
      case "full house":
        var value2 = 7;
        break;
      case "flush":
        var value2 = 6;
        break;
      case "straight":
        var value2 = 5;
        break;
      case "three of a kind":
        var value2 = 4;
        break;
      case "two pair":
        var value2 = 3;
        break;
      case "pair":
        var value2 = 2;
        break;
      case "high card":
        var value2 = 1;
        break;
    }

    if (value1 > value2) {
      switch (value1) {
        case 3:
          this.props.addPlayer1(1);
          this.props.addPlayer2(-1);
          break;
        case 4:
          this.props.addPlayer1(2);
          this.props.addPlayer2(-2);
          break;
        case 5:
          this.props.addPlayer1(3);
          this.props.addPlayer2(-3);
          break;
        case 6:
          this.props.addPlayer1(3);
          this.props.addPlayer2(-3);
          break;
        case 7:
          this.props.addPlayer1(4);
          this.props.addPlayer2(-4);
          break;
        case 8:
          this.props.addPlayer1(6);
          this.props.addPlayer2(-6);
          break;
        case 9:
          this.props.addPlayer1(12);
          this.props.addPlayer2(-12);
          break;
      }
    } else if (value1 < value2) {
      switch (value2) {
        case 3:
          this.props.addPlayer2(1);
          this.props.addPlayer1(-1);
          break;
        case 4:
          this.props.addPlayer2(2);
          this.props.addPlayer1(-2);
          break;
        case 5:
          this.props.addPlayer2(3);
          this.props.addPlayer1(-3);
          break;
        case 6:
          this.props.addPlayer2(3);
          this.props.addPlayer1(-3);
          break;
        case 7:
          this.props.addPlayer2(4);
          this.props.addPlayer1(-4);
          break;
        case 8:
          this.props.addPlayer2(6);
          this.props.addPlayer1(-6);
          break;
        case 9:
          this.props.addPlayer2(12);
          this.props.addPlayer1(-12);
          break;
      }
    }
  }

  calculateBonus2(handranking3, handranking4) {
    switch (handranking3) {
      case "royal flush":
        var value1 = 9;
        break;
      case "straight flush":
        var value1 = 9;
        break;
      case "four of a kind":
        var value1 = 8;
        break;
      case "full house":
        var value1 = 7;
        break;
      case "flush":
        var value1 = 6;
        break;
      case "straight":
        var value1 = 5;
        break;
      case "three of a kind":
        var value1 = 4;
        break;
      case "two pair":
        var value1 = 3;
        break;
      case "pair":
        var value1 = 2;
        break;
      case "high card":
        var value1 = 1;
        break;
    }

    switch (handranking4) {
      case "royal flush":
        var value2 = 9;
        break;
      case "straight flush":
        var value2 = 9;
        break;
      case "four of a kind":
        var value2 = 8;
        break;
      case "full house":
        var value2 = 7;
        break;
      case "flush":
        var value2 = 6;
        break;
      case "straight":
        var value2 = 5;
        break;
      case "three of a kind":
        var value2 = 4;
        break;
      case "two pair":
        var value2 = 3;
        break;
      case "pair":
        var value2 = 2;
        break;
      case "high card":
        var value2 = 1;
        break;
    }

    if (value1 > value2) {
      switch (value1) {
        case 4:
          this.props.addPlayer1(1);
          this.props.addPlayer2(-1);
          break;
        case 5:
          this.props.addPlayer1(2);
          this.props.addPlayer2(-2);
          break;
        case 6:
          this.props.addPlayer1(2);
          this.props.addPlayer2(-2);
          break;
        case 7:
          this.props.addPlayer1(3);
          this.props.addPlayer2(-3);
          break;
        case 8:
          this.props.addPlayer1(5);
          this.props.addPlayer2(-5);
          break;
        case 9:
          this.props.addPlayer1(10);
          this.props.addPlayer2(-10);
          break;
      }
    } else if (value1 < value2) {
      switch (value2) {
        case 4:
          this.props.addPlayer2(1);
          this.props.addPlayer1(-1);
          break;
        case 5:
          this.props.addPlayer2(2);
          this.props.addPlayer1(-2);
          break;
        case 6:
          this.props.addPlayer2(2);
          this.props.addPlayer1(-2);
          break;
        case 7:
          this.props.addPlayer2(3);
          this.props.addPlayer1(-3);
          break;
        case 8:
          this.props.addPlayer2(5);
          this.props.addPlayer1(-5);
          break;
        case 9:
          this.props.addPlayer2(10);
          this.props.addPlayer1(-10);
          break;
      }
    }
  }

  calculateBonus3(handranking5, handranking6) {
    switch (handranking5) {
      case "royal flush":
        var value1 = 9;
        break;
      case "straight flush":
        var value1 = 9;
        break;
      case "four of a kind":
        var value1 = 8;
        break;
      case "full house":
        var value1 = 7;
        break;
      case "flush":
        var value1 = 6;
        break;
      case "straight":
        var value1 = 5;
        break;
      case "three of a kind":
        var value1 = 4;
        break;
      case "two pair":
        var value1 = 3;
        break;
      case "pair":
        var value1 = 2;
        break;
      case "high card":
        var value1 = 1;
        break;
    }

    switch (handranking6) {
      case "royal flush":
        var value2 = 9;
        break;
      case "straight flush":
        var value2 = 9;
        break;
      case "four of a kind":
        var value2 = 8;
        break;
      case "full house":
        var value2 = 7;
        break;
      case "flush":
        var value2 = 6;
        break;
      case "straight":
        var value2 = 5;
        break;
      case "three of a kind":
        var value2 = 4;
        break;
      case "two pair":
        var value2 = 3;
        break;
      case "pair":
        var value2 = 2;
        break;
      case "high card":
        var value2 = 1;
        break;
    }

    if (value1 > value2) {
      switch (value1) {
        case 7:
          this.props.addPlayer1(2);
          this.props.addPlayer2(-2);
          break;
        case 8:
          this.props.addPlayer1(4);
          this.props.addPlayer2(-4);
          break;
        case 9:
          this.props.addPlayer1(8);
          this.props.addPlayer2(-8);
          break;
      }
    } else if (value1 < value2) {
      switch (value2) {
        case 7:
          this.props.addPlayer2(2);
          this.props.addPlayer1(-2);
          break;
        case 8:
          this.props.addPlayer2(4);
          this.props.addPlayer1(-4);
          break;
        case 9:
          this.props.addPlayer2(8);
          this.props.addPlayer1(-8);
          break;
      }
    }
  }

  calculateScoop() {
    if (this.props.player1Tally == 3) {
      this.props.addPlayer1(3);
      this.props.addPlayer2(-3);
    }

    if (this.props.player2tally == 3) {
      this.props.addPlayer1(3);
      this.props.addPlayer2(-3);
    }
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
        {this.props.board.length != 0 && (
          <Button
            onPress={() => {
              this.addScores();
            }}
            title="Tally Scores"
            color="white"
            accessibilityLabel="Learn more about this purple button"
          />
        )}
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
  // console.log("storeATboard", store);
  return {
    aces: store.aces,
    activeDeck: store.activeDeck,
    player1Deck: store.player1Deck,
    player2Deck: store.player2Deck,
    player1Score: store.player1Score,
    player2Score: store.player2Score,
    player1Tally: store.player1Tally,
    player2Tally: store.player2Tally,
    board: store.board
  };
};

const mapDispatchToProps = dispatch => ({
  setBoard: board => dispatch(setBoard(board)),
  setActiveDeck: activeDeck => dispatch(setActiveDeck(activeDeck)),
  addPlayer1: player1Score => dispatch(addPlayer1(player1Score)),
  addPlayer2: player2Score => dispatch(addPlayer2(player2Score)),
  addPlayer1Tally: player1Tally => dispatch(addPlayer1Tally()),
  addPlayer2Tally: player2Tally => dispatch(addPlayer2Tally()),
  setActiveDeck: activeDeck => dispatch(setActiveDeck(activeDeck))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
