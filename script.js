


const rpsContainers = document.querySelectorAll('.rps');
const separateImage = document.querySelector('.separate-image');

rpsContainers.forEach(container => {
    container.addEventListener('click', function() {
        // Remove 'clicked' class from all image containers
        rpsContainers.forEach(container => {
            container.classList.remove('clicked');
        });

        // Add 'clicked' class only to the clicked image container
        this.classList.add('clicked');

        // Highlight the separate image whenever any .rps element is clicked
        separateImage.classList.add('clicked');
    });
});


let player1 = 0;
let player2 = getRandomInt(3);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


console.log(player2);

if (player2 === 0) {
    console.log("rock0")
} else if (player2 === 1) {
    console.log("paper1")
} else {
    console.log("scissors2")
}


if (player2 === player1) {
    console.log("Tie")
} else if (player1 === 0 && player2 === 2) {
    console.log("You Win")
} else if (player1 === 0 && player2 === 1) {
    console.log("You Lose")
}


