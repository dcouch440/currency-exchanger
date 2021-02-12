import {checkFetch} from './checkFetch.js';

export class CurrencyService {
  static async request() {
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    try {
      return (await fetch(url).then(checkFetch)).json();
    } catch (err) {
      console.log('Error has occurred ' + err);
    }
  }
}