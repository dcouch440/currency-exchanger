export const checkFetch = (response) => {
  if (!response.ok) {
    document.getElementById('output').innerHTML = `Something went wrong, Check status code ${response.status} for more information.`;
    throw Error(response.statusText + ' ' + response.url);
  } else {
    return response;
  }
};