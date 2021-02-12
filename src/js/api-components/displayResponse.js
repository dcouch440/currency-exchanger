export const displayResponse = ({updated, inputRate, toUpdate, exchangedRate, exchangeRate, currencyFound, invalidInput}) => {
  if (currencyFound) {
    return `
      <div>
        <div id="updated-rate">Value after exchange ${exchangedRate} ${inputRate}</div>
        <div id="current-rate">Current exchange rate ${exchangeRate}</div>
        <div id="updated-date">Last update ${updated}</div>
        <div id="next-update">Next update ${toUpdate}</div>
      </div>
    `;
  } else {
    return `
      <div>
        <div id="updated=rate">${exchangedRate}: ${invalidInput.length === 0 ? 'No input' : invalidInput + ' is not a valid input'}!</div>
      </div>
    `;
  }
};