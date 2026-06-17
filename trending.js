const trendingMovies = [
{
    title: "Avatar 3: Fire and Ash",
    year: "2026",
    image: "https://via.placeholder.com/220x320?text=Avatar+3",
    rating: "9.2 ⭐"
},
{
    title: "The Batman Part II",
    year: "2026",
    image: "https://via.placeholder.com/220x320?text=Batman+2",
    rating: "8.9 ⭐"
},
{
    title: "Spider-Man: Brand New Day",
    year: "2026",
    image: "https://via.placeholder.com/220x320?text=Spider-Man",
    rating: "9.0 ⭐"
},
{
    title: "Dune: Messiah",
    year: "2026",
    image: "https://via.placeholder.com/220x320?text=Dune+Messiah",
    rating: "8.8 ⭐"
},
{
    title: "Avengers: Doomsday",
    year: "2026",
    image: "https://via.placeholder.com/220x320?text=Avengers",
    rating: "9.5 ⭐"
},
{
    title: "Mission Impossible 8",
    year: "2026",
    image: "https://via.placeholder.com/220x320?text=MI+8",
    rating: "8.7 ⭐"
}
];

const trendingContainer = document.getElementById("trending");

trendingMovies.forEach(movie => {
    trendingContainer.innerHTML += `
        <div class="movie trending-card">
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.year}</p>
            <p>${movie.rating}</p>
        </div>
    `;
});