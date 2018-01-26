// Getting all the images and storing in NodeList 
let images = document.querySelectorAll('.items');
// index variable
let i = 0;
// Setting slide show interval in milliseconds
let interval = 5000;

nextImg = function() {
    // hiding all other images
    images.forEach((img,index) => {
        // hiding div tag with item to display none
        images[index].style.display = "none";
    });

    // Checking the index value
    if(i != images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    // Showing div tag with item to display none    
    images[i].style.display = "block";
}

setInterval(nextImg, interval);