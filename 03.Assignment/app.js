
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



