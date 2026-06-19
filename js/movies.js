<<<<<<< HEAD
const API_KEY = "395d621d";
=======
// movies.js
// Popular Movies Data

const movies = [

    {
        title: "Avengers: Endgame",
        image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        rating: "8.4"
    },

    {
        title: "Inception",
        image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        rating: "8.8"
    },

    {
        title: "Interstellar",
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        rating: "8.7"
    },

    {
        title: "Joker",
        image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        rating: "8.4"
    },

    {
        title: "Spider-Man: No Way Home",
        image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        rating: "8.2"
    },

    {
        title: "The Batman",
        image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        rating: "7.9"
    }

];

>>>>>>> c68728f1e1ce9968cb529b018ed4377075514446

const API_URL =
`https://www.omdbapi.com/?apikey=${API_KEY}&s=movie`;

const moviesContainer = document.getElementById("movies");

async function getMovies() {

    try {

        const response = await fetch(API_URL);

        const data = await response.json();

        displayMovies(data.Search);

    }

    catch(error) {

        console.log("Error:", error);

    }

}

function displayMovies(movies) {

    moviesContainer.innerHTML = "";

    movies.forEach(movie => {

        const movieDiv = document.createElement("div");

        movieDiv.classList.add("movie");

        movieDiv.innerHTML = `

            <img src="${movie.Poster}" alt="${movie.Title}">

            <h3>${movie.Title}</h3>

            <p>${movie.Year}</p>

        `;
movieDiv.addEventListener("click", async () => {

    const response = await fetch(

        `https://www.omdbapi.com/?apikey=${API_KEY}&t=${movie.Title}`

    );

    const data = await response.json();

    openModal(data);

});
        moviesContainer.appendChild(movieDiv);

    });

}

getMovies();