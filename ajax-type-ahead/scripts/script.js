const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((result) => result.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches(event) {
  const matches = findMatches(event.target.value, cities);
  const html = matches
    .map((place) => {
      const value = event.target.value;
      let span = `<span class="hl">${value}</span>`;
      placeCity = place.city.replace(value, span);
      placeState = place.state.replace(value, span);
      const result = `<li> <span class=name>${placeCity}, ${placeState}</span></li>`;
      return result;
    })
    .join("");
  suggestions.innerHTML = html;
}
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
