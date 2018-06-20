import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import * as firebase from 'firebase';

export default class Signup extends Component {
  static navigationOptions = {
    header: null
  }

  state = { email: '', password: '', errorMessage: null }

  onSignup = () => {
    const { email, password } = this.state;
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {this.props.navigation.navigate('Login')})
      .catch((error) => {const { code, message } = error;});
  }

  render() {
    return(
      <View style = {styles.container}>
        <Logo/>
          <TextInput style = {styles.inputBox}
            underlineColorAndroid = 'rgba(0,0,0,0)'
            placeholder = "Email"
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
        <TouchableOpacity onPress={this.onSignup} style = {styles.button}>
            <Text style = {styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        <View style = {styles.signupTextCont}>
          <Text style = {styles.signupText}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Login')}}>
            <Text style = {styles.signupButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa726',
    alignItems: 'center',
    justifyContent: 'center',
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
  },

  signupTextCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  signupText: {
    color:'rgba(255, 255, 255, 0.7)',
    fontSize: 16
  },

  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
})
