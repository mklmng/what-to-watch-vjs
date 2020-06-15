// Fetch the data
fetch('https://gist.githubusercontent.com/mklmng/fa894dc9c86dfed34e45063adcf1b73e/raw/eb77422572bbf7bee0ebaf86c02eb1fe99730195/Films.json'
).then((res) => res.json())
  .then((json) => {
    renderAll(json);
    })

const renderAll = (data) =>{
  // Generate the extra genres
  const mainGenres = ["action","comedy","drama","horror","sci-fi"]
  const extraGenres = [];

  data.forEach(film => {
    film.genres.forEach(genre => {
      if (!extraGenres.includes(genre) && !mainGenres.includes(genre)){
        extraGenres.push(genre);
      }
    });
  })

  extraGenres.sort();

  document.querySelector("#extra-genres").insertAdjacentHTML('afterbegin', extraGenres.map(
    function(genre){
      return `<div class="genre-selector"><input id="${genre}" type="checkbox" class="genre-items" value="${genre}"><label for="${genre}">${genre}</label></div>`    
    }).join(""));

  // The runtime is converted from minutes to hours and minutes to make it more readable at first glance
  const convertTime = (time) => {
    let hours = time / 60;
    if (time < 60){
      return `${time}mins`;
    } 

    let fullTime = ((time % 60) > 0) ? `${Math.floor(hours)}h ${(time % 60)}mins` : `${hours}h`;
    return fullTime;
  }

  // Generate the longest runtime 
  const maxRuntime = parseInt(Math.max.apply(0, data.map(film => film.runtime)));  

  // Generate the newest and oldest decades
  Array.prototype.min = function(array){
    return Math.min.apply(Math, array);
  };

  Array.prototype.max = function(array){
    return Math.max.apply(Math, array);
  }
  
  let filmYears = data.map(film => film.year);
  let minDecade = Math.floor(Math.min.apply(0, filmYears) / 10) * 10;
  let maxDecade = Math.floor(Math.max.apply(0, filmYears) / 10) * 10;
  let decadeIterations = ((maxDecade - minDecade) / 10);
  let decadeRange = [];
  for (i = 0;i <= decadeIterations;i ++){
    decadeRange.push(minDecade + (i * 10));
  }

  const generateDecades = (range) => { 
    document.querySelector("#min-decade").insertAdjacentHTML('afterbegin', decadeRange.map(function(decade){
    return `<option value="${decade}">${decade}s</option>`}).join(""));
    document.querySelector("#min-decade").selectedIndex = 0;
    document.querySelector("#max-decade").insertAdjacentHTML('afterbegin', decadeRange.map(function(decade){
    return `<option value="${decade}">${decade}s</option>`}).join(""));
    document.querySelector("#max-decade").selectedIndex = decadeRange.length - 1;
  }
    
  generateDecades(decadeRange);

  // Set the global filters, all the films are visible by default
  let filters = {
    runtime: maxRuntime,
    minDecade: minDecade,
    maxDecade: maxDecade,
    watched: true,
    genres: []
  }

  // Extend the array with some filter methods to chain them all at once on every filter interaction

  // Switches between showing all results (watched and not watched) or only the not watched
  Array.prototype.filterByWatched = function(watched){
    return watched ? this : this.filter((item) => {
      return !item.watched;
    });
  }

  // Shows the films that have a shorter or equal runtime than the one we choose
  Array.prototype.filterByRuntimes = function(runtime){
    return this.filter((item)=>{
      return item.runtime <= runtime;
    });
  }

  // Shows films of any genre on first load (empty genre array) and the ones that match at least one of the genres of our global genres
  Array.prototype.filterByGenre = function(genres){
    if (!genres.length){
      return this
    } else{
      return this.filter((item)=>{
        return item.genres.some(f=> genres.includes(f));
      })
    }
  }

  // Shows films within the decade range
  Array.prototype.filterByDecades = function(minDecade, maxDecade){
    return this.filter((item)=>{
      return item.year >= minDecade && item.year <= maxDecade + 9;
    });
  }
  
  const renderFilms = (data) => {
    let filmContainer = document.querySelector("#films");
    let filmResults = document.querySelector("#results");

    // If the films div has some results already, we remove all the previous children first and put the new content later
    if (filmContainer.hasChildNodes()){ 
      while (filmContainer.firstChild) {
        filmContainer.removeChild(filmContainer.firstChild);
      }
    }

    if (filmResults.hasChildNodes()){ 
      while (filmResults.firstChild) {
        filmResults.removeChild(filmResults.firstChild);
      }
    }
  
    document.querySelector("#films").insertAdjacentHTML("afterbegin", data.map(({title, year, director, genres, runtime, trailer, id, whereToWatch}) => {   
      let fullGenres = genres.join(", ");
      let fullTime = convertTime(runtime);
      return `
        <li class="col-md-4 film-card">
          <p><span>Title:</span> ${title}</p>
          <p><span>Year:</span> ${year}</p>
          <p class="film-director"><span>Directed by:</span> ${director}</p>
          <p class="film-genre"><span>Genres:</span> ${fullGenres}</p>
          <p class="film-runtime"><span>Runtime:</span> ${fullTime}</p>
          <div class="film-ctas">
            <span id="${id}" class="film-trailer" data-trailer="${trailer}">trailer</span>
            <a class="watch-film-cta" href="https://www.justwatch.com/uk/movie/${whereToWatch}" target="_blank" rel="noopener noreferrer">film</a>    
          </div>

        </li>
      `    
      }).join(""));

      document.querySelector("#results").style.display = "block";
      let resultsText = "";
      if (data.length){
        (data.length < 2) ? resultsText = `<p class="film-results">There is <strong>${data.length}</strong> match on your library.</p>` : resultsText = `<p class="film-results">There are <strong>${data.length}</strong> matches on your library.</p>`;
      } else {
        resultsText = `<p>Sorry, no films that match your search.</p>`;
      }
      document.querySelector("#results").insertAdjacentHTML("afterbegin", resultsText);
 }

  // Chain all the filters in one function
  function chainFilters(data, filters){
    return data.filterByWatched(filters.watched).filterByRuntimes(filters.runtime).filterByGenre(filters.genres).filterByDecades(filters.minDecade, filters.maxDecade);
  }

  renderFilms(data);

  // Click on the matches to see them (mobile)
  document.querySelector("#results .film-results").addEventListener("click", function(){
    this.classList.toggle("return");

    if(this.classList.contains("return")){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      let elementCoordinates = document.querySelector("#results").getBoundingClientRect();
      window.scrollTo({
        top: Math.round(elementCoordinates.y),
        left: 0,
        behavior: 'smooth'
      });
    }
  });

  // Show & hide all the genres not just the most popular

  document.querySelector(".cta-expand").addEventListener("click", function(){ 
    this.classList.toggle("expanded");

    let elementCoordinates = document.querySelector("#extra-genres").getBoundingClientRect();
    const moveToExpanded = (posY) => {
      window.scrollTo({
        top: Math.round(elementCoordinates.y),
        left: 0,
        behavior: 'smooth'
      });
    }
    if (!(this.classList.contains('expanded'))) {
      moveToExpanded(elementCoordinates.y);
    } else{
      moveToExpanded(0);
    }
  });

  let genres = document.querySelector("#genres");
  let decades = document.querySelector("#decades");
  let matches = document.querySelectorAll("input[type='checkbox']");
  let records;

  const getSpelling = (records) => {
    if (records === 1){
      return `<p><strong>${records}</strong> film matches your search.</p>`
    } else if (records > 1){
      return `<p><strong>${records}</strong> films match your search.</p>`;
    } 
    return `<p>Sorry, we don't have any matches for that request.</p>`;
  }

  document.querySelector("#watched").addEventListener("change",function(e){
    filters.watched = !filters.watched;
    renderFilms(chainFilters(data, filters));
  });

  document.querySelector("#runtimes").addEventListener("change", function(e){
    if (!e.target.value.length){
      return false;
    } else {
      if (e.target.value === "all"){
        filters.runtime = maxRuntime;
      } else {
        filters.runtime = parseInt(e.target.value);
      }
    }
    renderFilms(chainFilters(data, filters));
  });

  document.querySelector("#genres").addEventListener("change", function(e){
    let genres = e.target.value;
    if (e.target.value){
      if (filters.genres.includes(genres)){
        let updatedGenres = [...filters.genres];
        updatedGenres.splice(updatedGenres.indexOf(genres), 1);
        filters.genres = updatedGenres;
      } 
      else {
        filters.genres.push(genres);
      } 
      renderFilms(chainFilters(data, filters));
    }
  });

  document.querySelector("#min-decade").addEventListener("change", function(e){
    if (parseInt(e.target.value) > filters.maxDecade){ 
      filters.maxDecade = parseInt(e.target.value);
      document.querySelector("#max-decade").selectedIndex = -1;
      document.querySelector("#max-decade").selectedIndex = document.querySelector("#min-decade").selectedIndex;
    }
    
    filters.minDecade = parseInt(e.target.value);  
    renderFilms(chainFilters(data, filters));
  });
    
  document.querySelector("#max-decade").addEventListener("change", function(e){
    if (parseInt(event.target.value) < filters.minDecade){
      filters.maxDecade = filters.minDecade;
      document.querySelector("#max-decade").selectedIndex = document.querySelector("#min-decade").selectedIndex;
    }
    
    filters.maxDecade = parseInt(e.target.value); 
    renderFilms(chainFilters(data, filters));
  });
    
  const watchTrailer = (trailer) => {
    let trailerBlock = document.createElement('div');
    trailerBlock.id = 'overlay';
    trailerBlock.insertAdjacentHTML("afterbegin", `
    <div class="overlay__wrapper">
      <div class="overlay__wrapper__video-container">
        <iframe class="overlay__wrapper__video-container__video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/${trailer}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>
    </div>
    `);
    document.querySelector("body").appendChild(trailerBlock);
  }
  
  document.addEventListener('click', function(){
    let clicked = event.target;
  
    if (clicked.hasAttribute('data-trailer')){ // detect click on watch trailer ctas
      watchTrailer(clicked.getAttribute("data-trailer"));
    }
  
    if (clicked.id == 'overlay'){ // detect click on trailer overlay mode 
      let el = document.querySelector("#overlay");
      el.parentNode.removeChild(el);
      return false;
    };
  })
  
  // The user can toggle the night mode to improve the UX in the dark
  document.querySelector("#theme").addEventListener("click", function(){ 
    document.querySelector("body").classList.toggle("dark");
    let themeLabel = document.querySelector("label[for=theme]");
    (themeLabel.innerText === "Day theme") ? themeLabel.innerText = "Night theme" : themeLabel.innerText = "Day theme";
  });  
}