import Defeat from '../models/Defeat';
import TimeKeeper from './TimeKeeper';

const timer = new TimeKeeper();

export default class Scorer {
  async start() {
    await Defeat.createTable();
  }

  async getLastDefeat() {
    const query = {
      page: 2,
      limit: 1,
      order: 'timestamp DESC'
    };

    const last = await Defeat.query(query);
    if (! last.length) {
      return false;
    }

    return timer.formatDistanceToNow(last[0].timestamp);
  }

  async createDefeat() {
    const defeat = new Defeat({});
    await defeat.save();
  }
}