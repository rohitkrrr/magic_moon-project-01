let header = document.querySelector("header");

window.addEventListener("scroll", () => {
	header.classList.toggle("shadow", window.scrollY > 0);
});

// responsive
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
	menu.classList.toggle("bx-x");
	navbar.classList.toggle("active");
};
window.onscroll = () => {
	menu.classList.remove("bx-x");
	navbar.classList.remove("active");
};



const movieContainers = document.querySelector('.movie-containers');

// Clone the first set of movie items for infinite scrolling effect
const clone = movieContainers.innerHTML;
movieContainers.innerHTML += clone; // Duplicate the items

// Optional: Pause scrolling on hover
movieContainers.addEventListener('mouseover', () => {
    movieContainers.style.animationPlayState = 'paused';
});

movieContainers.addEventListener('mouseout', () => {
    movieContainers.style.animationPlayState = 'running';
});




