
const BASE_URL = 'https://pixabay.com/api/';
const API = `28317427-cd386f88f666cbda8176ce58f`;



export function fetchEvents(page, keyword) {
    const searchParams = new URLSearchParams({
        key:API,
        q,
        image_type:"photo",
        orientation: "horizontal",
        safesearch:true,
      });

      
  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}





// https://pixabay.com/api/
// ключ (обязательно)	ул	Ваш ключ API:28317427-cd386f88f666cbda8176ce58f
