import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';

import * as firebase from 'firebase';

export default class Notifications extends Component {
  static navigationOptions = {
    header: null
  }

  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  onLogout = () => {
    firebase.auth().signOut()
    .then(() => {this.props.navigation.navigate('Loading')})
    .catch((error) => {const { code, message } = error;});
  }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
          Notifications
        </Text>
        <TouchableOpacity onPress={this.onLogout} style = {styles.button}>
          <Text style = {styles.buttonText}>Logout</Text>
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
    width: 300,
    backgroundColor: '#ff6f00',
    borderRadius: 20,
    marginVertical: 10,
    paddingVertical: 12,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  },
})
