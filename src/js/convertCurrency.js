import {CurrencyService} from './services/currency-service.js';
import * as utils from './utils.js';

export const convertCurrency = async (inputRate, amount) => {
  const {rate} = await CurrencyService.receive();
  if (utils.isValid(inputRate, rate)) {
    return utils.rateExchange(amount, rate[inputRate]).toFixed(2);
  } else {
    return 'Not a Valid InputRate';
  }
};