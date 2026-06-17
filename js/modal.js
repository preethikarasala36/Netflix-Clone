// Get modal elements

const modal = document.getElementById("movieModal");

const movieDetails = document.getElementById("movieDetails");

const closeBtn = document.getElementById("closeBtn");



// Open Modal Function

function openModal(movie) {

    modal.style.display = "block";


    movieDetails.innerHTML = `

        <img
        src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
        alt="${movie.title}">

        <h2>${movie.title}</h2>

        <p>

        <strong>Rating :</strong>

        ⭐ ${movie.vote_average}

        </p>

        <p>

        <strong>Release Date :</strong>

        ${movie.release_date}

        </p>

        <br>

        <p>

        ${movie.overview}

        </p>

    `;

}



// Close Modal

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});




// Close when clicking outside modal

window.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.style.display = "none";

    }

});