import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import * as firebase from 'firebase';

export default class Loading extends Component {
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Home' : 'Login')})
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text>Loading...</Text>
        <ActivityIndicator size = "large" />
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
