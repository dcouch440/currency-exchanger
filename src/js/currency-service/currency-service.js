import {checkFetch} from './checkFetch.js';

export class CurrencyService {
  static async receive() {
    try 
    {
      const request = (await this.request());
      if (request.result === "error") 
      {
        throw new Error(request['error-type'])
      }
      const {
        time_last_update_utc: updated,
        time_next_update_utc: toUpdate,
        conversion_rates: rate
      } = request;
      return {updated, toUpdate, rate};
    } catch (error) 
    {
      document.getElementById('output').innerHTML = `Oops! Something went wrong... ${error}`;
      console.log(error);
    }
  }
  static async request() {
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    try
    {
      return (await fetch(url).then(checkFetch)).json();
    } catch (error)
    {
      document.getElementById('output').innerHTML = `Oops! Something went wrong: ${error}`;
      console.log('Error has occurred ' + error);
    }
  }
}