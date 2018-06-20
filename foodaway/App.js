import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import StackHome from './src/navigation/StackNav';
import * as firebase from 'firebase';

export default class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyC3734ztKM_iO0woHPO-rqmMb0ZEIMWEHg",
      authDomain: "fooodtastic.firebaseapp.com",
      databaseURL: "https://fooodtastic.firebaseio.com",
      projectId: "fooodtastic",
      storageBucket: "fooodtastic.appspot.com",
      messagingSenderId: "959054096696"
    };
    if(!firebase.apps.length){
      firebase.initializeApp(config);
    }
  }

  render() {
    return (
      <StackHome/>
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
})
