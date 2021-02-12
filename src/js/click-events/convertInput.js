import {convertCurrency} from '../convertCurrency.js';

export const convertInput = () => {
  return document.getElementById('submit-amount').addEventListener(
    'click', () => {
      const amount = document.getElementById('input-amount').value;
      const rate = document.getElementById('input-rate').value;
      (async () => {
        const {
          current, 
          exchangedRate, 
          toUpdate, 
          updated
        } = await convertCurrency(rate, amount);
        document.getElementById('current').textContent = current;
        document.getElementById('exchange-rate').textContent = exchangedRate;
        document.getElementById('to-update').textContent = toUpdate;
        document.getElementById('updated').textContent = updated;
      })();
    }
  );
};