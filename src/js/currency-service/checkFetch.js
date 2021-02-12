export const checkFetch = (response) => {
  if (!response.ok) {
    throw Error(response.statusText + ' ' + response.url);
  } else {
    return response;
  }
};