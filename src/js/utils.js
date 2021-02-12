export const rateExchange = (amount, rate) => amount * rate;

export const isValid = (input, object) => {
  let isKey = false;
  for (let k of Object.keys(object)){
    if (k == input.toUpperCase()) {
      isKey = true;
    }
  }
  return isKey;
};