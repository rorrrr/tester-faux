import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { darkRed, red, grey, jet, green, white } from "./assets/colors";
import ReactDOM, { render } from "react-dom";
import { createStore } from "redux";
import { createRenderer } from "fela";
import { Provider as StoreProvider } from "react-redux";
import { Provider as FelaProvider } from "react-fela";

import Extension from "./Extension";

import reducer from "./state/reducer";

const store = createStore(reducer);

const renderer = createRenderer();

export default class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <StoreProvider store={store}>
          <FelaProvider renderer={renderer}>
            <Extension />
          </FelaProvider>
        </StoreProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  }
});
