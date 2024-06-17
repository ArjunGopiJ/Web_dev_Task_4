const carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // Create DOM elements
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // Attach elements
    imgElement.src = movies[slideIndex].image;
    h1.textContent = movies[slideIndex].name;
    p.textContent = movies[slideIndex].des;
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // Set classes
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    // Manage active slides
    if (sliders.length > 1) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 1)}% - ${30 * (sliders.length - 1)}px)`;
    }

    slideIndex++;
};

// Initial slides
for (let i = 0; i < 3; i++) {
    createSlide();
}

// Auto slider
setInterval(createSlide, 3000);

// Video cards
const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    });
});

// Card sliders
const cardContainers = [...document.querySelectorAll('.card-container')];
const preBtns = [...document.querySelectorAll('.pre-btn')];
const nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    });

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    });
});