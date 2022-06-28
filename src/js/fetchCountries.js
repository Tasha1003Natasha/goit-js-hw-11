
const baseUrl = 'https://restcountries.com/v2/name/';
const fieldsUrl = 'fields=name,capital,population,flags,languages';


export function fetchCountries(name) {
  return fetch(`${baseUrl}${name}?${fieldsUrl}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
