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



const moviesContainer = document.getElementById("movies");



movies.forEach(movie => {

    const movieCard = document.createElement("div");

    movieCard.classList.add("movie");



    movieCard.innerHTML = `

        <img src="${movie.image}" alt="${movie.title}">

        <h3>${movie.title}</h3>

        <p>⭐ Rating: ${movie.rating}</p>

    `;



    moviesContainer.appendChild(movieCard);

});//movie cards and API integrationgu