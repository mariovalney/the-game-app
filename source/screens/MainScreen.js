import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import * as Linking from 'expo-linking';

import i18n from 'i18n-js';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ShareButton from '../components/ShareButton';

import Scorer from '../helpers/Scorer';
import Constants from '../constants';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastDefeat: false
    };
  }

  componentDidMount() {
    const getLastDefeat = async () => {
      const scorer = new Scorer();
      const lastDefeat = await scorer.getLastDefeat();
      this.setState({ lastDefeat });
    };

    getLastDefeat();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header subtitle="main.you_lose" />
        <View style={styles.content}>
          <ShareButton text={ i18n.t('main.share') } />
          { this.state.lastDefeat && <Text style={styles.score}>{ i18n.t('main.without_lose', { time: this.state.lastDefeat }) }</Text>}
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: '100@ms0.1',
    paddingBottom: '20@ms0.1',
  },
  content: {
    alignItems: 'center'
  },
  score: {
    marginTop: '10@s',
    textAlign: 'center'
  }
});