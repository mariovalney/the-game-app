import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';

import Scorer from './helpers/Scorer';

import MainScreen from './screens/MainScreen';
import MainScreenWeb from './screens/MainScreenWeb';

export default class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defeatCreated: false
    };
  }

  async createDefeat() {
    if (Platform.OS === 'web') {
      return;
    }

    const scorer = new Scorer();
    await scorer.start();
    await scorer.createDefeat();
  };

  render() {
    if (! this.state.defeatCreated) {
      return (
        <AppLoading
          startAsync={this.createDefeat}
          onFinish={ () => this.setState({ defeatCreated: true }) }
          onError={ console.warn }
        />
      );
    }

    return (
      <View style={styles.container}>
        <StatusBar hidden={ true } />
        { Platform.OS !== 'web' && <MainScreen /> }
        { Platform.OS === 'web' && <MainScreenWeb /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
});
