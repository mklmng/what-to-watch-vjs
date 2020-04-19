var globalSearch = {
  runtime: false,
  genres: {
  },
  decade: {
    minDecade: 1920,
    maxDecade: 2020
  },
  watched: true,
}

var allGenres = 
["action","animation","adventure","biography","comedy","drama","horror","mystery","sci-fi","thriller"];

document.querySelector("#genres").innerHTML = allGenres.map(
  function(genre){
    return `
    <div class="genre-selector">
        <input id="${genre}" type="checkbox" class="genre-items" value="${genre}">
        <label for="${genre}">${genre}</label>    
    </div>  
    `    
  }).join("");

  const data = [
    {
      id: 1,
      imdbId: 'tt1038988',
      title: '[Rec]',
      director: [
        'Jaume Balagueró',
        'Paco Plaza'
      ],
      genres: [
        'horror',
        'mystery',
        'thriller'
      ],
      runtime: 78,
      year: 2007,
      trailer: 'KLizS5GFBQI',
      watched: true,
      watchlist: false
    },
    {
      id: 2,
      imdbId: 'tt1245112',
      title: '[Rec] 2',
      director: [
        'Jaume Balagueró',
        'Paco Plaza'
      ],
      genres: [
        'horror',
        'thriller'
      ],
      runtime: 85,
      year: 2007,
      trailer: 'ifmFMfcg7VE',
      watched: false,
      watchlist: false
    },
    {
      id: 3,
      imdbId: 'tt1649444',
      title: '[REC] 3: Genesis',
      director: [
        'Paco Plaza'
      ],
      genres: [
        'horror',
        'thriller'
      ],
      runtime: 80,
      year: 2012,
      decade: 2010,
      trailer: 'REmQ3gHFPro',
      watched: false,
      watchlist: false
    },
    {
      id: 4,
      title: '10 Cloverfield Lane',
      director: [
        'Dan Trachtenberg'
      ],
      genres: [
        'drama',
        'horror',
        'mystery'
      ],
      runtime: 103,
      year: 2016,
      decade: 2010,
      trailer: 'yQy-ANhnUpE',
      watched: true,
      watchlist: false
    },
    {
      id: 5,
      title: '127 hours',
      director: [
        'Danny Boyle'
      ],
      genres: [
        'adventure',
        'biography',
        'drama'
      ],
      runtime: 94,
      year: 2010,
      decade: 2010,
      trailer: 'OlhLOWTnVoQ',
      watched: false,
      watchlist: false
    },
    {
      id: 6,
      title: '2001: A Space Odyssey',
      director: [
        'Stanley Kubrick'
      ],
      genres: [
        'adventure',
        'sci-fi'
      ],
      runtime: 149,
      year: 1968,
      decade: 1960,
      trailer: 'oR_e9y-bka0',
      watched: true,
      watchlist: false
    },
    {
      id: 7,
      title: '21 Jump Street',
      director: [
        'Phil Lord',
        'Christopher Miller'
      ],
      genres: [
        'action',
        'comedy',
        'crime'
      ],
      runtime: 109,
      year: 2012,
      decade: 2010,
      trailer: 'Oj55KinxZx4',
      watched: true,
      watchlist: false
    },
    {
      id: 8,
      title: '22 Jump Street',
      director: [
        'Phil Lord',
        'Christopher Miller'
      ],
      genres: [
        'action',
        'comedy',
        'crime'
      ],
      runtime: 112,
      year: 2014,
      decade: 2010,
      trailer: 'i3_gKCX4Cik',
      watched: true,
      watchlist: false
    },
    {
      id: 9,
      title: '28 Days Later',
      director: [
        'Danny Boyle'
      ],
      genres: [
        'drama',
        'horror',
        'sci-fi'
      ],
      runtime: 113,
      year: 2002,
      decade: 2000,
      trailer: 'c7ynwAgQlDQ',
      watched: true,
      watchlist: false
    },
    {
      id: 10,
      title: '30 days of night',
      director: [
        'David Slade'
      ],
      genres: [
        'horror',
        'thriller'
      ],
      runtime: 113,
      year: 2007,
      decade: 2000,
      trailer: 'OtU0UBnWik4',
      watched: true,
      watchlist: false
    },
    {
      id: 11,
      title: '9½ Weeks',
      director: [
        'Adrian Lyne'
      ],
      genres: [
        'drama, romance'
      ],
      runtime: 112,
      year: 1986,
      decade: 1980,
      trailer: '8bNCMcQ_moo',
      watched: false,
      watchlist: false
    },
    {
      id: 12,
      title: 'A Clockwork Orange',
      director: [
        'Stanley Kubrick'
      ],
      genres: [
        'crime',
        'drama',
        'sci-fi'
      ],
      runtime: 136,
      year: 1971,
      decade: 1970,
      trailer: 'vN-1Mup0UI0',
      watched: true,
      watchlist: false
    },
    {
      id: 13,
      title: 'A Lonely Place to Die',
      director: [
        'Julian Gilbey'
      ],
      genres: [
        'adventure',
        'crime',
        'thriller'
      ],
      runtime: 99,
      year: 2011,
      decade: 2010,
      trailer: 'XP5g_QKv7Gw',
      watched: true,
      watchlist: false
    },
    {
      id: 14,
      title: 'A Most Violent Year',
      director: [
        'J.C. Chandor'
      ],
      genres: [
        'crime',
        'drama',
        'thriller'
      ],
      runtime: 125,
      year: 2014,
      decade: 2010,
      trailer: 'ySWXwXlXlQU',
      watched: true,
      watchlist: false
    },
    {
      id: 15,
      title: 'A Scanner Darkly',
      director: [
        'Richard Linklater'
      ],
      genres: [
        'animation',
        'crime',
        'drama'
      ],
      runtime: 100,
      year: 2006,
      decade: 2000,
      trailer: 'hkjDUERgCQw',
      watched: false,
      watchlist: false
    },
    {
      id: 16,
      title: 'A Serious Man',
      director: [
        'Joel Coen',
        'Ethan Coen'
      ],
      genres: [
        'comedy',
        'drama'
      ],
      runtime: 106,
      year: 2009,
      decade: 2000,
      trailer: 'mDKHWRbK2_Q',
      watched: false,
      watchlist: false
    },
    {
      id: 17,
      title: 'A Story of Violence',
      director: [
        'David Cronenberg'
      ],
      genres: [
        'action',
        'adventure',
        'sci-fi'
      ],
      runtime: 118,
      year: 2005,
      decade: 2000,
      trailer: '89oWVqLOXMw',
      watched: true,
      watchlist: false
    },
    {
      id: 18,
      title: 'Across the Universe',
      director: [
        'Julie Taymor'
      ],
      genres: [
        'drama',
        'fantasy',
        'history'
      ],
      runtime: 133,
      year: 2007,
      decade: 2000,
      trailer: 'spf7RULGNOU',
      watched: true,
      watchlist: false
    },
    {
      id: 19,
      title: 'Adaptation',
      director: [
        'Spike Jonze'
      ],
      genres: [
        'comedy',
        'drama'
      ],
      runtime: 114,
      year: 2002,
      decade: 2000,
      trailer: 'BMwOEkTmTyQ',
      watched: true,
      watchlist: false
    },
    {
      id: 20,
      title: 'Airplane!',
      director: [
        'Jim Abrahams',
        'David Zucker'
      ],
      genres: [
        'comedy'
      ],
      runtime: 88,
      year: 1980,
      decade: 1980,
      trailer: 'HMnVs287AJ4',
      watched: true,
      watchlist: false
    },
    {
      id: 21,
      title: 'Airplane II: The Sequel',
      director: [
        'Ken Finkleman'
      ],
      genres: [
        'comedy',
        'sci-Fi'
      ],
      runtime: 85,
      year: 1982,
      decade: 1980,
      trailer: '-O42Vu_GnSc',
      watched: false,
      watchlist: false
    },
    {
      id: 22,
      title: 'Akira',
      director: [
        'Katsuhiro Ôtomo'
      ],
      genres: [
        'animation',
        'action',
        'drama'
      ],
      runtime: 124,
      year: 1988,
      decade: 1980,
      trailer: 'FtPhrCTjMtQ',
      watched: true,
      watchlist: false
    },
    {
      id: 23,
      title: 'Alien',
      director: [
        'Ridley Scott'
      ],
      genres: [
        'horror',
        'sci-fi'
      ],
      runtime: 117,
      year: 1979,
      decade: 1970,
      trailer: 'jQ5lPt9edzQ',
      watched: true,
      watchlist: false
    },
    {
      id: 24,
      title: 'Aliens',
      director: [
        'James Cameron'
      ],
      genres: [
        'action',
        'adventure',
        'sci-fi'
      ],
      runtime: 137,
      year: 1986,
      decade: 1980,
      trailer: 'oSeQQlaCZgU',
      watched: true,
      watchlist: false
    },
    {
      id: 25,
      title: 'Alien: Resurrection',
      director: [
        'Jean Pierre Jeunet'
      ],
      genres: [
        'action',
        'horror',
        'sci-fi'
      ],
      runtime: 109,
      year: 1997,
      decade: 1990,
      trailer: 'vu1tVYGsJ1Q',
      watched: true,
      watchlist: false
    },
    {
      id: 26,
      title: 'Alien³',
      director: [
        'David Fincher'
      ],
      genres: [
        'action',
        'horror',
        'sci-fi'
      ],
      runtime: 114,
      year: 1992,
      decade: 1990,
      trailer: 'e45rAwndek8',
      watched: true,
      watchlist: false
    },
    {
      id: 27,
      title: 'Alien vs Predator',
      director: [
        'Paul W.S. Anderson'
      ],
      genres: [
        'action',
        'horror',
        'sci-fi'
      ],
      runtime: 101,
      year: 2004,
      trailer: 'Cld40qD7HcY',
      watched: true,
      watchlist: false
    },
    {
      id: 28,
      title: 'Aliens vs Predator: Requiem',
      director: [
        'Colin Strause',
        'Greg Strause'
      ],
      genres: [
        'action',
        'horror',
        'sci-fi'
      ],
      runtime: 94,
      year: 2007,
      decade: 2000,
      trailer: 'k_gBqL_YSU4',
      watched: true,
      watchlist: false
    },
    {
      id: 29,
      title: 'Almost Famous',
      director: [
        'Cameron Crowe'
      ],
      genres: [
        'adventure',
        'comedy',
        'drama'
      ],
      runtime: 122,
      year: 2000,
      decade: 2000,
      trailer: 'aQXh_AaJXaM',
      watched: true,
      watchlist: false
    },
    {
      id: 30,
      title: 'Amer',
      director: [
        'Hélène Cattet, Bruno Forzani'
      ],
      genres: [
        'horror',
        'thriller'
      ],
      runtime: 90,
      year: 2009,
      decade: 2000,
      trailer: 'kaEKIgHr1_0',
      watched: true,
      watchlist: false
    },
    {
      id: 31,
      title: 'American History X',
      director: [
        'Tony Kaye'
      ],
      genres: [
        'crime',
        'drama'
      ],
      runtime: 119,
      year: 1998,
      trailer: 'XfQYHqsiN5g',
      watched: false,
      watchlist: false
    },
    {
      id: 32,
      title: 'American Pie',
      director: [
        'Paul Weitz',
        'Chris Weitz'
      ],
      genres: [
        'comedy'
      ],
      runtime: 95,
      year: 1999,
      trailer: 'iUZ3Yxok6N8',
      watched: true,
      watchlist: false
    },
    {
      id: 33,
      title: 'American Pie 2',
      director: [
        'J.B. Rogers'
      ],
      genres: [
        'comedy'
      ],
      runtime: 108,
      year: 2001,
      trailer: 'cSGvEfL0qRM',
      watched: true,
      watchlist: false
    },
    {
      id: 34,
      title: 'American Pie The Wedding',
      director: [
        'Jesse Dylan'
      ],
      genres: [
        'comedy'
      ],
      runtime: 103,
      year: 2003,
      trailer: 'OcL2zUZpfMQ',
      watched: false,
      watchlist: false
    },
    {
      id: 35,
      title: 'American Pie: The Reunion',
      director: [
        'Jon Hurwitz, Hayden Schlossberg'
      ],
      genres: [
        'comedy'
      ],
      runtime: 113,
      year: 2012,
      trailer: '1akixU65dDY',
      watched: false,
      watchlist: false
    },
    {
      id: 36,
      title: 'American Psycho',
      director: [
        'Mary Harron'
      ],
      genres: [
        'crime',
        'drama'
      ],
      runtime: 101,
      year: 2000,
      trailer: '5YnGhW4UEhc',
      watched: true,
      watchlist: false
    },
    {
      id: 37,
      title: 'An American Werewolf in London',
      director: [
        'John Landis'
      ],
      genres: [
        'comedy',
        'horror'
      ],
      runtime: 97,
      year: 1981,
      trailer: 'Tfz9AhPnM8c',
      watched: true,
      watchlist: false
    },
    {
      id: 38,
      title: 'An Evening With Beverly Luff Linn',
      director: [
        'Jim Hosking'
      ],
      genres: [
        'comedy',
        'crime'
      ],
      runtime: 97,
      year: 2018,
      trailer: 'ABhh1HifqJY',
      watched: true,
      watchlist: false
    },
    {
      id: 39,
      title: 'Anchorman: The Legend of Ron Burgundy',
      director: [
        'Adam McKay'
      ],
      genres: [
        'comedy'
      ],
      runtime: 94,
      year: 2004,
      trailer: '-T3wnP91OnI',
      watched: true,
      watchlist: false
    },
    {
      id: 40,
      title: 'Anchorman 2: The Legend Continues',
      director: [
        'Adam McKay'
      ],
      genres: [
        'comedy'
      ],
      runtime: 119,
      year: 2013,
      trailer: 'Elczv0ghqw0',
      watched: true,
      watchlist: false
    },
    {
      id: 41,
      title: 'Animatrix',
      director: [
        'Peter Chung, Andrew R. Jones, Yoshiaki Kawajiri, Takeshi Koike, Mahiro Maeda, Kôji Morimoto, Shinichirô Watanabe'
      ],
      genres: [
        'animation',
        'action',
        'adventure'
      ],
      runtime: 102,
      year: 2003,
      trailer: '94fPVqJqBGA',
      watched: true,
      watchlist: false
    },
    {
      id: 42,
      title: 'Antiviral',
      director: [
        'Brandon Cronenberg'
      ],
      genres: [
        'horror',
        'sci-fi',
        'thriller'
      ],
      runtime: 108,
      year: 2012,
      trailer: 'XIZb50HiBCo',
      watched: true,
      watchlist: false
    },
    {
      id: 43,
      title: 'Any Given Sunday',
      director: [
        'Oliver Stone'
      ],
      genres: [
        'drama',
        'sport'
      ],
      runtime: 162,
      year: 1999,
      trailer: 'a3nGztzo6Dk',
      watched: true,
      watchlist: false
    },
    {
      id: 44,
      title: 'Apocalypse Now',
      director: [
        'Francis Ford Coppola'
      ],
      genres: [
        'drama',
        'war'
      ],
      runtime: 147,
      year: 1979,
      trailer: 'FTjG-Aux_yQ',
      watched: false,
      watchlist: false
    },
    {
      id: 45,
      title: 'As Above So Below',
      director: [
        'John Erick Dowdle'
      ],
      genres: [
        'horror',
        'mystery',
        'thriller'
      ],
      runtime: 93,
      year: 2014,
      trailer: 'Fq358xHbzN4',
      watched: true,
      watchlist: false
    },
    {
      id: 46,
      title: 'Atomic Blonde',
      director: [
        'David Leitch'
      ],
      genres: [
        'action',
        'mystery',
        'thriller'
      ],
      runtime: 115,
      year: 2018,
      trailer: 'yIUube1pSC0',
      watched: true,
      watchlist: false
    },
    {
      id: 47,
      title: 'Austin Powers in Goldmember',
      director: [
        'Jay Roach'
      ],
      genres: [
        'adventure',
        'comedy'
      ],
      runtime: 94,
      year: 2002,
      trailer: 'iBcIAuGqOJ0',
      watched: true,
      watchlist: false
    },
    {
      id: 48,
      title: 'Austin Powers: International Man of Mystery',
      director: [
        'Jay Roach'
      ],
      genres: [
        'adventure',
        'comedy'
      ],
      runtime: 94,
      year: 1997,
      trailer: '5vsANcS4Ml8',
      watched: true,
      watchlist: false
    },
    {
      id: 49,
      title: 'Austin Powers: The Spy Who Shagged Me',
      director: [
        'Jay Roach'
      ],
      genres: [
        'adventure',
        'comedy'
      ],
      runtime: 95,
      year: 1999,
      trailer: 'mYVb4OLk4NQ',
      watched: true,
      watchlist: false
    },
    {
      id: 50,
      title: 'Back to the Future',
      director: [
        'Robert Zemeckis'
      ],
      genres: [
        'adventure',
        'comedy',
        'sci-fi'
      ],
      runtime: 116,
      year: 1985,
      trailer: 'qvsgGtivCgs',
      watched: true,
      watchlist: false
    },
    {
      id: 51,
      title: 'Back to the Future Part II',
      director: [
        'Robert Zemeckis'
      ],
      genres: [
        'adventure',
        'comedy',
        'sci-fi'
      ],
      runtime: 116,
      year: 1989,
      trailer: 'MdENmefJRpw',
      watched: true,
      watchlist: false
    },
    {
      id: 52,
      title: 'Back to the Future Part III',
      director: [
        'Robert Zemeckis'
      ],
      genres: [
        'adventure',
        'comedy',
        'sci-fi'
      ],
      runtime: 118,
      year: 1990,
      trailer: '3C8c3EoEfw4',
      watched: true,
      watchlist: false
    },
    {
      id: 53,
      title: 'Bad Boys',
      director: [
        'Michael Bay'
      ],
      genres: [
        'action',
        'comedy',
        'crime'
      ],
      runtime: 118,
      year: 1995,
      trailer: 'Xm12NSa8jsM',
      watched: true,
      watchlist: false
    },
    {
      id: 54,
      title: 'Bad Boys II',
      director: [
        'Michael Bay'
      ],
      genres: [
        'action',
        'comedy',
        'crime'
      ],
      runtime: 147,
      year: 2003,
      trailer: 'UTNcOwQ2lRw',
      watched: true,
      watchlist: false
    },
    {
      id: 55,
      title: 'Barry Lyndon',
      director: [
        'Stanley Kubrick'
      ],
      genres: [
        'adventure',
        'drama',
        'history'
      ],
      runtime: 184,
      year: 1975,
      trailer: 'cwXa1n8jcNQ',
      watched: true,
      watchlist: false
    },
    {
      id: 56,
      title: 'Barton Fink',
      director: [
        'Joel Coen',
        'Ethan Coen'
      ],
      genres: [
        'comedy',
        'drama',
        'thriller'
      ],
      runtime: 116,
      year: 1991,
      trailer: 'kzBhNeQGwC0',
      watched: true,
      watchlist: false
    },
    {
      id: 57,
      title: 'Batman',
      director: [
        'Tim Burton'
      ],
      genres: [
        'action',
        'adventure'
      ],
      runtime: 126,
      year: 1989,
      trailer: 'dgC9Q0uhX70',
      watched: true,
      watchlist: false
    },
    {
      id: 58,
      title: 'Batman',
      director: [
        'Leslie H. Martinson'
      ],
      genres: [
        'adventure',
        'comedy',
        'crime'
      ],
      runtime: 105,
      year: 1966,
      trailer: 'vvY5MgOgDUw',
      watched: true,
      watchlist: false
    },
    {
      id: 59,
      title: 'Batman Begins',
      director: [
        'Christopher Nolan'
      ],
      genres: [
        'action',
        'adventure'
      ],
      runtime: 140,
      year: 2005,
      trailer: 'neY2xVmOfUM',
      watched: true,
      watchlist: false
    },
    {
      id: 60,
      title: 'Batman Returns',
      director: [
        'Tim Burton'
      ],
      genres: [
        'action',
        'crime',
        'fantasy'
      ],
      runtime: 126,
      year: 1992,
      trailer: 'TlbtLfWvFbo',
      watched: true,
      watchlist: false
    },
    {
      id: 61,
      title: 'Be Kind Rewind',
      director: [
        'Michel Gondry'
      ],
      genres: [
        'comedy'
      ],
      runtime: 102,
      year: 2008,
      trailer: 'Dko0wesoCRc',
      watched: true,
      watchlist: false
    },
    {
      id: 62,
      title: 'Bedazzled',
      director: [
        'Harold Ramis'
      ],
      genres: [
        'comedy',
        'fantasy'
      ],
      runtime: 93,
      year: 2000,
      trailer: '5xUnFbyqNr4',
      watched: true,
      watchlist: false
    },
    {
      id: 63,
      title: 'Before the Devil Knows You\'re Dead',
      director: [
        'Sidney Lumet'
      ],
      genres: [
        'crime',
        'drama',
        'thriller'
      ],
      runtime: 117,
      year: 2007,
      trailer: 'OSCUL6VXeSM',
      watched: true,
      watchlist: false
    },
    {
      id: 64,
      title: 'Being John Malkovich',
      director: [
        'Spike Jonze'
      ],
      genres: [
        'comedy',
        'drama',
        'fantasy'
      ],
      runtime: 112,
      year: 1999,
      trailer: '2UuRFr0GnHM',
      watched: true,
      watchlist: false
    },
    {
      id: 65,
      title: 'Betty Blue (37°2 le matin)',
      director: [
        'Jean-Jacques Beineix'
      ],
      genres: [
        'drama',
        'romance'
      ],
      runtime: 120,
      year: 1986,
      trailer: 'NiPTLfeGFUc',
      watched: true,
      watchlist: false
    },
    {
      id: 66,
      title: 'Beverly Hills Cop',
      director: [
        'Martin Brest'
      ],
      genres: [
        'action',
        'comedy',
        'crime'
      ],
      runtime: 105,
      year: 1984,
      trailer: '7aYmBrXyISA',
      watched: true,
      watchlist: false
    },
    {
      id: 67,
      title: 'Beverly Hills Cop II',
      director: [
        'Tony Scott'
      ],
      genres: [
        'action',
        'comedy',
        'crime'
      ],
      runtime: 100,
      year: 1987,
      trailer: 'rcrM8c9uuwM',
      watched: true,
      watchlist: false
    },
    {
      id: 68,
      title: 'Beverly Hills Cop III',
      director: [
        'John Landis'
      ],
      genres: [
        'action',
        'comedy',
        'crime'
      ],
      runtime: 104,
      year: 1994,
      trailer: 'kUjD5uKWxcg',
      watched: true,
      watchlist: false
    },
    {
      id: 69,
      title: 'Big Fish',
      director: [
        'Tim Burton'
      ],
      genres: [
        'adventure',
        'drama',
        'fantasy'
      ],
      runtime: 125,
      year: 2003,
      trailer: 'M3YVTgTl-F0',
      watched: false,
      watchlist: false
    },
    {
      id: 70,
      title: 'Birth',
      director: [
        'Jonathan Glazer'
      ],
      genres: [
        'drama',
        'fantasy',
        'mystery'
      ],
      runtime: 100,
      year: 2004,
      trailer: 'ZNX4-xyEzFM',
      watched: true,
      watchlist: false
    },
    {
      id: 71,
      title: 'Black Book',
      director: [
        'Paul Verhoeven'
      ],
      genres: [
        'drama',
        'thriller',
        'war'
      ],
      runtime: 145,
      year: 2006,
      trailer: '7Wlkb_qv064',
      watched: true,
      watchlist: false
    },
    {
      id: 72,
      title: 'Black Death',
      director: [
        'Christopher Smith'
      ],
      genres: [
        'action',
        'adventure',
        'drama'
      ],
      runtime: 102,
      year: 2010,
      trailer: 'sj3Jw1DLGpA',
      watched: false,
      watchlist: false
    },
    {
      id: 73,
      title: 'Black Sheep',
      director: [
        'Jonathan King'
      ],
      genres: [
        'comedy',
        'horror',
        'sci-Fi'
      ],
      runtime: 87,
      year: 2006,
      trailer: 'Hhck0SLcA6I',
      watched: true,
      watchlist: false
    },
    {
      id: 74,
      title: 'Black Swan',
      director: [
        'Darren Aronofsky'
      ],
      genres: [
        'drama',
        'thriller'
      ],
      runtime: 108,
      year: 2010,
      trailer: '5jaI1XOB-bs',
      watched: true,
      watchlist: false
    },
    {
      id: 75,
      title: 'Blade',
      director: [
        'Stephen Norrington'
      ],
      genres: [
        'action',
        'horror'
      ],
      runtime: 120,
      year: 1998,
      trailer: 'kaU2A7KyOu4',
      watched: true,
      watchlist: false
    },
    {
      id: 76,
      title: 'Blade II',
      director: [
        'Guillermo Del Toro'
      ],
      genres: [
        'action',
        'horror',
        'sci-fi'
      ],
      runtime: 117,
      year: 2002,
      trailer: 'vAUB7dcUn8o',
      watched: true,
      watchlist: false
    },
    {
      id: 77,
      title: 'Blade of the Immortal',
      director: [
        'Takashi Miike'
      ],
      genres: [
        'action',
        'drama',
        'fantasy'
      ],
      runtime: 117,
      year: 2017,
      trailer: '-M2F4-oTNF4',
      watched: true,
      watchlist: false
    },
    {
      id: 78,
      title: 'Blade Runner',
      director: [
        'Ridley Scott'
      ],
      genres: [
        'sci-fi',
        'thriller'
      ],
      runtime: 113,
      year: 1982,
      trailer: 'eogpIG53Cis',
      watched: true,
      watchlist: false
    },
    {
      id: 79,
      title: 'Blade Trinity',
      director: [
        'David S. Goyer'
      ],
      genres: [
        'action',
        'adventure',
        'horror'
      ],
      runtime: 113,
      year: 2004,
      trailer: 'fPcNbsW69Eg',
      watched: true,
      watchlist: false
    },
    {
      id: 80,
      title: 'Blades of Glory',
      director: [
        'Josh Gordon, Will Speck'
      ],
      genres: [
        'comedy',
        'sport'
      ],
      runtime: 113,
      year: 2007,
      trailer: 'YFE-6XlAAmE',
      watched: true,
      watchlist: false
    },
    {
      id: 81,
      title: 'Blue Valentine',
      director: [
        'Derek Cianfrance'
      ],
      genres: [
        'drama',
        'romance'
      ],
      runtime: 112,
      year: 2010,
      trailer: 'aILx69WrRhQ',
      watched: true,
      watchlist: false
    },
    {
      id: 82,
      title: 'Boy Meets Girl',
      director: [
        'Leos Carax'
      ],
      genres: [
        'drama',
        'romance'
      ],
      runtime: 100,
      year: 1984,
      trailer: 'uA-jdQIWGKA',
      watched: false,
      watchlist: false
    },
    {
      id: 83,
      title: 'Brazil',
      director: [
        'Terry Gilliam'
      ],
      genres: [
        'drama',
        'sci-fi'
      ],
      runtime: 132,
      year: 1985,
      trailer: 'ZKPFC8DA9_8',
      watched: false,
      watchlist: false
    },
    {
      id: 84,
      title: 'Breakfast at Tiffany\'s',
      director: [
        'Blake Edwards'
      ],
      genres: [
        'comedy',
        'drama',
        'romance'
      ],
      runtime: 115,
      year: 1961,
      trailer: '-XcLVQCDtbM',
      watched: false,
      watchlist: false
    },
    {
      id: 85,
      title: 'Brick',
      director: [
        'Rian Johnson'
      ],
      genres: [
        'action',
        'crime',
        'drama'
      ],
      runtime: 110,
      year: 2005,
      trailer: 'DzvbrhtvK2o',
      watched: false,
      watchlist: false
    },
    {
      id: 86,
      title: 'Catwoman',
      director: [
        'Pitof'
      ],
      genres: [
        'action',
        'adventure',
        'crime'
      ],
      runtime: 104,
      year: 2004,
      trailer: 'd6pJbjbRnAA',
      watched: false,
      watchlist: false
    },
    {
      id: 87,
      title: 'Chicago',
      director: [
        'Rob Marshall'
      ],
      genres: [
        'comedy',
        'crime',
        'musical'
      ],
      runtime: 113,
      year: 2002,
      trailer: '9EpaMmF9WVU',
      watched: false,
      watchlist: false
    },
    {
      id: 88,
      title: 'Creepshow',
      director: [
        'George A. Romero'
      ],
      genres: [
        'comedy',
        'fantasy',
        'horror'
      ],
      runtime: 120,
      year: 1982,
      trailer: 'owdnnaNs2RI',
      watched: false,
      watchlist: false
    },
    {
      id: 89,
      title: 'Dancer in the Dark',
      director: [
        'Lars von Trier'
      ],
      genres: [
        'crime',
        'drama',
        'musical'
      ],
      runtime: 140,
      year: 2000,
      trailer: '53vr9EiOH7g',
      watched: false,
      watchlist: false
    },
    {
      id: 90,
      title: 'Danger: Diabolik',
      director: [
        'Mario Bava'
      ],
      genres: [
        'action',
        'comedy',
        'crime'
      ],
      runtime: 105,
      year: 1968,
      trailer: 'jNyrLfODNyg',
      watched: false,
      watchlist: false
    },
    {
      id: 91,
      title: 'Dangerous Liaisons',
      director: [
        'Stephen Frears'
      ],
      genres: [
        'drama',
        'romance'
      ],
      runtime: 119,
      year: 1988,
      trailer: 'dO3U2dBwuWA',
      watched: false,
      watchlist: false
    },
    {
      id: 92,
      title: 'Double Dragon',
      director: [
        'James Yukich'
      ],
      genres: [
        'action',
        'adventure',
        'comedy'
      ],
      runtime: 96,
      year: 1994,
      trailer: 'SyoP025pzMY',
      watched: false,
      watchlist: false
    },
    {
      id: 93,
      title: 'Dracula 3D',
      director: [
        'Dario Argento'
      ],
      genres: [
        'horror',
        'romance',
        'thriller'
      ],
      runtime: 110,
      year: 2012,
      trailer: 'SfzwSfDXnAE',
      watched: false,
      watchlist: false
    },
    {
      id: 94,
      title: 'Eddie Murphy: Raw',
      director: [
        'Robert Townsend'
      ],
      genres: [
        'documentary',
        'comedy'
      ],
      runtime: 93,
      year: 1987,
      trailer: 'rZu7bYiXryg',
      watched: false,
      watchlist: false
    },
    {
      id: 95,
      title: 'Eden and After',
      director: [
        'Alain Robbe-Grillet'
      ],
      genres: [
        'drama'
      ],
      runtime: 93,
      year: 1970,
      trailer: 'n2w0njfHjq8',
      watched: false,
      watchlist: false
    },
    {
      id: 96,
      title: 'Eyes Without a Face',
      director: [
        'Georges Franju'
      ],
      genres: [
        'drama',
        'horror',
        'sci-fi'
      ],
      runtime: 90,
      year: 1960,
      trailer: 'IVfqvLxyC_E',
      watched: false,
      watchlist: false
    },
    {
      id: 97,
      title: 'Fame',
      director: [
        'Alan Parker'
      ],
      genres: [
        'drama',
        'music',
        'musical'
      ],
      runtime: 134,
      year: 1982,
      trailer: 'gUepLHaY760',
      watched: false,
      watchlist: false
    },
    {
      id: 98,
      title: 'Fear and Loathing in Las Vegas',
      director: [
        'Terry Gilliam'
      ],
      genres: [
        'adventure',
        'comedy',
        'drama'
      ],
      runtime: 118,
      year: 1998,
      trailer: 'UxSa74rkHJo',
      watched: false,
      watchlist: false
    },
    {
      id: 99,
      title: 'Friday the 13th',
      director: [
        'Steve Miner'
      ],
      genres: [
        'horror',
        'mystery',
        'thriller'
      ],
      runtime: 95,
      year: 1980,
      trailer: 'Xqqej9T2gqI',
      watched: false,
      watchlist: false
    },
    {
      id: 100,
      title: 'Friday the 13th (2009)',
      director: [
        'Marcus Nispel'
      ],
      genres: [
        'horror'
      ],
      runtime: 97,
      year: 2009,
      trailer: 'cCfO1aB8CIE',
      watched: true,
      watchlist: false
    },
    {
      id: 101,
      title: 'Friday the 13th Part II',
      director: [
        'Steve Miner'
      ],
      genres: [
        'horror',
        'mystery',
        'thriller'
      ],
      runtime: 87,
      year: 1981,
      trailer: 'Qqmj12n7yYc',
      watched: true,
      watchlist: false
    },
    {
      id: 102,
      title: 'Friday the 13th Part III',
      director: [
        'Steve Miner'
      ],
      genres: [
        'horror',
        'thriller'
      ],
      runtime: 95,
      year: 1982,
      trailer: 'if_LVGLMMws',
      watched: true,
      watchlist: false
    },
    {
      id: 103,
      title: 'Friday the 13th Part VI: Jason Lives',
      director: [
        'Tom McLoughlin'
      ],
      genres: [
        'horror',
        'thriller'
      ],
      runtime: 86,
      year: 1986,
      trailer: 'g5u75gMUcEI',
      watched: false,
      watchlist: false
    },
    {
      id: 104,
      title: 'Friday the 13th Part VII: The New Blood',
      director: [
        'John Carl Buechler'
      ],
      genres: [
        'horror',
        'thriller'
      ],
      runtime: 88,
      year: 1988,
      trailer: 'l7Hm9RNGo8A',
      watched: false,
      watchlist: false
    },
    {
      id: 105,
      title: 'Friday the 13th Part VIII: Jason Takes Manhattan',
      director: [
        'Rob Hedden'
      ],
      genres: [
        'adventure',
        'horror',
        'thriller'
      ],
      runtime: 100,
      year: 1989,
      trailer: 'uLMib7lDzpM',
      watched: false,
      watchlist: false
    },
    {
      id: 106,
      title: 'Friday the 13th: A New Beginning',
      director: [
        'Danny Steinmann'
      ],
      genres: [
        'horror',
        'mystery',
        'thriller'
      ],
      runtime: 92,
      year: 1985,
      trailer: 'sTqXh6KaY-Y',
      watched: false,
      watchlist: false
    },
    {
      id: 107,
      title: 'Friday the 13th: The Final Chapter',
      director: [
        'Joseph Zito'
      ],
      genres: [
        'horror',
        'thriller'
      ],
      runtime: 91,
      year: 1984,
      trailer: 'zBme5lOcZF4',
      watched: false,
      watchlist: false
    },
    {
      id: 108,
      title: 'From Dusk Till Dawn',
      director: [
        'Robert Rodriguez'
      ],
      genres: [
        'action',
        'crime',
        'horror'
      ],
      runtime: 108,
      year: 1996,
      trailer: 'jNuIn4T-CLk',
      watched: true,
      watchlist: false
    },
    {
      id: 109,
      title: 'Galaxy Quest',
      director: [
        'Dean Parisot'
      ],
      genres: [
        'adventure',
        'comedy',
        'sci-fi'
      ],
      runtime: 102,
      year: 1999,
      trailer: 'B34jbC43XzA',
      watched: false,
      watchlist: false
    },
    {
      id: 110,
      title: 'Get Shorty',
      director: [
        'Barry Sonnenfeld'
      ],
      genres: [
        'comedy',
        'crime',
        'thriller'
      ],
      runtime: 105,
      year: 1995,
      trailer: 'yNLaTtpovys',
      watched: false,
      watchlist: false
    },
    {
      id: 111,
      title: 'Ghost in the Shell: Innocence',
      director: [
        'Mamoru Oshii'
      ],
      genres: [
        'animation',
        'drama',
        'sci-fi'
      ],
      runtime: 100,
      year: 2004,
      trailer: 'LGJ74-dg3cQ',
      watched: false,
      watchlist: false
    },
    {
      id: 112,
      title: 'Grosse Point Blank',
      director: [
        'George Armitage'
      ],
      genres: [
        'action',
        'comedy',
        'crime'
      ],
      runtime: 107,
      year: 1997,
      trailer: 'Z4gTfl51_mo',
      watched: true,
      watchlist: false
    },
    {
      id: 113,
      title: 'Hail Caesar!',
      director: [
        'Joel Coen, Ethan Coen'
      ],
      genres: [
        'comedy',
        'drama',
        'music'
      ],
      runtime: 106,
      year: 2016,
      trailer: 'kMqeoW3XRa0',
      watched: false,
      watchlist: false
    },
    {
      id: 114,
      title: 'Hard Boiled',
      director: [
        'John Woo'
      ],
      genres: [
        'action',
        'crime',
        'thriller'
      ],
      runtime: 128,
      year: 1992,
      trailer: 'SqMPzcGQJzA',
      watched: false,
      watchlist: false
    },
    {
      id: 115,
      title: 'Heavenly Creatures',
      director: [
        'Peter Jackson'
      ],
      genres: [
        'biography',
        'crime',
        'drama'
      ],
      runtime: 99,
      year: 1994,
      trailer: 'kJ2yZjnPwQc',
      watched: false,
      watchlist: false
    },
    {
      id: 116,
      title: 'High Fidelity',
      director: [
        'Stephen Frears'
      ],
      genres: [
        'comedy',
        'drama',
        'music'
      ],
      runtime: 113,
      year: 2000,
      trailer: 'OA9gPtWDiww',
      watched: false,
      watchlist: false
    },
    {
      id: 117,
      title: 'Hot Shots!',
      director: [
        'Jim Abrahams'
      ],
      genres: [
        'action',
        'comedy'
      ],
      runtime: 84,
      year: 1991,
      trailer: 'WnnqI6EE0QM',
      watched: true,
      watchlist: false
    },
    {
      id: 118,
      title: 'Hot Shots! Part Deux',
      director: [
        'Jim Abrahams'
      ],
      genres: [
        'action',
        'comedy'
      ],
      runtime: 86,
      year: 1993,
      trailer: 'AsYzRBZbwvo',
      watched: true,
      watchlist: false
    },
    {
      id: 119,
      title: 'House of the Flying Daggers',
      director: [
        'Yimou Zhang'
      ],
      genres: [
        'action',
        'adventure',
        'drama'
      ],
      runtime: 119,
      year: 2004,
      trailer: 'Qio5eNeDfFQ',
      watched: false,
      watchlist: false
    },
    {
      id: 120,
      title: 'In the Mood for Love',
      director: [
        'Kar-Wai Wong'
      ],
      genres: [
        'drama',
        'romance'
      ],
      runtime: 98,
      year: 2004,
      trailer: 'dWVDZ98AFhI',
      watched: false,
      watchlist: false
    },
    {
      id: 121,
      title: 'Interview with the Vampire: The Vampire Chronicles',
      director: [
        'Neil Jordan'
      ],
      genres: [
        'drama',
        'horror'
      ],
      runtime: 123,
      year: 1994,
      trailer: 'sCmYN6TLd8A',
      watched: false,
      watchlist: false
    },
    {
      id: 122,
      title: 'Intorelable Cruelty',
      director: [
        'Joel Coen, Ethan Coen'
      ],
      genres: [
        'comedy',
        'crime',
        'romance'
      ],
      runtime: 100,
      year: 2003,
      trailer: 'kB15f50GMoE',
      watched: false,
      watchlist: false
    },
    {
      id: 123,
      title: 'Jade',
      director: [
        'William Friedkin'
      ],
      genres: [
        'crime',
        'drama',
        'thriller'
      ],
      runtime: 95,
      year: 1995,
      trailer: '9yQ1L97C9FU',
      watched: false,
      watchlist: false
    },
    {
      id: 124,
      title: 'Kiss of the Dragon',
      director: [
        'Chris Nahon'
      ],
      genres: [
        'action',
        'crime',
        'drama'
      ],
      runtime: 98,
      year: 2001,
      trailer: 'mFsWOVpUk70',
      watched: false,
      watchlist: false
    },
    {
      id: 125,
      title: 'Lady Vengeance',
      director: [
        'Chan-wook Park'
      ],
      genres: [
        'crime',
        'drama',
        'thriller'
      ],
      runtime: 115,
      year: 2005,
      trailer: 'kFvKF2LH0oo',
      watched: false,
      watchlist: false
    },
    {
      id: 126,
      title: 'Let the Right One In',
      director: [
        'Tomas Alfredson'
      ],
      genres: [
        'drama',
        'horror',
        'romance'
      ],
      runtime: 115,
      year: 2008,
      trailer: 'ICp4g9p_rgo',
      watched: false,
      watchlist: false
    },
    {
      id: 127,
      title: 'Lost in translation',
      director: [
        'Sofia Coppola'
      ],
      genres: [
        'drama'
      ],
      runtime: 102,
      year: 2003,
      trailer: 'RmYe_lTDgKA',
      watched: false,
      watchlist: false
    },
    {
      id: 128,
      title: 'Love',
      director: [
        'Gaspar Noé'
      ],
      genres: [
        'drama',
        'romance'
      ],
      runtime: 135,
      year: 2015,
      trailer: '-gr39IN_YIw',
      watched: false,
      watchlist: false
    },
    {
      id: 129,
      title: 'Love & Peace',
      director: [
        'Sion Sono'
      ],
      genres: [
        'comedy',
        'drama',
        'musical'
      ],
      runtime: 117,
      year: 2015,
      trailer: 'KNfYMUEJkkk',
      watched: false,
      watchlist: false
    },
    {
      id: 130,
      title: 'Love Exposure',
      director: [
        'Sion Sono'
      ],
      genres: [
        'action',
        'comedy',
        'drama'
      ],
      runtime: 237,
      year: 2008,
      trailer: '5Fxa5NuVrqU',
      watched: false,
      watchlist: false
    },
    {
      id: 131,
      title: 'Magnolia',
      director: [
        'Paul Thomas Anderson'
      ],
      genres: [
        'drama'
      ],
      runtime: 183,
      year: 1999,
      trailer: '5_IYTdrQVGY',
      watched: false,
      watchlist: false
    },
    {
      id: 132,
      title: 'Master and Commander. The Far Side of the World',
      director: [
        'Peter Weir'
      ],
      genres: [
        'action',
        'adventure',
        'drama'
      ],
      runtime: 138,
      year: 2003,
      trailer: 'qc_4wVzdmPU',
      watched: false,
      watchlist: false
    },
    {
      id: 133,
      title: 'Mayor of the Sunset Strip',
      director: [
        'George Hickenlooper'
      ],
      genres: [
        'documentary',
        'biography',
        'music'
      ],
      runtime: 94,
      year: 2003,
      trailer: 'YWcu0TaE2F4',
      watched: false,
      watchlist: false
    },
    {
      id: 134,
      title: 'Midnight in the Garden of Good and Evil',
      director: [
        'Clint Eastwood'
      ],
      genres: [
        'crime',
        'drama',
        'mystery'
      ],
      runtime: 155,
      year: 1999,
      trailer: 'bUvm4Yd4ebA',
      watched: false,
      watchlist: false
    },
    {
      id: 135,
      title: 'Mirrormask',
      director: [
        'Dave McKean'
      ],
      genres: [
        'adventure',
        'fantasy'
      ],
      runtime: 101,
      year: 2005,
      trailer: 'swrcKRVgeGI',
      watched: false,
      watchlist: false
    },
    {
      id: 136,
      title: 'Mr. X',
      director: [
        'Leos Carax'
      ],
      genres: [
        'drama',
        'romance'
      ],
      runtime: 134,
      year: 2012,
      trailer: 'pz2c-OP9yQo',
      watched: false,
      watchlist: false
    },
    {
      id: 137,
      title: 'Mystery Men',
      director: [
        'Kinka Usher'
      ],
      genres: [
        'action',
        'comedy',
        'fantasy'
      ],
      runtime: 121,
      year: 1999,
      trailer: 'Ozuwh-ofXK8',
      watched: false,
      watchlist: false
    },
    {
      id: 138,
      title: 'N. Took the Dice',
      director: [
        'Alain Robbe-Grillet'
      ],
      genres: [
        'drama',
        'horror'
      ],
      runtime: 89,
      year: 1971,
      trailer: '',
      watched: false,
      watchlist: false
    },
    {
      id: 139,
      title: 'Old School',
      director: [
        'Todd Phillips'
      ],
      genres: [
        'comedy'
      ],
      runtime: 88,
      year: 2003,
      trailer: 'VqtymOtKr48',
      watched: false,
      watchlist: false
    },
    {
      id: 140,
      title: 'Paris, Texas',
      director: [
        'Wim Wenders'
      ],
      genres: [
        'drama'
      ],
      runtime: 145,
      year: 1984,
      trailer: '9e590FeeGCM',
      watched: false,
      watchlist: false
    },
    {
      id: 141,
      title: 'Patlabor: The Movie',
      director: [
        'Mamoru Oshii'
      ],
      genres: [
        'animation',
        'action',
        'drama'
      ],
      runtime: 100,
      year: 1989,
      trailer: 'h2kynMzTqu4',
      watched: false,
      watchlist: false
    },
    {
      id: 142,
      title: 'Patlabor 2: The Movie',
      director: [
        'Mamoru Oshii'
      ],
      genres: [
        'animation',
        'action',
        'drama'
      ],
      runtime: 113,
      year: 1993,
      trailer: 'F4P8eOH89ow',
      watched: false,
      watchlist: false
    },
    {
      id: 143,
      title: 'Pi',
      director: [
        'Darren Aronofsky'
      ],
      genres: [
        'drama',
        'horror',
        'mystery'
      ],
      runtime: 84,
      year: 1998,
      trailer: 'r0SC582sJvE',
      watched: false,
      watchlist: false
    },
    {
      id: 144,
      title: 'Platoon',
      director: [
        'Oliver Stone'
      ],
      genres: [
        'drama',
        'war'
      ],
      runtime: 120,
      year: 1986,
      trailer: 'hGsyEkfjhQk',
      watched: false,
      watchlist: false
    },
    {
      id: 145,
      title: 'Powder Blue',
      director: [
        'Timothy Linh Bui'
      ],
      genres: [
        'drama'
      ],
      runtime: 106,
      year: 2009,
      trailer: 'Giy6eke2TUM',
      watched: false,
      watchlist: false
    },
    {
      id: 146,
      title: 'Rabbit Hole',
      director: [
        'John Cameron Mitchell'
      ],
      genres: [
        'drama'
      ],
      runtime: 91,
      year: 2010,
      trailer: '2vXjg_UApr4',
      watched: true,
      watchlist: false
    },
    {
      id: 147,
      title: 'Rabid',
      director: [
        'David Cronenberg'
      ],
      genres: [
        'horror',
        'sci-fi',
        'thriller'
      ],
      runtime: 91,
      year: 1977,
      trailer: 'Fr4ZLdhoQRY',
      watched: false,
      watchlist: false
    },
    {
      id: 148,
      title: 'Rent',
      director: [
        'Chris Columbus'
      ],
      genres: [
        'drama',
        'musical',
        'romance'
      ],
      runtime: 135,
      year: 2005,
      trailer: 'BH0MLyu6HjY',
      watched: false,
      watchlist: false
    },
    {
      id: 149,
      title: 'RoboCop (2014)',
      director: [
        'José Padilha'
      ],
      genres: [
        'action',
        'crime',
        'sci-fi'
      ],
      runtime: 135,
      year: 2014,
      trailer: 'xPLSpmAtc1Q',
      watched: false,
      watchlist: false
    },
    {
      id: 150,
      title: 'RoboCop 3',
      director: [
        'Fred Dekker'
      ],
      genres: [
        'action',
        'crime',
        'sci-fi'
      ],
      runtime: 104,
      year: 1993,
      trailer: 'VWBo9-YtSQs',
      watched: false,
      watchlist: false
    },
    {
      id: 151,
      title: 'School of Rock',
      director: [
        'Richard Linklater'
      ],
      genres: [
        'comedy',
        'music'
      ],
      runtime: 108,
      year: 2003,
      trailer: '3PsUJFEBC74',
      watched: false,
      watchlist: false
    },
    {
      id: 152,
      title: 'Serenity',
      director: [
        'Joss Whedon'
      ],
      genres: [
        'action',
        'adventure',
        'sci-fi'
      ],
      runtime: 119,
      year: 2005,
      trailer: 'KWP2ZVDPkMo',
      watched: false,
      watchlist: false
    },
    {
      id: 153,
      title: 'Shivers',
      director: [
        'David Cronenberg'
      ],
      genres: [
        'horror',
        'sci-fi'
      ],
      runtime: 87,
      year: 1975,
      trailer: 'mQxcOJ0yEoY',
      watched: false,
      watchlist: false
    },
    {
      id: 154,
      title: 'Shutter Island',
      director: [
        'Martin Scorsese'
      ],
      genres: [
        'mystery',
        'thriller'
      ],
      runtime: 138,
      year: 2010,
      trailer: 'YDGldPitxic',
      watched: false,
      watchlist: false
    },
    {
      id: 155,
      title: 'Sleeping Dogs',
      director: [
        'Bobcat Goldthwait'
      ],
      genres: [
        'comedy',
        'drama',
        'romance'
      ],
      runtime: 87,
      year: 2006,
      trailer: 'gK5SDqvUZWg',
      watched: false,
      watchlist: false
    },
    {
      id: 156,
      title: 'Slumdog Millionaire',
      director: [
        'Danny Boyle'
      ],
      genres: [
        'drama',
        'romance'
      ],
      runtime: 120,
      year: 2008,
      trailer: 'AIzbwV7on6Q',
      watched: false,
      watchlist: false
    },
    {
      id: 157,
      title: 'Southland Tales',
      director: [
        'Richard Kelly'
      ],
      genres: [
        'comedy',
        'drama',
        'mystery'
      ],
      runtime: 145,
      year: 2006,
      trailer: 'KDV8PRoY1OY',
      watched: false,
      watchlist: false
    },
    {
      id: 158,
      title: 'Sphere',
      director: [
        'Barry Levinson'
      ],
      genres: [
        'drama',
        'horror',
        'mystery'
      ],
      runtime: 145,
      year: 1998,
      trailer: 'GJvKLetIV20',
      watched: false,
      watchlist: false
    },
    {
      id: 159,
      title: 'Sunshine',
      director: [
        'Danny Boyle'
      ],
      genres: [
        'comedy'
      ],
      runtime: 107,
      year: 2007,
      trailer: '8v_8TyP-XDs',
      watched: false,
      watchlist: false
    },
    {
      id: 160,
      title: 'Swingers',
      director: [
        'Doug Liman'
      ],
      genres: [
        'comedy',
        'drama'
      ],
      runtime: 96,
      year: 1996,
      trailer: 'nWCct8XbQD0',
      watched: false,
      watchlist: false
    },
    {
      id: 161,
      title: 'Sympathy for Mr. Vengeance',
      director: [
        'Chan-wook Park'
      ],
      genres: [
        'action',
        'drama',
        'thriller'
      ],
      runtime: 121,
      year: 2002,
      trailer: 'jmdvQ5uqMF4',
      watched: false,
      watchlist: false
    },
    {
      id: 162,
      title: 'Team America: World Police',
      director: [
        'Trey Parker'
      ],
      genres: [
        'action',
        'comedy'
      ],
      runtime: 98,
      year: 2004,
      trailer: 'RPBX47zSktc',
      watched: false,
      watchlist: false
    },
    {
      id: 163,
      title: 'The Big Blue',
      director: [
        'Luc Besson'
      ],
      genres: [
        'adventure',
        'drama',
        'sport'
      ],
      runtime: 168,
      year: 1988,
      trailer: '82onGmBx9ZM',
      watched: false,
      watchlist: false
    },
    {
      id: 164,
      title: 'The Breakfast Club',
      director: [
        'John Hughes'
      ],
      genres: [
        'comedy',
        'drama'
      ],
      runtime: 97,
      year: 1985,
      trailer: 'BSXBvor47Zs',
      watched: false,
      watchlist: false
    },
    {
      id: 165,
      title: 'The Deer Hunter',
      director: [
        'Michael Cimino'
      ],
      genres: [
        'drama',
        'war'
      ],
      runtime: 183,
      year: 1978,
      trailer: 'g7q1SjVdsNk',
      watched: false,
      watchlist: false
    },
    {
      id: 166,
      title: 'The Faculty',
      director: [
        'Robert Rodriguez'
      ],
      genres: [
        'horror',
        'sci-fi'
      ],
      runtime: 104,
      year: 1998,
      trailer: 'E5sYFnZQQlY',
      watched: false,
      watchlist: false
    },
    {
      id: 167,
      title: 'The Immortal One',
      director: [
        'Alain Robbe-Grillet'
      ],
      genres: [
        'drama'
      ],
      runtime: 101,
      year: 1963,
      trailer: 'Ua-zYCL93zU',
      watched: false,
      watchlist: false
    },
    {
      id: 168,
      title: 'The Ladykillers',
      director: [
        'Joel Coen, Ethan Coen'
      ],
      genres: [
        'comedy',
        'crime',
        'thriller'
      ],
      runtime: 104,
      year: 2004,
      trailer: 'BVL6AjybCZ0',
      watched: false,
      watchlist: false
    },
    {
      id: 169,
      title: 'The Lord of the Rings',
      director: [
        'Ralph Bakshi'
      ],
      genres: [
        'animation',
        'adventure',
        'fantasy'
      ],
      runtime: 132,
      year: 1978,
      trailer: 'wPe6BNPUmI0',
      watched: false,
      watchlist: false
    },
    {
      id: 170,
      title: 'The Man Who Lies',
      director: [
        'Alain Robbe-Grillet'
      ],
      genres: [
        'drama',
        'war'
      ],
      runtime: 95,
      year: 1968,
      trailer: 'kxs8VfZr1FU',
      watched: false,
      watchlist: false
    },
    {
      id: 171,
      title: 'The Night Is Young',
      director: [
        'Leos Carax'
      ],
      genres: [
        'crime',
        'drama',
        'romance'
      ],
      runtime: 116,
      year: 1986,
      trailer: 'r_nJz2KTKIk',
      watched: false,
      watchlist: false
    },
    {
      id: 172,
      title: 'The Road',
      director: [
        'John Hillcoat'
      ],
      genres: [
        'adventure',
        'drama'
      ],
      runtime: 111,
      year: 2009,
      trailer: 'ODJueWpRhh4',
      watched: false,
      watchlist: false
    },
    {
      id: 173,
      title: 'The Wicker Man',
      director: [
        'Robin Hardy'
      ],
      genres: [
        'horror',
        'mystery',
        'thriller'
      ],
      runtime: 88,
      year: 1973,
      trailer: 'a-tDnavDCwI',
      watched: false,
      watchlist: false
    },
    {
      id: 174,
      title: 'The Wicker Man (2006)',
      director: [
        'Neil LaBute'
      ],
      genres: [
        'horror',
        'mystery',
        'thriller'
      ],
      runtime: 102,
      year: 2006,
      trailer: 'tlvqLOo6apM',
      watched: false,
      watchlist: false
    },
    {
      id: 175,
      title: 'Trick or Treat',
      director: [
        'Michael Dougherty'
      ],
      genres: [
        'comedy',
        'horror',
        'thriller'
      ],
      runtime: 82,
      year: 2007,
      trailer: 'ukylEvRE76w',
      watched: false,
      watchlist: false
    },
    {
      id: 176,
      title: 'Ultraviolet',
      director: [
        'Kurt Wimmer'
      ],
      genres: [
        'action',
        'adventure',
        'sci-fi'
      ],
      runtime: 88,
      year: 2006,
      trailer: '6XTLgHiQjqc',
      watched: false,
      watchlist: false
    },
    {
      id: 177,
      title: 'Upside Down',
      director: [
        'Juan Solanas'
      ],
      genres: [
        'drama',
        'fantasy',
        'romance'
      ],
      runtime: 109,
      year: 2012,
      trailer: 'XPdlrOP22NM',
      watched: false,
      watchlist: false
    },
    {
      id: 178,
      title: 'Versus',
      director: [
        'Ryûhei Kitamura'
      ],
      genres: [
        'action',
        'comedy',
        'drama'
      ],
      runtime: 119,
      year: 2000,
      trailer: 'wg7ljhZuJJc',
      watched: false,
      watchlist: false
    },
    {
      id: 179,
      title: 'Victoria',
      director: [
        'Sebastian Schipper'
      ],
      genres: [
        'crime',
        'drama',
        'romance'
      ],
      runtime: 138,
      year: 2015,
      trailer: 'Kp8wcV3GjW0',
      watched: false,
      watchlist: false
    },
    {
      id: 180,
      title: 'Wake Up Ron Burgundy',
      director: [
        'Adam McKay'
      ],
      genres: [
        'comedy'
      ],
      runtime: 93,
      year: 2004,
      trailer: 'D9G9V07rpBc',
      watched: false,
      watchlist: false
    },
    {
      id: 181,
      title: 'We are the best',
      director: [
        'Lukas Moodysson'
      ],
      genres: [
        'drama',
        'music'
      ],
      runtime: 102,
      year: 2013,
      trailer: 'Xtd5A9hnjaU',
      watched: false,
      watchlist: false
    },
    {
      id: 182,
      title: 'Wild Orchid',
      director: [
        'Zalman King'
      ],
      genres: [
        'drama',
        'romance'
      ],
      runtime: 105,
      year: 1989,
      trailer: 'Kc8IrlD9yw8',
      watched: false,
      watchlist: false
    },
    {
      id: 183,
      title: 'Witchcraft',
      director: [
        'Fabrizio Laurenti'
      ],
      genres: [
        'horror'
      ],
      runtime: 95,
      year: 1988,
      trailer: 'lcsxFcSZwbY',
      watched: false,
      watchlist: false
    },
    {
      id: 184,
      title: 'Zoolander 2',
      director: [
        'Ben Stiller'
      ],
      genres: [
        'comedy'
      ],
      runtime: 101,
      year: 2016,
      trailer: '4CL4LNWHegk',
      watched: false,
      watchlist: false
    },
    {
      id: 185,
      title: 'Redline',
      director: [
        'Takeshi Koike'
      ],
      genres: [
        'animation',
        'action',
        'romance'
      ],
      runtime: 102,
      year: 2009,
      trailer: 'xGOneMdjpw4',
      watched: true,
      watchlist: false
    },
    {
      id: 186,
      title: 'Roar',
      director: [
        'Noel Marshall'
      ],
      genres: [
        'adventure',
        'thriller'
      ],
      runtime: 102,
      year: 1981,
      trailer: 'cny_D50Rr44',
      watched: true,
      watchlist: false
    },
    {
      id: 187,
      title: 'The Mask',
      director: [
        'Chuck Russell'
      ],
      genres: [
        'comedy',
        'fantasy'
      ],
      runtime: 101,
      year: 1994,
      trailer: 'LZl69yk5lEY',
      watched: true,
      watchlist: false
    },
    {
      id: 188,
      title: 'Top Secret!',
      director: [
        'Jim Abrahams, David Zucker'
      ],
      genres: [
        'comedy',
        'music'
      ],
      runtime: 90,
      year: 1984,
      trailer: 'NTHInCY_baA',
      watched: true,
      watchlist: false
    },
    {
      id: 189,
      title: 'Withnail and I',
      director: [
        'Bruce Robinson'
      ],
      genres: [
        'comedy',
        'drama'
      ],
      runtime: 107,
      year: 1987,
      trailer: 'd9Z0DV33gAY',
      watched: true,
      watchlist: false
    },
    {
      id: 190,
      title: 'Conan the Barbarian',
      director: [
        'John Milius'
      ],
      genres: [
        'adventure',
        'fantasy'
      ],
      runtime: 129,
      year: 1982,
      trailer: 'LnqxZePU-PU',
      watched: true,
      watchlist: false
    },
    {
      id: 191,
      title: 'The Great Beauty',
      director: [
        'Paolo Sorrentino'
      ],
      genres: [
        'drama'
      ],
      runtime: 141,
      year: 2013,
      trailer: 'Dyt430YkQn0',
      watched: true,
      watchlist: false
    },
    {
      id: 192,
      title: 'Idle Hands',
      director: [
        'Rodman Flender'
      ],
      genres: [
        'comedy',
        'fantasy',
        'horror'
      ],
      runtime: 92,
      year: 1999,
      trailer: 'HcVrp--9UUc',
      watched: true,
      watchlist: false
    },
    {
      id: 193,
      title: 'In Fear',
      director: [
        'Jeremy Lovering'
      ],
      genres: [
        'horror',
        'mystery',
        'thriller'
      ],
      runtime: 85,
      year: 2013,
      trailer: 'D5ZbJgUOwwU',
      watched: true,
      watchlist: false
    },
    {
      id: 194,
      title: 'Indiana Jones and the Kingdom of the Crystal Skull',
      director: [
        'Steven Spielberg'
      ],
      genres: [
        'action',
        'adventure',
        'fantasy'
      ],
      runtime: 122,
      year: 2008,
      trailer: 'nMhfESAa4tw',
      watched: true,
      watchlist: false
    },
    {
      id: 195,
      title: 'Indiana Jones and the Last Crusade',
      director: [
        'Steven Spielberg'
      ],
      genres: [
        'action',
        'adventure',
        'fantasy'
      ],
      runtime: 127,
      year: 1989,
      trailer: 'a6JB2suJYHM',
      watched: true,
      watchlist: false
    },
    {
      id: 196,
      title: 'Indiana Jones and the Temple of Doom',
      director: [
        'Steven Spielberg'
      ],
      genres: [
        'action',
        'adventure'
      ],
      runtime: 118,
      year: 1984,
      trailer: 'QyJxzrq3f14',
      watched: true,
      watchlist: false
    },
    {
      id: 197,
      title: 'Inherent Vice',
      director: [
        'Paul Thomas Anderson'
      ],
      genres: [
        'comedy',
        'crime',
        'drama'
      ],
      runtime: 148,
      year: 2014,
      trailer: 'wZfs22E7JmI',
      watched: true,
      watchlist: false
    },
    {
      id: 198,
      title: 'Inside Llewyn Davis',
      director: [
        'Ethan Coen, Joel Coen'
      ],
      genres: [
        'drama',
        'music'
      ],
      runtime: 104,
      year: 2013,
      trailer: 'VuQ8pz-5WLY',
      watched: true,
      watchlist: false
    },
    {
      id: 199,
      title: 'Jason Goes to Hell: The Final Friday',
      director: [
        'Adam Marcus'
      ],
      genres: [
        'fantasy',
        'horror',
        'thriller'
      ],
      runtime: 87,
      year: 1993,
      trailer: 'CSQXPQKxlSI',
      watched: true,
      watchlist: false
    },
    {
      id: 200,
      title: 'Jason X',
      director: [
        'James Isacc'
      ],
      genres: [
        'action',
        'horror',
        'sci-fi'
      ],
      runtime: 91,
      year: 2001,
      trailer: '4KFWT4WUMCw',
      watched: true,
      watchlist: false
    }
  ];


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
        <span id="${film.id}" class="film-trailer" data-trailer="${film.trailer}">Watch trailer</span>
      </li>
    `    
  }).join("");

  document.getElementById("results").style.display = "block";
  document.getElementById("results").innerHTML = getSpelling(films.length);
}

function searchByProperty(field){
  var item = globalSearch[field];
  var validProperties = [];
  var getProperties = Object.keys(item).filter(key => (item[key]) === true);
  return getProperties;
}

function filterYear(films, low, high){
  return films.filter(film => film.year >= low && film.year <= high + 9);
}

function getFilmList(films) {
  return (globalSearch.watched ? films : films.filter(film => film.watched === false));
}

function filterByRuntime(films){
  return films.filter(film => film.runtime <= globalSearch.runtime);
}

function filterByDecade(films){
    return filterYear(films,globalSearch.decade.minDecade,globalSearch.decade.maxDecade);
}

function filterByGenre(films,genres){
  return films.filter(film => film["genres"].some(f => genres.includes(f)));
}

Array.min = function( array ){
    return Math.min.apply( Math, array );
};
Array.max = function( array ){
    return Math.max.apply( Math, array );
};

var filmYears = data.map(film => film.year);
var getOldestDecade = Math.floor(Array.min(filmYears)/10) * 10;
var getNewestDecade = Math.floor(Array.max(filmYears)/10) * 10;
var decadeIterations = ((getNewestDecade - getOldestDecade) / 10);

var decadeRange = [];
var newDecade;

for (i = 0;i <= decadeIterations;i ++){
    newDecade = getOldestDecade + (i * 10);
    decadeRange.push(newDecade);
}

function generateDecades(range){ // Calculate the oldest and newest year of our database and generate the decades of our page based on these data
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

var genres = document.querySelector("#genres");
var decades = document.querySelector("#decades");
var matches = document.querySelectorAll("input[type='checkbox']");
var runtimes = document.querySelector("#times");
var records;

function getSpelling(records) {
  if (records === 1){
    return `<p>There is ${records} film that match your search.</p>`
  } else if (records > 1){
    return `<p>There are ${records} films that match your search.</p>`;
  } 
  return `<p>Sorry, we don't have any films that match your search.</p>`;
}

function convertTime(time){
  var hours = time / 60;
  if (time < 60){
    return `${time}mins`;
  } 

  var fullTime = ((time % 60) > 0) ? `${Math.floor(hours)}h ${(time % 60)}mins` : `${hours}h`;
  return fullTime;
}

document.querySelector("#watched").addEventListener("click",function(){ 
  globalSearch.watched = !globalSearch.watched; // Toggle the previously watched checkbox to filter the results
  var filteredFilms;

  if (globalSearch.runtime != false){ // Filter the original database by runtime if there's one set 
    filteredFilms = filterByRuntime(data);
  } else {
    filteredFilms = data;
  }
  
  if (Object.keys(globalSearch.genres).length > 0){ // Filter by selected genres
    var selectedGenres = searchByProperty("genres");
    filteredFilms = filterByGenre(filteredFilms,selectedGenres);
  }

  // filteredFilms = filterByDecade(filteredFilms) // Filter by decade
  // filteredFilms = getFilmList(filterByDecade(filteredFilms)); // Fitler by watched previously or not
  filteredFilms = filterYear(getFilmList(filterByDecade(filteredFilms)),globalSearch.decade.minDecade,globalSearch.decade.maxDecade);  // Filter films by decade range

  renderFilms(filteredFilms);

});

document.querySelector("#times").addEventListener("click",function(){
  globalSearch.runtime = event.target.getAttribute('data-runtime');
  var filteredFilms = filterByRuntime(data);

  if (Object.keys(globalSearch.genres).length > 0){ // Filter by selected genres
    var selectedGenres = searchByProperty("genres");
    filteredFilms = filterByGenre(filteredFilms,selectedGenres);
  }

  // filteredFilms = filterByDecade(filteredFilms) // Filter by decade
  // filteredFilms = getFilmList(filteredFilms); // Fitler by watched previously or not
  // filteredFilms = filterYear(filteredFilms,globalSearch.decade.minDecade,globalSearch.decade.maxDecade);  // Filter films by decade range

  filteredFilms = filterYear(getFilmList(filterByDecade(filteredFilms)),globalSearch.decade.minDecade,globalSearch.decade.maxDecade);  // Filter films by decade range
  renderFilms(filteredFilms);

});

document.querySelector("#min-decade").addEventListener("change",function(event){
  if (parseInt(event.target.value) > globalSearch.decade.maxDecade){ 
    globalSearch.decade.maxDecade = parseInt(event.target.value);
    document.querySelector("#max-decade").selectedIndex = -1;
    document.querySelector("#max-decade").selectedIndex = document.querySelector("#min-decade").selectedIndex;
  }

  globalSearch.decade.minDecade = parseInt(event.target.value);

  var filteredFilms = filterByDecade(data); // Filter by decade

  if (globalSearch.runtime != false){ // Filter the original database by runtime if there's one set 
    filteredFilms = filterByRuntime(data);
  } 

  if (Object.keys(globalSearch.genres).length > 0){ // Filter by selected genres
    var selectedGenres = searchByProperty("genres");
    filteredFilms = filterByGenre(filteredFilms,selectedGenres);
  }

  filteredFilms = filterYear(getFilmList(filteredFilms),globalSearch.decade.minDecade,globalSearch.decade.maxDecade);  // Filter films by decade range

  renderFilms(filteredFilms);
});

document.querySelector("#max-decade").addEventListener("change",function(event){
  function filterByDecades(){
    if (parseInt(event.target.value) < globalSearch.decade.minDecade){
    globalSearch.decade.maxDecade = parseInt(event.target.value);
    event.target.selectedIndex = -1;
    document.querySelector("#max-decade").selectedIndex = document.querySelector("#min-decade").selectedIndex;
  }

  globalSearch.decade.maxDecade = parseInt(event.target.value); 
  
  if (globalSearch.runtime != false){ // Filter the original database by runtime if there's one set 
    filteredFilms = filterByRuntime(data);
  } else {
    filteredFilms = data;
  }

  if (Object.keys(globalSearch.genres).length > 0){ // Filter by selected genres
    var selectedGenres = searchByProperty("genres");
    filteredFilms = filterByGenre(filteredFilms,selectedGenres);
  }

  // filteredFilms = filterByDecade(filteredFilms) // Filter by decade
  // filteredFilms = getFilmList(filterByDecade(filteredFilms)); // Fitler by watched previously or not
  filteredFilms = filterYear(getFilmList(filterByDecade(filteredFilms)),globalSearch.decade.minDecade,globalSearch.decade.maxDecade);  // Filter films by decade range 

  renderFilms(filteredFilms);
  }

  filterByDecades();
});


// Filter by time and genres
document.querySelector("#genres").addEventListener("change", function (event){
  var checkbox = event.target;
  globalSearch.genres[checkbox.value] = checkbox.checked;
  var selectedGenres = searchByProperty("genres");
  var filteredFilms;

  if (globalSearch.runtime != false){ // Filter the original database by runtime if there's one set 
    filteredFilms = filterByRuntime(data);
    console.log("runtime",filteredFilms.length);
  } else {
    filteredFilms = data;
  }

  filteredFilms= filterByGenre(filteredFilms,selectedGenres);
  filteredFilms = filterYear(getFilmList(filterByDecade(filteredFilms)),globalSearch.decade.minDecade,globalSearch.decade.maxDecade);  // Filter films by decade range 

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
  var clicked = event.target;
  if (clicked.hasAttribute('data-trailer')){ // detect click on watch trailer ctas
    watchTrailer(clicked.getAttribute("data-trailer"));
  }

  if (clicked.id == 'trailer-full-screen'){ // detect click on trailer overlay mode 
      var el = document.querySelector("#trailer-full-screen");
      el.parentNode.removeChild(el);
      return false;
  };
});

const showAll = () => {
  document.getElementById("films").innerHTML = data.map(function(film){
  var genres = film.genres.join(", ");
  var fullTime = convertTime(film.runtime);
  return `
    <li class="col-md-4">
      <p><span>Title:</span> ${film.title}</p>
      <p><span>Year:</span> ${film.year}</p>
      <p class="film-director"><span>Directed by:</span> ${film.director}</p>
      <p class="film-genre"><span>Genres:</span> ${genres}</p>
      <p class="film-runtime"><span>Runtime:</span> ${fullTime}</p>
      <span id="${film.id}" class="film-trailer" data-trailer="${film.trailer}">Watch trailer</span>
    </li>
  `    
  }).join("");

  document.getElementById("results").style.display = "block";
  document.getElementById("results").innerHTML = `<p>There are ${data.length} films on your library.</p>`;
}

showAll();