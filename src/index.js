import './css/styles.css';
// notiflix загрузила 
// import Notiflix from 'notiflix';

// import debounce from 'lodash.debounce';
// import { fetchCountries } from './js/fetchCountries';

// const DEBOUNCE_DELAY = 300;

// const fetchCountryInput = document.querySelector('#search-box');
// const countryList = document.querySelector('.country-list');
// const countryInfo = document.querySelector('.country-info');

// fetchCountryInput.addEventListener(
//   'input',
//   debounce(inputCountry, DEBOUNCE_DELAY)
// );

// function inputCountry(event) {
//   const query = event.target.value.trim();
//   if (query === "") {
//     countryInfo.innerHTML = '';
//     countryList.innerHTML = '';
//     return;
//   }

//   fetchCountries(query)
//     .then(countries => {
//       if (countries.length >= 10) {
//         Notiflix.Notify.info(
//           'Too many matches found. Please enter a more specific name.'
//         );
//       } else if (countries.length < 10 && countries.length >= 2) {
//         renderCountryList(countries);
     
//       } else {
//         renderCountryInfo(countries);
//       }
//     })
//     .catch(error =>
//       Notiflix.Notify.failure('Oops, there is no country with that name')
//     );
// }

// function renderCountryList(countries) {
//   const markup = countries
//     .map(({ name, flags }) => {
//       return `
//       <li>
//       <img src="${flags.svg}" alt="Flag of ${name.official}" width = 30px height = 30px>
//       <h2>${name}</h2>  
//         </li>`;
//     })
//     .join('');
//   countryList.innerHTML = markup;
//   countryInfo.innerHTML = '';
// }

// function renderCountryInfo(countries) {
//   const markup = countries
//     .map(({ name, flags, capital, population, languages }) => {
//       const languagesNew = languages.map(language => language.name);
//       return `
//         <ul>
//         <img src="${flags.svg}" alt="Flag of ${name.official}" width = 30px height = 30px>
//         <h2>${name}</h2>  
//           <p><b>Capital: </b>${capital}</p></li>
//           <p><b>Population: </b>${population}</p></li>
//           <b>Languages: </b>${languagesNew}</p></li>
//         </ul>
//         `;
//     })
//     .join('');
//   countryInfo.innerHTML = markup;
//   countryList.innerHTML = '';
// }
