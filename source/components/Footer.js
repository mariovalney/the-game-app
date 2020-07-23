import React, { Component } from 'react';
import { Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { Ionicons } from '@expo/vector-icons';

import i18n from 'i18n-js';

export default class Footer extends Component {
  render() {
    const props = this.props;

    return(
      <Text style={styles.copy}>
        { i18n.t('footer.copyright_before_icon') } <Ionicons name="md-heart" style={styles.icon}/> { i18n.t('footer.copyright_after_icon') }
      </Text>
    );
  }
}

const styles = ScaledSheet.create({
  copy: {
    color: '#BBBBBB',
    fontSize: '11@s',
    textAlign: 'center'
  },
  icon: {
    fontSize: '10@s',
  },
});