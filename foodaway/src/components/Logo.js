import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  StatusBar
} from 'react-native';

export default class Logo extends Component {
  render() {
    return(
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#ff6f00"
          barStyle="light-content"
        />
        <Image style={{width:130, height:90}}
          source={require('../images/logo.png')}
        />
        <Text style={styles.logoText}>FOODAWAY</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  logoText: {
    marginVertical: 15,
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    color: '#ffffff',
  }
})
