import {convertCurrency} from '../currency-service/convertCurrency.js';
import {displayResponse} from '../api-components/displayResponse.js';

export const convertInput = () => {
  return document.getElementById('submit-amount').addEventListener(
    'click', () => {
      const amount = document.getElementById('input-amount').value;
      const rate = document.getElementById('input-rate').value;
      (async () => {
        const data = await convertCurrency(rate, amount);
        document.getElementById('output').innerHTML = displayResponse(data);
      })();
    }
  );
};