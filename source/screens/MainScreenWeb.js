import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import * as Linking from 'expo-linking';

import i18n from 'i18n-js';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Constants from '../constants';

export default class MainScreenWeb extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header subtitle="main.you_lose" />
        <View style={styles.content}>
          <Text style={styles.text}>{ i18n.t('unsupported_web.title') }</Text>
          <TouchableOpacity onPress={ () => Linking.openURL(Constants.links.app) }>
            <Text style={[ styles.text, styles.button ]}>
              { i18n.t('unsupported_web.message') }
            </Text>
          </TouchableOpacity>
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
  text: {
    fontFamily: 'SpecialElite',
    fontSize: '10@ms',
  },
  button: {
    marginTop: '20@ms',
    borderColor: 'black',
    borderWidth: 1,
    paddingTop: '8@ms',
    paddingBottom: '7@ms',
    paddingHorizontal: '15@ms',
  }
});