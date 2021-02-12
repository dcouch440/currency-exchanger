import {CurrencyService} from './services/currency-service.js';
import * as utils from './utils.js';

export const convertCurrency = async (inputRate, amount) => {
  try 
  {
    const service = await CurrencyService.receive();
    if (utils.isValid(inputRate, service.rate)) {
      return {
        ...service,
        exchangedRate: utils.rateExchange(amount, service.rate[inputRate]).toFixed(2)
      };
    } else {
      return 'Not a Valid Input Rate';
    }
  } catch (error)
  {
    console.log(error);
  }
};