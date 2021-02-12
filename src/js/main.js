import {CurrencyService} from './services/currency-service.js';
import '../css/styles.css';
/* eslint-disable */
const myFunction = async () => {
  const data =  await CurrencyService.request();
  console.log(data);
  const {base_code, time_last_update_utc, time_next_update_utc, conversion_rates} = data;
  console.log(conversion_rates);
};
myFunction()
