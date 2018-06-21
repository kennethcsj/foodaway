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
export default class Order extends Component {
  state = { order: '' }

  onSubmit = () => {
    const { order } = this.state;
    firebase.database().ref('users/001').push(order);
  }

  render () {
    return(
      <View style = {styles.container}>
        <Text style = {styles.title}>
          Place your Order
        </Text>
        <TextInput
          style = { styles.orderInput }
          onChange = { order => this.setState ({ order }) }
        />
        <TouchableOpacity onPress={this.onSubmit} style = {styles.button}>
          <Text style = {styles.buttonText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  orderInput: {
    height: 50,
    padding: 4,
    marginRight: 2,
    fontSize: 23,
    borderWidth: 1,
    borderColor: '#ff6f00',
    borderRadius: 8,
    color: '#ffa726'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#ff6f00',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  }
})
