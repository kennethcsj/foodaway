import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { Header } from 'react-native-elements'
import * as firebase from 'firebase';

export default class Food extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Click '+' to add Order
        </Text>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Order')}} style = {styles.button}>
          <Text style = {styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    width: 72,
    height: 72,
    justifyContent: 'center',
    backgroundColor: '#ff6f00',
    borderRadius: 100,
    position: 'absolute',
    bottom: 10,
    right: 10,
    paddingVertical: 12,
  },

  buttonText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
})
