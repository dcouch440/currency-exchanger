export const displayResponse = ({current, updated, toUpdate, exchangedRate, currencyFound, invalidInput}) => {
  if (currencyFound) {
    return `
      <div>
        <div id="updated-rate">Current exchange rate ${exchangedRate} ${current}</div>
        <div id="updated-date">Last update ${updated}</div>
        <div id="next-update">Next update ${toUpdate}</div>
        <div id="next-update">Next update ${toUpdate}</div>
      </div>
    `;
  } else {
    return `
      <div>
        <div id="updated=rate">${exchangedRate}: ${invalidInput} is not a valid input!</div>
      </div>
    `;
  }
};