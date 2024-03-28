const rpsContainers = document.querySelectorAll('.rps');
const separateImage = document.querySelector('.separate-image');
let global = 777;

let clickedElementNumber = null;

rpsContainers.forEach((container, index) => {
    container.addEventListener('click', function () {
        // Remove 'clicked' class from all image containers
        rpsContainers.forEach(container => {
            container.classList.remove('clicked');
        });

        // Add 'clicked' class only to the clicked image container
        this.classList.add('clicked');

        // Highlight the separate image whenever any .rps element is clicked
        separateImage.classList.add('clicked');

        // Assign a number to the clicked element using its index
        clickedElementNumber = index; // Store the assigned number in the global variable
        console.log('Number assigned to clicked element:', clickedElementNumber);

        global = clickedElementNumber;
        
    });
});


// Get the image element
var image = document.getElementById('myImage');

// Add event listener to the image
image.addEventListener('click', function() {
    // Your event handling code here
    console.log(global)
    let player1 = global;
    let player2 = getRandomInt(3);

    if (player2 === 0) {
        console.log("rock0")
    } else if (player2 === 1) {
        console.log("scissors1")
    } else {
        console.log("paper2")
    }


    if (player1 === 777){
        alert('must pick an option above')
    } else if(player2 === player1){
        console.log("Tie")
        //rock options
    } else if (player1 === 0 && player2 === 2) {
        console.log("Win")
    } else if (player1 === 0 && player2 === 1) {
        console.log("Lose")
    }   //scissors
    else if (player1 === 1 && player2 === 2){
        console.log("Win");
    }else if(player1 === 1 && player2 === 0){
        console.log("Lose")
    }   //paper
    else if(player1 === 2 && player2 === 0){
        console.log("Win")
    }else if(player1 ===2 && player2 === 1){
        console.log("Lose")
    }
    
});





function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}







