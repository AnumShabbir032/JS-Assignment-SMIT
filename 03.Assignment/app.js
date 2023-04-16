
// Define an array of movie objects with properties for title, genre, rating, and image
const movies = [
  {
    title: "The Dark Knight",
    genre: "action",
    rating: 5,
    image: "./images/TheDarkKnight.jpg",
    releaseYear: 2008
  },
  {
    title: "Bridesmaids",
    genre: "comedy",
    rating: 4,
    image: "./images/Bridesmaids.jpg",
    releaseYear: 1994
  },
  {
    title: "The Shawshank Redemption",
    genre: "drama",
    rating: 5,
    image: "./images/The ShashankRedemption.jpg",
    releaseYear: 1994
  },
  {
    title: "The Exorcist",
    genre: "horror",
    rating: 4,
    image: "./images/The Exorcist.jpg",
    releaseYear: 1994
  },
  {
    title: "Blade Runner",
    genre: "sci-fi",
    rating: 4,
    image: "./images/Blade Runner.jpg",
    releaseYear: 2008
  }, {
    title: "The Godfather",
    genre: "crime",
    rating: 5,
    image: "./images/TheGodfather 1.jpg",
    releaseYear: 1972
  },
  {
    title: "The Godfather: Part II",
    genre: "crime",
    rating: 5,
    releaseYear: 1974,
    image: "./images/TheGodfather.jpg",
  },
  {
    title: "12 Angry Men",
    genre: "drama",
    rating: 4,
    releaseYear: 1957,
    image: "./images/12AngryMen.jpg",
  }, {
    title: "The Lord of the Rings: The Return of the King",
    genre: "action",
    rating: 4,
    releaseYear: 2003,
    image: "./images/Theking.jpg",
  },
  {
    title: "The Good, the Bad and the Ugly",
    genre: "action",
    rating: 5,
    releaseYear: 1966,
    image: "./images/thegood.jpg",
  },
  {
    title: "Fight Club",
    genre: "drama",
    rating: 4,
    releaseYear: 1999,
    image: "./images/fightclub.jpg",
  },



];

// Define a function to recommend movies based on user preferences
function recommendMovies() {
  // Get the user's preferences for genre and rating
  const genre = document.getElementById("genre").value;
  const rating = parseInt(document.getElementById("rating").value);
  const releaseYear = document.getElementById("year").value;

  // Filter the movies array to only include movies that match the user's preferences
  const recommendedMovies = movies.filter(function (movie) {
    return (movie.genre === genre && movie.rating >= rating && movie.releaseYear == releaseYear);
  });

  // Display the recommended movies in the movie list
  const movieList = document.querySelector("#movie-list ul");
  movieList.innerHTML = "";

  if (recommendedMovies.length > 0) {
    recommendedMovies.forEach(function (movie) {
      const li = document.createElement("li");

      const title = document.createElement("h3");
      title.textContent = movie.title;
      li.appendChild(title);
      
      const p = document.createElement("p")
      p.textContent = movie.releaseYear;
      li.appendChild(p);

      const image = document.createElement("img");
      image.src = movie.image;
      li.appendChild(image);

      movieList.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "No movies found that match your preferences.";
    movieList.appendChild(li);
  }
}




  // // Array of movie objects
  // let movies = [
  //   { title: "The Shawshank Redemption", genre: "Drama", rating: 9.3, releaseYear: 1994 },
  //   { title: "The Godfather", genre: "Crime", rating: 9.2, releaseYear: 1972 },
  //   { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
  //   { title: "The Godfather: Part II", genre: "Crime", rating: 9.0, releaseYear: 1974 },
  //   { title: "12 Angry Men", genre: "Drama", rating: 8.9, releaseYear: 1957 },
  //   { title: "Schindler's List", genre: "Biography", rating: 8.9, releaseYear: 1993 },
  //   { title: "The Lord of the Rings: The Return of the King", genre: "Action", rating: 8.9, releaseYear: 2003 },
  //   { title: "Pulp Fiction", genre: "Crime", rating: 8.9, releaseYear: 1994 },
  //   { title: "The Good, the Bad and the Ugly", genre: "Western", rating: 8.8, releaseYear: 1966 },
  //   { title: "Fight Club", genre: "Drama", rating: 8.8, releaseYear: 1999 },
  // ];

  // // Get DOM elements
  // const genreSelect = document.getElementById("genre-select");
  // const ratingSelect = document.getElementById("rating-select");
  // const yearSelect = document.getElementById("year-select");
  // const movieList = document.getElementById("movie-list");

  // // Event listener for when the user submits the form
  // document.getElementById("form").addEventListener("submit", function (event) {
  //   event.preventDefault(); // Prevent default form behavior (i.e., page refresh)

  //   // Get user preferences
  //   const selectedGenre = genreSelect.value;
  //   const selectedRating = ratingSelect.value;
  //   const selectedYear = yearSelect.value;

  //   // Filter movies based on user preferences
  //   const filteredMovies = filterMovies(selectedGenre, selectedRating, selectedYear);

  //   // Display filtered movies
  //   displayMovies(filteredMovies);
  // });

  // // Function to filter movies based on user preferences
  // function filterMovies(genre, rating, year) {
  //   return movies.filter(function (movie) {
  //     return (genre === "All" || movie.genre === genre)
  //       && (rating === "All" || movie.rating >= rating)
  //       && (year === "All" || movie.releaseYear == year);
  //   });
  // }

  // // Function to display movies on the user interface
  // function displayMovies(movies) {
  //   // Clear current movie list
  //   movieList.innerHTML = "";

  //   // If no movies match the user's preferences, display a message
  //   if (movies.length === 0) {
  //     const noMovies = document.createElement("p");
  //     noMovies.textContent = "No movies match your preferences.";
  //     movieList.appendChild(noMovies);
  //     return;
  //   }

  //   // Display each movie as a list item
  //   movies.forEach(function (movie) {
  //     const listItem = document.createElement("li");
  //     listItem.textContent = movie.title;
  //     movieList.appendChild(listItem);
  //   });
  // }
