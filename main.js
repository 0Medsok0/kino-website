const carouselContainer = document.querySelector(".carousel-container");
const carouselTrack = document.querySelector(".carousel-track");
const carouselSlides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

let currentSlide = 0;
const slideWidth = carouselSlides[0].offsetWidth;

const trackWidth = slideWidth * (carouselSlides.length - 1);
carouselTrack.style.width = `${trackWidth}px`;

const updateCarousel = () => {
  carouselTrack.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % carouselSlides.length;
  updateCarousel();
};

const prevSlide = () => {
  currentSlide =
    (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
  updateCarousel();
};

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Initial setup
updateCarousel();
