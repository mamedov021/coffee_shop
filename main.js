let toggle_btn = document.querySelector('.toggle_btn');
let drop_down = document.querySelector('.drop_down');

toggle_btn.addEventListener('click', () => {
drop_down.classList.toggle('hidden');

});


document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    const carousel = document.getElementById("default-carousel");
    const items = carousel.querySelectorAll("[data-carousel-item]");
    const indicators = carousel.querySelectorAll("[data-carousel-slide-to]");
    const prevButton = carousel.querySelector("[data-carousel-prev]");
    const nextButton = carousel.querySelector("[data-carousel-next]");

    // Initialize current slide index
    let currentSlide = 0;

    // Function to show the current slide
    function showSlide(index) {
        items.forEach(item => item.classList.add("hidden"));
        items[index].classList.remove("hidden");

        indicators.forEach(indicator => indicator.setAttribute("aria-current", "false"));
        indicators[index].setAttribute("aria-current", "true");
    }

    // Function to go to the previous slide
    function goToPreviousSlide() {
        currentSlide = (currentSlide - 1 + items.length) % items.length;
        showSlide(currentSlide);
    }

    // Function to go to the next slide
    function goToNextSlide() {
        currentSlide = (currentSlide + 1) % items.length;
        showSlide(currentSlide);
    }

    // Add event listeners to the buttons
    prevButton.addEventListener("click", goToPreviousSlide);
    nextButton.addEventListener("click", goToNextSlide);
});