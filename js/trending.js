const trendingContainer = document.getElementById("trending");

const trendingMovies = [

    "Avengers",

    "Batman",

    "Spider-Man",

    "Joker",

    "Interstellar",

    "Inception"

];

async function getTrendingMovies() {

    trendingContainer.innerHTML = "";

    for (let movieName of trendingMovies) {

        try {

            const response = await fetch(

                `https://www.omdbapi.com/?apikey=${API_KEY}&t=${movieName}`

            );

            const data = await response.json();

            if (data.Response === "True") {

                const movieDiv = document.createElement("div");

                movieDiv.classList.add("movie");

                movieDiv.innerHTML = `

                    <img src="${data.Poster}" alt="${data.Title}">

                    <h3>${data.Title}</h3>

                    <p>⭐ ${data.imdbRating}</p>

                `;

                trendingContainer.appendChild(movieDiv);

            }

        }

        catch (error) {

            console.log(error);

        }

    }

}

getTrendingMovies();//Trending movies
