const API_KEY = "395d621d";

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