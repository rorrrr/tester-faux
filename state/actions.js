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

export function resetDeck() {
  return {
    type: "resetDeck"
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
export function addPlayer1Tally() {
  return {
    type: "addPlayer1Tally"
  };
}

export function addPlayer2Tally() {
  return {
    type: "addPlayer2Tally"
  };
}

export function setActiveDeck(activeDeck) {
  return {
    type: "setActiveDeck",
    activeDeck: activeDeck
  };
}

export function addPlayer1(score) {
  return {
    type: "addPlayer1",
    score: score
  };
}

export function addPlayer2(score) {
  return {
    type: "addPlayer2",
    score: score
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
