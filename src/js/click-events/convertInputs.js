import {convertCurrency} from '../currency-service/convertCurrency.js';
import {displayResponse} from '../api-components/displayResponse.js';

export const convertInputs = () => {
  document.getElementById('submit-amount').addEventListener(
    'click', () => {
      const amount = document.getElementById('input-amount').value;
      const rate = document.getElementById('input-rate').value;
      (async () => {
        try 
        {
          const data = await convertCurrency(rate, amount);
          document.getElementById('output').innerHTML = displayResponse(data);
        } catch (error)
        {
          console.log(error);
        }
      })();
    }
  );
};