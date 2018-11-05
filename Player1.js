import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';

class Player1 extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}> Player1 </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    width: '50%',
    height: '90%',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 40,
  }
});


export default Player1
