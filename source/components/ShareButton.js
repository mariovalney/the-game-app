import React, { Component } from 'react';
import { Share, Text, TouchableOpacity, View, Alert } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { Ionicons } from '@expo/vector-icons';

import i18n from 'i18n-js';

import Constants from '../constants';

export default class ShareButton extends Component {
  async shareTheGame() {
    try {
      const link = Constants.links.app;
      await Share.share({
        title: i18n.t('title'),
        message: i18n.t('share.message', { link })
      });
    } catch (error) {
      alert(error.message);
    }
  }

  render() {
    const props = this.props;

    return(
      <View>
        <TouchableOpacity onPress={this.shareTheGame} style={styles.button}>
          <Text style={styles.buttonText}>{ props.text || i18n.t('share.button') }</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = ScaledSheet.create({
  button: {
    alignItems: 'center',
    marginBottom: '10@ms'
  },
  buttonText: {
    fontSize: '25@s',
    borderColor: 'black',
    borderWidth: 1,
    paddingTop: '8@ms',
    paddingBottom: '7@ms',
    paddingHorizontal: '15@ms'
  }
});