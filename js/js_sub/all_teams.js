let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;
let intervalId; // Store the interval ID for later use

function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

function startAutoPlay() {
    intervalId = setInterval(function () {
        active = active + 1 < items.length ? active + 1 : 0; // Loop back to the first slide if at the end
        loadShow();
    }, 2000); // Change 2000 to adjust the autoplay interval (in milliseconds)
}

function stopAutoPlay() {
    clearInterval(intervalId);
}

loadShow();

next.onclick = function () {
    stopAutoPlay(); // Stop autoplay when manually navigating
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
};

prev.onclick = function () {
    stopAutoPlay(); // Stop autoplay when manually navigating
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
};

// Start autoplay when the page loads
startAutoPlay();
