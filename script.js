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
    alert('Image clicked!');
    console.log(global)
    
});





function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}







