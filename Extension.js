import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Player1 from './Player1'
import Player2 from './Player2'

class Extension extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Player1/>
        <Player2/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
  }
});


export default Extension
