import {convertCurrency} from '../convertCurrency.js';

export const convertInput = () => {
  return document.getElementById('submit-amount').addEventListener(
    'click', () => {
      const amount = document.getElementById('input-amount').value;
      const rate = document.getElementById('input-rate').value;
      (async () => {
        const data = await convertCurrency(rate, amount);
        console.log(data);
        
      })();
    }
  );
};