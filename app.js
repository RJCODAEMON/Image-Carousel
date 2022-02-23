const slider = document.querySelector('.slider')
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dots');
const numSlides = slides.length;
var slideNum = 0;

// image slider by next-btn
nextBtn.addEventListener('click', () => {
    slides.forEach((slides) => {
        slides.classList.remove('active');
    })

    dots.forEach((dots) => {
        dots.classList.remove('active');
    })

    slideNum++;

    if (slideNum > (numSlides - 1)) {
        slideNum = 0
    }

    slides[slideNum].classList.add("active");
    dots[slideNum].classList.add("active");
})

// image slider by next-btn
prevBtn.addEventListener('click', () => {
    slides.forEach((slides) => {
        slides.classList.remove('active');
    })

    dots.forEach((dots) => {
        dots.classList.remove('active');
    })

    slideNum--;

    if (slideNum < 0) {
        slideNum = numSlides - 1;
    }

    slides[slideNum].classList.add("active");
    dots[slideNum].classList.add("active");
})

// Autoplay Slider
var playSlider;

var repeater = () => {
    playSlider = setInterval(function () {
        slides.forEach((slides) => {
            slides.classList.remove('active');
        })

        dots.forEach((dots) => {
            dots.classList.remove('active');
        })

        slideNum++;

        if (slideNum > (numSlides - 1)) {
            slideNum = 0
        }

        slides[slideNum].classList.add("active");
        dots[slideNum].classList.add("active");
    }, 5000);
}

repeater();

// pause autoplay
slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
})

// play again autoplay
slider.addEventListener("mouseout", () => {
    repeater();
})