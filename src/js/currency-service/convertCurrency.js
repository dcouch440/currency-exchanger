import {CurrencyService} from './currency-service.js';
import * as utils from '../utils.js';

export const convertCurrency = async (inputRate, amount) => {
  inputRate = inputRate.toUpperCase();
  try 
  {
    const service = await CurrencyService.receive();
    if (utils.isValid(inputRate, service.rate))
    {
      return {
        ...service,
        exchangedRate: utils.rateExchange(amount, service.rate[inputRate]).toFixed(2),
        exchangeRate: service.rate[inputRate],
        inputRate,
        invalidInput:  null,
        currencyFound: true
      };
    } else 
    {
      return {
        exchangedRate: 'Not Found',
        invalidInput:  inputRate,
        currencyFound: false
      };
    }
  } catch (error)
  {
    console.log(error);
  }
};