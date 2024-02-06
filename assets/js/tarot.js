var name = document.querySelector("name");
var drawCardNumber = document.querySelector("reading");
var drawBtn = document.querySelector("#shuffleBtn");

function drawCard(event) {
    event.preventDefault();
    var reading = document.getElementById("reading").value;
    var tarotURL = `https://tarotapi.dev/api/v1/cards/random?n=${reading}`;

    fetch(tarotURL).then(function (response) {
        if (response.ok) {
            return response.json();
        } else throw new Error('Failed to get cards. error: ' + response.status);
    }).then(function (data) {
        console.log(data);
        let htmlCard =""
        for(let i=0;i<data.cards.length;i++){
            htmlCard += `
            <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h1>${data.cards[i].name}</h1>
                <h6>${data.cards[i].type}</h6>
                          </div>
              <div class="flip-card-back">
                <h4>Meaning Upright:</h4>
                <p>${data.cards[i].meaning_up}</p>
                <h4>Meaning Reversed:</h4>
                <p>${data.cards[i].meaning_rev}</p>             
              </div>
            </div>
          </div>`
        }
        console.log(htmlCard)
        document.getElementById("display-card").innerHTML=htmlCard
    })
        .catch((error) => {
            console.warn(error.msg);
        })
}

drawBtn.addEventListener("click", drawCard);