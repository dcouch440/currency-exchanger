import {CurrencyService} from './services/currency-service.js';
import * as utils from './utils.js';

export const convertCurrency = async (input, amount) => {
  const {rate} = await CurrencyService.receive();
  if (utils.isValid(input, rate)) {
    console.log(utils.rateExchange(amount, rate[input]).toFixed(2));
  } else {
    return 'Not a Valid Input';
  }
};