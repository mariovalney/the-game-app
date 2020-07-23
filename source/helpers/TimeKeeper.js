import * as Localization from 'expo-localization';

import { formatDistanceToNow } from 'date-fns';
import { es, ptBR } from 'date-fns/locale'

import Defeat from '../models/Defeat';


export default class TimeKeeper {
  getLocale() {
    const locales = { es, ptBR };
    const locale = Localization.locale.replace('-', '');

    return locales[ locale ] || null;
  }

  formatDistanceToNow(time) {
    return formatDistanceToNow(time, { locale: this.getLocale() });
  }
}