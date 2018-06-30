/*import React, { Component } from 'react';
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
}) */

import React from 'react';

import {
  View,
  Text,
  Animated,
  Easing,
  Dimensions,
  StyleSheet,
} from 'react-native';
import ajax from '../ajax';
import DealList from './DealList';
import DealDetail from './DealDetail';
import SearchBar from './SearchBar';

class Food extends React.Component {
  titleXPos = new Animated.Value(0);
  state = {
    deals: [],
    dealsFromSearch: [],
    currentDealId: null,
    activeSearchTerm: '',
  };
  animateTitle = (direction = 1) => {
    const width = Dimensions.get('window').width - 150;
    Animated.timing(this.titleXPos, {
      toValue: direction * (width / 2),
      duration: 1000,
      easing: Easing.ease,
    }).start(({ finished }) => {
      if (finished) {
        this.animateTitle(-1 * direction);
      }
    });
  };
  async componentDidMount() {
    this.animateTitle();
    const deals = await ajax.fetchInitialDeals();
    this.setState({ deals });
  }
  searchDeals = async (searchTerm) => {
    let dealsFromSearch = [];
    if (searchTerm) {
      dealsFromSearch = await ajax.fetchDealSearchResults(searchTerm);
    }
    this.setState({ dealsFromSearch, activeSearchTerm: searchTerm });
  };
  setCurrentDeal = (dealId) => {
    this.setState({
      currentDealId: dealId,
    });
  };
  unsetCurrentDeal = () => {
    this.setState({
      currentDealId: null,
    });
  };
  currentDeal = () => {
    return this.state.deals.find((deal) => deal.key === this.state.currentDealId);
  };
  render() {
    if (this.state.currentDealId) {
      return (
        <View style={styles.main}>
          <DealDetail
            initialDealData={this.currentDeal()}
            onBack={this.unsetCurrentDeal}
          />
        </View>
      );
    }
    const dealsToDisplay =
      this.state.dealsFromSearch.length > 0
        ? this.state.dealsFromSearch
        : this.state.deals;

    if (dealsToDisplay.length > 0) {
      return (
        <View style={styles.main}>
          <SearchBar
            searchDeals={this.searchDeals}
            initialSearchTerm={this.state.activeSearchTerm}
          />
          <DealList deals={dealsToDisplay} onItemPress={this.setCurrentDeal} />
        </View>
      );
    }
    return (
      <Animated.View style={[{ left: this.titleXPos }, styles.container]}>
        <Text style={styles.header}>foodaway</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    marginTop: 30,
  },
  header: {
    fontSize: 40,
  },
});

export default Food;
