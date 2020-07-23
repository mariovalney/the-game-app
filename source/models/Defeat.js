import * as SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'

import Constants from '../constants';

export default class Defeat extends BaseModel {
  constructor(obj) {
    super(obj)
  }

  static get database() {
    return async () => SQLite.openDatabase(Constants.database.v1);
  }

  static get tableName() {
    return 'defeats';
  }

  static get columnMapping() {
    return {
      id: {
        type: types.INTEGER,
        primary_key: true
      },
      timestamp: {
        type: types.INTEGER,
        default: () => Date.now()
      }
    }
  }
}