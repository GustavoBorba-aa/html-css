let slideIndex = 0;

function mudarSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    slideIndex += direction;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    document.querySelector('.carousel-container').style.transform = `translateX(-${slideIndex * 100}%)`;
}
