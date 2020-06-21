# What to Watch vjs (Vanilla JavaScript)
This is a small tool to help the users choosing what film to watch based on various filters: runtime, genre and decade. All these genres can be combined if the users want to.

# Set Up
All the files needed to run (HTML, JavaScript and CSS with the JSON database url) are already provided in the repository. If the JSON file with the database of the films is replaced with other with the data in the same format all the functionalities should work without the need of any adjustments. 

# User Journey
All the filters (except the expanded genres) are available to the users from the beginning. The order is as follows, watched, runtime, genres and decades.

# Filter by Watched
It allows the users to hide films where the watched property is set true, on first load all films are visible so toggle this filter will hide the watched films.

# Filter by Runtime
It allows the users to filter films based on different runtimes: 1h 30 minutes, 2h, 2h 30 minutes, 3h or "All the time in the world". By default it's set to "All the time in the world" which is actually the highest runtime of all the films on the database, calculated on the JavaSCript file.
Clicking on any of the other filters will show films when the runtime is lesser or equal than the selected option. E.g.: If a film is 91 minutes long you'll need to select 2h to see it.

# Filter by Genre
It allows the users the filter films based on their favourite genres, the ones I considered more common: action, comedy, drama, horror and sci-fi are visible from the start and all the rest are visible when the users click on 
"See all genres". The way the filter works is that the films need to have at least one of the selected genres so they don't to have all the selected genres. E.g.: if the users select action and comedy the films can have either action, comedy or both.

# Filter by Decade
It allows the users to narrow the results to a determined time frame, e.g.: dramas from 70s or horror films from 80s.

# Results
Every time the users interact with the filters the results area will update with the matches.

# Night theme
If the users are using the page in low light conditions they can toggle the night theme which would improve their experience.

# Tools used
JavaScript (ES6), HTML5 and CSS3. 

# JavaScript
In order to optimise the experience JavaScript was used to convert the runtimes from minutes to hours and minutes to make it easier for the users when reading the film cards.
The arrays that contain the extraGenres and decades are dynamically generated based on the information obtained from the JSON file thus ensuring they're always up to date.
