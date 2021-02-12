import {convertCurrency} from '../convertCurrency.js';

export const convertInput = () => {
  return document.getElementById('submit-amount').addEventListener(
    'click', () => {
      const {amount} = document.getElementById('input-amount');
      const {rate} = document.getElementById('input-rate');
      (async () => {
        const converted = await convertCurrency(rate, amount);
        document.getElementById('output').textContent = converted;
      })();
    }
  );
};