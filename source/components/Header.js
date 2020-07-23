import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import i18n from 'i18n-js';

export default class Header extends Component {
  render() {
    const props = this.props;

    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          { i18n.t('title') }
        </Text>
        { props.subtitle && <Text style={styles.subtitle}>{i18n.t(props.subtitle)}</Text> }
      </View>
    );
  }
}

const styles = ScaledSheet.create({
  container: {
    alignSelf: 'center'
  },
  title: {
    fontFamily: 'FrederickaTheGreat',
    fontSize: '50@s'
  },
  subtitle: {
    marginTop: '10@vs',
    fontFamily: 'SpecialElite',
    fontSize: '30@s'
  },
});