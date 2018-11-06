export function setAces(aces) {
  return {
    type: "setAces",
    aces: aces
  };
}

export function resetDeck1() {
  return {
    type: "resetDeck1"
  };
}

export function resetDeck2() {
  return {
    type: "resetDeck2"
  };
}

export function resetBoard() {
  return {
    type: "resetBoard"
  };
}

export function setActiveDeck(activeDeck) {
  return {
    type: "setActiveDeck",
    activeDeck: activeDeck
  };
}

export function addPlayer1(player1Score) {
  return {
    type: "addPlayer1",
    player1Score: player1Score
  };
}

export function addPlayer2(player2Score) {
  return {
    type: "addPlayer2",
    player2Score: player2Score
  };
}

export function setBoard(board) {
  return {
    type: "setBoard",
    board: board
  };
}

export function removeFromActiveDeck(card) {
  return {
    type: "removeFromActiveDeck",
    card: card
  };
}

export function setPlayer1Deck(player1Deck) {
  return {
    type: "setPlayer1Deck",
    player1Deck: player1Deck
  };
}

export function setPlayer2Deck(player2Deck) {
  return {
    type: "setPlayer2Deck",
    player2Deck: player2Deck
  };
}
