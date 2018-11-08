import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Image
} from "react-native";
import { connect } from "react-redux";
import { setPlayer1Deck, setActiveDeck } from "./state/actions";
import Ranker from "handranker";
import C2 from "./assets/Deck/C2.png";
import C3 from "./assets/Deck/C3.png";
import C4 from "./assets/Deck/C4.png";
import C5 from "./assets/Deck/C5.png";
import C6 from "./assets/Deck/C6.png";
import C7 from "./assets/Deck/C7.png";
import C8 from "./assets/Deck/C8.png";
import C9 from "./assets/Deck/C9.png";
import CT from "./assets/Deck/CT.png";
import CJ from "./assets/Deck/CJ.png";
import CQ from "./assets/Deck/CQ.png";
import CK from "./assets/Deck/CK.png";
import CA from "./assets/Deck/CA.png";
import H2 from "./assets/Deck/H2.png";
import H3 from "./assets/Deck/H3.png";
import H4 from "./assets/Deck/H4.png";
import H5 from "./assets/Deck/H5.png";
import H6 from "./assets/Deck/H6.png";
import H7 from "./assets/Deck/H7.png";
import H8 from "./assets/Deck/H8.png";
import H9 from "./assets/Deck/H9.png";
import HT from "./assets/Deck/HT.png";
import HJ from "./assets/Deck/HJ.png";
import HQ from "./assets/Deck/HQ.png";
import HK from "./assets/Deck/HK.png";
import HA from "./assets/Deck/HA.png";
import S2 from "./assets/Deck/S2.png";
import S3 from "./assets/Deck/S3.png";
import S4 from "./assets/Deck/S4.png";
import S5 from "./assets/Deck/S5.png";
import S6 from "./assets/Deck/S6.png";
import S7 from "./assets/Deck/S7.png";
import S8 from "./assets/Deck/S8.png";
import S9 from "./assets/Deck/S9.png";
import ST from "./assets/Deck/ST.png";
import SJ from "./assets/Deck/SJ.png";
import SQ from "./assets/Deck/SQ.png";
import SK from "./assets/Deck/SK.png";
import SA from "./assets/Deck/DA.png";
import D2 from "./assets/Deck/D2.png";
import D3 from "./assets/Deck/D3.png";
import D4 from "./assets/Deck/D4.png";
import D5 from "./assets/Deck/D5.png";
import D6 from "./assets/Deck/D6.png";
import D7 from "./assets/Deck/D7.png";
import D8 from "./assets/Deck/D8.png";
import D9 from "./assets/Deck/D9.png";
import DT from "./assets/Deck/DT.png";
import DJ from "./assets/Deck/DJ.png";
import DQ from "./assets/Deck/DQ.png";
import DK from "./assets/Deck/DK.png";
import DA from "./assets/Deck/DA.png";

class Player1 extends Component {
  putInHand1() {
    let drawnCards = this.props.activeDeck
      .sort(() => 0.5 - Math.random())
      .slice(0, 7);
    this.props.setActiveDeck(
      this.props.activeDeck.filter(card => !drawnCards.includes(card))
    );
    this.props.setPlayer1Deck(drawnCards);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Player1 </Text>
        {this.props.player1Deck.length == 0 && (
          <Button
            onPress={() => {
              this.putInHand1();
            }}
            title="draw p1"
            color="white"
            accessibilityLabel="Learn more bout this purple button"
          />
        )}

        {this.props.player1Deck.length > 0 && (
          <View style={styles.container}>
            <View style={styles.container}>
              <Image
                source={{
                  uri: this.props.player1Deck[0][0]
                    .toUpperCase()
                    .split("")
                    .reverse()
                    .join("")
                }}
              />
              <Text style={styles.text}>
                {" "}
                Top: {this.props.player1Deck[0][0]}
              </Text>
              <Text style={styles.text}>
                {" "}
                Middle: {this.props.player1Deck[0][1]},{
                  this.props.player1Deck[0][2]
                }
              </Text>
              <Text style={styles.text}>
                {" "}
                Bottom: {this.props.player1Deck[0][3]},{
                  this.props.player1Deck[0][4]
                },{this.props.player1Deck[0][5]},{this.props.player1Deck[0][6]}
              </Text>
            </View>
          </View>
        )}
        {this.props.board.length > 0 && (
          <View style={styles.container}>
            <Text style={styles.text}>
              Top:
              {
                Ranker.orderHands(
                  [{ id: 1, cards: [this.props.player1Deck[0][0]] }],
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
                        this.props.player1Deck[0][1],
                        this.props.player1Deck[0][2]
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
                        this.props.player1Deck[0][3],
                        this.props.player1Deck[0][4],
                        this.props.player1Deck[0][5],
                        this.props.player1Deck[0][6]
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
    backgroundColor: "blue",
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
    player1Deck: store.player1Deck,
    board: store.board
  };
};

const mapDispatchToProps = dispatch => ({
  setAces: aces => dispatch(setAces(aces)),
  setPlayer1Deck: player1Deck => dispatch(setPlayer1Deck(player1Deck)),
  setActiveDeck: activeDeck => dispatch(setActiveDeck(activeDeck))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player1);
