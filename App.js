import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as Localization from 'expo-localization';

import MainScreen from './source/screens/MainScreen';
import MainScreenWeb from './source/screens/MainScreenWeb';

import Application from './source/Application';

// Localization
import i18n from 'i18n-js';
i18n.translations = {
  es: require('./source/i18n/es.json'),
  en: require('./source/i18n/en.json'),
  pt: require('./source/i18n/pt.json'),
  'pt-BR': require('./source/i18n/pt_BR.json'),
};

i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default function App() {
  const [loaded] = useFonts({
    FrederickaTheGreat: require('./source/assets/fonts/FrederickatheGreat/FrederickatheGreat-Regular.ttf'),
    SpecialElite: require('./source/assets/fonts/SpecialElite/SpecialElite-Regular.ttf'),
  });

  if (! loaded) {
    return <AppLoading />;
  }

  return (
    <Application />
  );
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
