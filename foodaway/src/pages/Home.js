import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    header: null
  }
  
  state = { currentUser: null }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
