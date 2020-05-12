let globalSearch = {
  runtime: false,
  genres: {
  },
  decade: {
    minDecade: 1920,
    maxDecade: 2020
  },
  watched: true,
}

const convertTime = (time) => {
  let hours = time / 60;
  if (time < 60){
    return `${time}mins`;
  } 

  let fullTime = ((time % 60) > 0) ? `${Math.floor(hours)}h ${(time % 60)}mins` : `${hours}h`;
  return fullTime;
}

const showAll = (data) => {
  document.getElementById("films").innerHTML = data.map(function(film){
  let genres = film.genres.join(", ");
  let fullTime = convertTime(film.runtime);
  return `
    <li class="col-md-4">
      <p><span>Title:</span> ${film.title}</p>
      <p><span>Year:</span> ${film.year}</p>
      <p class="film-director"><span>Directed by:</span> ${film.director}</p>
      <p class="film-genre"><span>Genres:</span> ${genres}</p>
      <p class="film-runtime"><span>Runtime:</span> ${fullTime}</p>
      <span id="${film.id}" class="film-trailer" data-trailer="${film.trailer}">trailer</span>
      <a class="watch-film-cta" href="https://www.justwatch.com/uk/movie/${film.whereToWatch}" target="_blank" rel="noopener noreferrer">film</a>    
    </li>
  `    
  }).join("");

  document.getElementById("results").style.display = "block";
  document.getElementById("results").innerHTML = `<p>There are ${data.length} films on your library.</p>`;

const renderFilms = (films) => {
  document.getElementById("films").innerHTML = films.map(function(film){
    var genres = film.genres.join(", ");
    var fullTime = convertTime(film.runtime);
    return `
      <li class="col-md-4">
        <p><span>Title:</span> ${film.title}</p>
        <p><span>Year:</span> ${film.year}</p>
        <p class="film-director"><span>Directed by:</span> ${film.director}</p>
        <p class="film-genre"><span>Genres:</span> ${genres}</p>
        <p class="film-runtime"><span>Runtime:</span> ${fullTime}</p>
        <span id="${film.id}" class="film-trailer" data-trailer="${film.trailer}">trailer</span>
        <a class="watch-film-cta" href="https://www.justwatch.com/uk/movie/${film.whereToWatch}" target="_blank" rel="noopener noreferrer">film</a>    
        </li>
    `    
  }).join("");

  document.getElementById("results").style.display = "block";
  document.getElementById("results").innerHTML = getSpelling(films.length);
}

const searchByProperty = (field) => {
  let item = globalSearch[field];
  let validProperties = [];
  let getProperties = Object.keys(item).filter(key => (item[key]) === true);
  return getProperties;
}

const filterYear = (films, low, high) => films.filter(film => film.year >= low && film.year <= high + 9);
const getWatchedFilms = films => (globalSearch.watched ? films : films.filter(film => film.watched === false));
const filterByRuntime = films => films.filter(film => film.runtime <= globalSearch.runtime);
const filterByDecade = films => filterYear(films,globalSearch.decade.minDecade,globalSearch.decade.maxDecade);
const filterByGenre = (films, genres) => films.filter(film => film["genres"].some(f => genres.includes(f)));

Array.min = array => Math.min.apply(Math, array); 
Array.max = array => Math.max.apply(Math, array);

let filmYears = data.map(film => film.year);
let getOldestDecade = Math.floor(Array.min(filmYears)/10) * 10;
let getNewestDecade = Math.floor(Array.max(filmYears)/10) * 10;
let decadeIterations = ((getNewestDecade - getOldestDecade) / 10);

let decadeRange = [];
let newDecade;

for (i = 0;i <= decadeIterations;i ++){
    newDecade = getOldestDecade + (i * 10);
    decadeRange.push(newDecade);
}

const generateDecades = (range) => { // Calculate the oldest and most recent year from our database and generate the decade range accordingly
  document.getElementById("min-decade").innerHTML = decadeRange.map(function(decade){
  return `
    <option value="${decade}">${decade}s</option>
  `    
  }).join("");
  document.querySelector("#min-decade").selectedIndex = 0;

  document.getElementById("max-decade").innerHTML = decadeRange.map(function(decade){
  return `
    <option value="${decade}">${decade}s</option>
  `    
  }).join("");
  document.querySelector("#max-decade").selectedIndex = decadeRange.length - 1;
}

generateDecades(decadeRange);

// Generate the extra genres
const allGenres = data.map(film => film.genres);
const mainGenres = ["action","comedy","drama","horror","sci-fi"]
const extraGenres = [];

for (const genreList of allGenres) {
  for (const genre of genreList){
    if (!extraGenres.includes(genre) && !mainGenres.includes(genre)){
      extraGenres.push(genre);
    }
  }
}

extraGenres.sort();

document.querySelector("#extra-genres").insertAdjacentHTML('afterbegin',extraGenres.map(
  function(genre){
    return `
    <div class="genre-selector">
        <input id="${genre}" type="checkbox" class="genre-items" value="${genre}">
        <label for="${genre}">${genre}</label>    
    </div>  
    `    
  }).join(""));

document.querySelector(".cta-expand").addEventListener("click",function(){ 
  this.classList.toggle("expanded");
});

let genres = document.querySelector("#genres");
let decades = document.querySelector("#decades");
let matches = document.querySelectorAll("input[type='checkbox']");
let runtimes = document.querySelector("#times");
let records;

const getSpelling = (records) => {
  if (records === 1){
    return `<p>${records} film matches your search.</p>`
  } else if (records > 1){
    return `<p>${records} films match your search.</p>`;
  } 
  return `<p>Sorry, we don't have any matches for that request.</p>`;
}

document.querySelector("#watched").addEventListener("click",function(){ 
  globalSearch.watched = !globalSearch.watched; // Toggle the previously watched checkbox to filter the results
  let filteredFilms;

  if (globalSearch.runtime != false){ // Filter the original database by runtime if there's one set 
    filteredFilms = filterByRuntime(data);
  } else {
    filteredFilms = data;
  }
  
  if (Object.keys(globalSearch.genres).length > 0){ // Filter by selected genres
    let selectedGenres = searchByProperty("genres");
    filteredFilms = filterByGenre(filteredFilms,selectedGenres);
  }

  filteredFilms = filterByDecade(filteredFilms) // Filter by decade range
  filteredFilms = getWatchedFilms(filterByDecade(filteredFilms)); // Filter by watched previously or not
  filteredFilms = filterYear(filteredFilms,globalSearch.decade.minDecade,globalSearch.decade.maxDecade);  // Filter films by decade range 
 
  renderFilms(filteredFilms);

});

document.querySelector("#times").addEventListener("click",function(){
  globalSearch.runtime = event.target.getAttribute('data-runtime');
  let filteredFilms = filterByRuntime(data);

  if (Object.keys(globalSearch.genres).length > 0){ // Filter by selected genres
    let selectedGenres = searchByProperty("genres");
    filteredFilms = filterByGenre(filteredFilms,selectedGenres);
  }

  filteredFilms = filterYear(getWatchedFilms(filterByDecade(filteredFilms)),globalSearch.decade.minDecade,globalSearch.decade.maxDecade);  // Filter films by decade range
  renderFilms(filteredFilms);

});

document.querySelector("#min-decade").addEventListener("change",function(event){
  if (parseInt(event.target.value) > globalSearch.decade.maxDecade){ 
    globalSearch.decade.maxDecade = parseInt(event.target.value);
    document.querySelector("#max-decade").selectedIndex = -1;
    document.querySelector("#max-decade").selectedIndex = document.querySelector("#min-decade").selectedIndex;
  }

  globalSearch.decade.minDecade = parseInt(event.target.value);

  let filteredFilms = filterByDecade(data); // Filter by decade range

  if (globalSearch.runtime != false){ // Filter by runtime if the user has selected one
    filteredFilms = filterByRuntime(data);
  } 

  if (Object.keys(globalSearch.genres).length > 0){ // Filter by selected genres
    let selectedGenres = searchByProperty("genres");
    filteredFilms = filterByGenre(filteredFilms,selectedGenres);
  }

  filteredFilms = filterYear(getWatchedFilms(filteredFilms),globalSearch.decade.minDecade,globalSearch.decade.maxDecade);  
  renderFilms(filteredFilms);
});

document.querySelector("#max-decade").addEventListener("change",function(event){
  const filterByDecades = () => {
    if (parseInt(event.target.value) < globalSearch.decade.minDecade){
    globalSearch.decade.maxDecade = parseInt(event.target.value);
    event.target.selectedIndex = -1;
    document.querySelector("#max-decade").selectedIndex = document.querySelector("#min-decade").selectedIndex;
  }

  globalSearch.decade.maxDecade = parseInt(event.target.value); 
  
  if (globalSearch.runtime != false){ 
    filteredFilms = filterByRuntime(data);
  } else {
    filteredFilms = data;
  }

  if (Object.keys(globalSearch.genres).length > 0){ // Filter by selected genres
    var selectedGenres = searchByProperty("genres");
    filteredFilms = filterByGenre(filteredFilms,selectedGenres);
  }

  filteredFilms = filterByDecade(filteredFilms) // Filter by decade range
  filteredFilms = getWatchedFilms(filterByDecade(filteredFilms)); // Filter by watched previously or not
  filteredFilms = filterYear(filteredFilms,globalSearch.decade.minDecade,globalSearch.decade.maxDecade);  // Filter films by decade range 

  renderFilms(filteredFilms);
  }

  filterByDecades();
});

// Filter by time and genres
document.querySelector("#genres").addEventListener("change", function (event){
  let checkbox = event.target;
  globalSearch.genres[checkbox.value] = checkbox.checked;
  let selectedGenres = searchByProperty("genres");
  let filteredFilms;

  if (globalSearch.runtime != false){ // Filter the original database by runtime if there's one set 
    filteredFilms = filterByRuntime(data);
  } else {
    filteredFilms = data;
  }

  filteredFilms= filterByGenre(filteredFilms,selectedGenres);
  filteredFilms = filterYear(getWatchedFilms(filterByDecade(filteredFilms)),globalSearch.decade.minDecade,globalSearch.decade.maxDecade);  // Filter films by decade range 

  renderFilms(filteredFilms);
});

const watchTrailer = (trailer) => {
  let trailerBlock = document.createElement('div');
  trailerBlock.id = 'trailer-full-screen';
  trailerBlock.innerHTML = `
  <div id="youtube-trailer">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${trailer}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  `;
  document.querySelector("body").appendChild(trailerBlock);
}

document.addEventListener('click', function (event) {
  let clicked = event.target;
  if (clicked.hasAttribute('data-trailer')){ // detect click on watch trailer ctas
    watchTrailer(clicked.getAttribute("data-trailer"));
  }

  if (clicked.id == 'trailer-full-screen'){ // detect click on trailer overlay mode 
      let el = document.querySelector("#trailer-full-screen");
      el.parentNode.removeChild(el);
      return false;
  };
});

}

fetch('https://gist.githubusercontent.com/mklmng/fa894dc9c86dfed34e45063adcf1b73e/raw/aaebe9185fbb4b1ebcaf5343335168c9d2898f9a/Films.json'
).then((res) => res.json())
  .then((json) => {
    showAll(json);
    })