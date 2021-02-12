import {checkFetch} from './checkFetch.js';

export class CurrencyService {
  static async receive() {
    try 
    {
      const returnData = (await this.request());
      const {
        base_code: current,
        time_last_update_utc: updated,
        time_next_update_utc: toUpdate,
        conversion_rates: rate
      } = returnData;
      return {current, updated, toUpdate, rate};
    } catch (error) 
    {
      console.log(error);
    }
  }
  static async request() {
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    try
    {
      return (await fetch(url).then(checkFetch)).json();
    } catch (err)
    {
      document.getElementById('output').innerHTML = `Oops! Something went wrong: ${err}`;
      console.log('Error has occurred ' + err);
    }
  }
}