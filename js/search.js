const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", async () => {

    const query = searchInput.value.trim();

    if (query === "") {

        getMovies(); // movies.js lo unna function ni call chesthundi

        return;

    }

    try {

        const response = await fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
        );

        const data = await response.json();

        moviesContainer.innerHTML = "";

        if (data.Response === "True") {

            data.Search.forEach(movie => {

                const movieDiv = document.createElement("div");

                movieDiv.classList.add("movie");

                movieDiv.innerHTML = `

                    <img src="${movie.Poster}" alt="${movie.Title}">

                    <h3>${movie.Title}</h3>

                    <p>${movie.Year}</p>

                `;

                moviesContainer.appendChild(movieDiv);

            });

        }

        else {

            moviesContainer.innerHTML =

            `<h3>No movies found</h3>`;

        }

    }

    catch(error) {

        console.log("Error:", error);

    }

});// search funnctionality