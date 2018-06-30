import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';

import * as firebase from 'firebase';

export default class Profile extends Component {
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
  onPressEmail = email => {
    Linking.openURL(`mailto://support@foood.app?subject=subject&body=body`).catch(err =>
      console.log('Error:', err)
    )
  }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

        <View style={styles.body}>
          <View style={styles.bodyContent}>

        <Text style={styles.name}> Hi ! </Text>
          <Text style={styles.info}>{currentUser && currentUser.email}</Text>
                <Text style={styles.description}>D </Text>

        <TouchableOpacity onPress={this.onLogout} style={styles.buttonContainer}>
          <Text>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressEmail} style={styles.buttonContainer}>
          <Text>Report</Text>
        </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
