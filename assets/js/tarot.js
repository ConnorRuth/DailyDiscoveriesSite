var name = document.querySelector("name");
var drawCardNumber = document.querySelector("reading");
var drawBtn = document.querySelector("#shuffleBtn");

function drawCard(event) {
    event.preventDefault();
    var reading = document.getElementById("reading").value;
    var tarotURL = "https://tarotapi.dev/api/v1/cards/random?n=3";

    fetch(tarotURL).then(function(response) {
        if(response.ok){
            return response.json();
        } else throw new Error('Failed to get cards. error: ' + response.status);
        }) .then(function(data){
            console.log(data);
        })
        .catch((error) => {
            console.warn(error.msg);
        })
}

drawBtn.addEventListener("click", drawCard);