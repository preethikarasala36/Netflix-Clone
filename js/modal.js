const modal = document.getElementById("movieModal");

const movieDetails = document.getElementById("movieDetails");

const closeBtn = document.getElementById("closeBtn");


// Movie details show cheyadaniki function

function openModal(movie) {

    movieDetails.innerHTML = `

        <img src="${movie.Poster}" alt="${movie.Title}">

        <h2>${movie.Title}</h2>

        <p><strong>Year:</strong> ${movie.Year}</p>

        <p><strong>IMDb Rating:</strong> ⭐ ${movie.imdbRating}</p>

        <p><strong>Genre:</strong> ${movie.Genre}</p>

        <p><strong>Plot:</strong> ${movie.Plot}</p>

    `;

    modal.style.display = "block";

}


// Close button click

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});


// Modal outside click

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});