const process = document.getElementById("process");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    update();
});

previous.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }
    update();
});

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    }); // Add or remove active class to each circle. idx means index

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%' // Adjust the leangth of the blue line

    if(currentActive === 1) {
        previous.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        previous.disabled = false;
        next.disabled = false;
    } // button active or not
}

