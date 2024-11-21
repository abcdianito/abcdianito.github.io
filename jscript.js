
var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src ="sun.png"
    }else{
    icon.src = "moon.png"
}
}
//First Carousel Favorite Box
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  if (index >= slides.length) currentIndex = 0;
  else if (index < 0) currentIndex = slides.length - 1;
  else currentIndex = index;

  const offset = -currentIndex * 100; // Move to the appropriate slide
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

async function getJoke() {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
    const data = await response.json();
    
    if (data.error) {
        document.getElementById('joke-text').textContent = 'Sorry, there was an error fetching the joke.';
    } else {
        document.getElementById('joke-text').textContent = data.joke;
    }
}

// Fetch an initial joke when the page loads
getJoke();
