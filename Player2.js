import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { setPlayer2Deck, setActiveDeck } from "./state/actions";
import Ranker from "handranker";

class Player2 extends Component {
  putInHand2() {
    let drawnCards = this.props.activeDeck
      .sort(() => 0.5 - Math.random())
      .slice(0, 7);
    this.props.setActiveDeck(
      this.props.activeDeck.filter(card => !drawnCards.includes(card))
    );
    this.props.setPlayer2Deck(drawnCards);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Player2 </Text>
        {this.props.player2Deck.length == 0 && (
          <Button
            onPress={() => {
              this.putInHand2();
            }}
            title="draw p2"
            color="white"
            accessibilityLabel="Learn more about this purple button"
          />
        )}
        {this.props.player2Deck.length > 0 && (
          <View style={styles.container}>
            <Text style={styles.text}>
              {" "}
              Top: {this.props.player2Deck[0][0]}
            </Text>
            <Text style={styles.text}>
              {" "}
              Middle: {this.props.player2Deck[0][1]},{
                this.props.player2Deck[0][2]
              }
            </Text>
            <Text style={styles.text}>
              {" "}
              Bottom: {this.props.player2Deck[0][3]},{
                this.props.player2Deck[0][4]
              },{this.props.player2Deck[0][5]},{this.props.player2Deck[0][6]}
            </Text>
          </View>
        )}
        {this.props.board.length > 0 && (
          <View>
            <Text style={styles.text}>
              TopHand:
              {
                Ranker.orderHands(
                  [{ id: 1, cards: [this.props.player2Deck[0][0]] }],
                  this.props.board,
                  Ranker
                )[0][0].description
              }
            </Text>
            <Text style={styles.text}>
              MidHand:
              {
                Ranker.orderHands(
                  [
                    {
                      id: 1,
                      cards: [
                        this.props.player2Deck[0][1],
                        this.props.player2Deck[0][2]
                      ]
                    }
                  ],
                  this.props.board,
                  Ranker
                )[0][0].description
              }
            </Text>
            <Text style={styles.text}>
              BotHand:{" "}
              {
                Ranker.orderHands(
                  [
                    {
                      id: 1,
                      cards: [
                        this.props.player2Deck[0][3],
                        this.props.player2Deck[0][4],
                        this.props.player2Deck[0][5],
                        this.props.player2Deck[0][6]
                      ]
                    }
                  ],
                  this.props.board,
                  Ranker.OMAHA_HI
                )[0][0].description
              }
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "flex-start",
    height: "100%"
  },
  text: {
    fontSize: 40
  }
});

const mapStateToProps = store => {
  return {
    aces: store.aces,
    activeDeck: store.activeDeck,
    player2Deck: store.player2Deck,
    board: store.board
  };
};

const mapDispatchToProps = dispatch => ({
  setAces: aces => dispatch(setAces(aces)),
  setPlayer2Deck: player2Deck => dispatch(setPlayer2Deck(player2Deck)),
  setActiveDeck: activeDeck => dispatch(setActiveDeck(activeDeck))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player2);
