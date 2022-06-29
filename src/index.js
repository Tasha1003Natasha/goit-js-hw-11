import './css/styles.css';
import { fetchEvents } from './js/fetchCountries';
// notiflix загрузила
// import Notiflix from 'notiflix';

// import debounce from 'lodash.debounce';
// const DEBOUNCE_DELAY = 300;

const form = document.querySelector('#search-form');
// console.log(form);
const btn = document.querySelector('button');
// console.log(btn);

const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);
let pageFetch = 1;
let keyword = `q`;

function getEvents(page, keyword) {
  console.log(page, keyword);
  fetchEvents(page, keyword)
    .then(data => {
      console.log(data);
      renderEvents(events);
      pageFetch += 1;
    })
    .catch(error => console.log(error));
};

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { searchQuery },
  } = event.currentTarget;
  let inputEl = searchQuery.value;
  //   console.log(inputEl);

  event.currentTarget.reset();
}

function renderEvents(page, keyword) {
  const markup = events
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
    <div class="photo-card">
    <a class="info-link" href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
    <div class="info">
      <p class="info-item">
        <b>Likes:</b>${likes}
      </p>
      <p class="info-item">
        <b>Views:</b>${views}
      </p>
      <p class="info-item">
        <b>Comments:</b>${comments}
      </p>
      <p class="info-item">
        <b>Downloads:</b>${downloads}
      </p>
    </div>
  </div>

            `;
      }
    )
    .join('');
  galleryEl.innerHTML = markup;
}

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
// /////////////////////////////
/* <a class="gallery__link" href="${largeImageURL}">
<img
  class="gallery__image"
  src="${webformatURL}"
  alt="${tags}"
/
</a> */
