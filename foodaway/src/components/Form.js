// Currently not in use

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import * as firebase from 'firebase';

export default class Form extends Component {
  state = { email: '', password: '', errorMessage: null }

  handle = () => {
    const { email, password } = this.state;
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {<Text>Successful!</Text>})
      .catch((error) => {const { code, message } = error;});
  }

  render(){
    return(
      <View style = {styles.container}>
        <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0,0,0,0)'
          placeholder = "Username"
          placeholderTextColor = '#ffffff'
          onChangeText = { email => this.setState ({ email })}
          value = { this.state.email }
        />
        <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0,0,0,0)'
          placeholder = "Password"
          placeholderTextColor = '#ffffff'
          secureTextEntry = {true}
          onChangeText = { password => this.setState({ password })}
          value = { this.state.password }
        />
        <TouchableOpacity onPress={this.handle} style = {styles.button}>
          <Text style = {styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
    paddingVertical: 8,
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
  }
})
