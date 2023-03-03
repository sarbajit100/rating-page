let button = document.getElementById("submit-rating");

button.addEventListener('click',submitRating)

function submitRating(){
    let rating = document.querySelector('input[name="Rating"]:checked').value;

    localStorage.setItem('val',rating)

    
}