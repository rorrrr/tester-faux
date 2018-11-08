var reducer = (
  state = {
    aces: "Tester shite",
    activeDeck: [
      "Ad",
      "2d",
      "3d",
      "4d",
      "5d",
      "6d",
      "7d",
      "8d",
      "9d",
      "Td",
      "Jd",
      "Qd",
      "Kd",
      "Ac",
      "2c",
      "3c",
      "4c",
      "5c",
      "6c",
      "7c",
      "8c",
      "9c",
      "Tc",
      "Jc",
      "Qc",
      "Kc",
      "Ah",
      "2h",
      "3h",
      "4h",
      "5h",
      "6h",
      "7h",
      "8h",
      "9h",
      "Th",
      "Jh",
      "Qh",
      "Kh",
      "As",
      "2s",
      "3s",
      "4s",
      "5s",
      "6s",
      "7s",
      "8s",
      "9s",
      "Ts",
      "Js",
      "Qs",
      "Ks"
    ],
    player1Deck: [],
    player2Deck: [],
    board: [],
    player1Score: 0,
    player2Score: 0,
    board: [],
    player1Tally: 0,
    player2Tally: 0
  },
  action
) => {
  switch (action.type) {
    case "setAces":
      return { ...state, aces: action.aces };
    case "addPlayer1Tally":
      return { ...state, player1Tally: state.player1Tally + 1 };
    case "addPlayer2Tally":
      return { ...state, player2Tally: state.player2Tally + 1 };
    case "addPlayer1":
      return {
        ...state,
        player1Score: state.player1Score + action.score
      };
    case "addPlayer2":
      return {
        ...state,
        player2Score: state.player2Score + action.score
      };
    case "setActiveDeck":
      return { ...state, activeDeck: action.activeDeck };
    case "setBoard":
      return { ...state, board: action.board };
    case "resetDeck":
      return {
        ...state,
        activeDeck: [
          "Ad",
          "2d",
          "3d",
          "4d",
          "5d",
          "6d",
          "7d",
          "8d",
          "9d",
          "Td",
          "Jd",
          "Qd",
          "Kd",
          "Ac",
          "2c",
          "3c",
          "4c",
          "5c",
          "6c",
          "7c",
          "8c",
          "9c",
          "Tc",
          "Jc",
          "Qc",
          "Kc",
          "Ah",
          "2h",
          "3h",
          "4h",
          "5h",
          "6h",
          "7h",
          "8h",
          "9h",
          "Th",
          "Jh",
          "Qh",
          "Kh",
          "As",
          "2s",
          "3s",
          "4s",
          "5s",
          "6s",
          "7s",
          "8s",
          "9s",
          "Ts",
          "Js",
          "Qs",
          "Ks"
        ]
      };
    case "resetDeck1":
      return { ...state, player1Deck: [] };
    case "resetDeck2":
      return { ...state, player2Deck: [] };
    case "resetBoard":
      return { ...state, board: [] };
    case "setPlayer1Deck":
      return {
        ...state,
        player1Deck: [...state.player1Deck, action.player1Deck]
      };
    case "setPlayer2Deck":
      return {
        ...state,
        player2Deck: [...state.player2Deck, action.player2Deck]
      };
    case "removeFromActiveDeck":
      return {
        ...state.activeDeck,
        activeDeck: [
          ...state.activeDeck,
          state.activeDeck.filter(card => card !== action.card)
        ]
      };
    default:
      return state;
  }
};

export default reducer;
