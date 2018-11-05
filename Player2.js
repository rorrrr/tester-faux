import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { setAces } from './state/actions'

class Player2 extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}> {this.props.aces} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    width: '50%',
    height: '90%',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 40
  }
});


const mapStateToProps = store => {
  return {
    aces: store.aces,
  }
}

const mapDispatchToProps = dispatch => ({
  setAces: aces => dispatch(setAces(aces)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Player2)
