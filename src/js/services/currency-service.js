import {checkFetch} from './checkFetch.js';

export class CurrencyService {
  static async receive() {
    const {
      base_code: current, 
      time_last_update_utc: updated, 
      time_next_update_utc: toUpdate, 
      conversion_rates: rate
    } = await this.request();
    return {current, updated, toUpdate, rate};
  }
  static async request() {
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    try {
      return (await fetch(url).then(checkFetch)).json();
    } catch (err) {
      console.log('Error has occurred ' + err);
    }
  }
}