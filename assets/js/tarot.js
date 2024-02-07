var drawCardNumber = document.querySelector("reading");
var drawBtn = document.querySelector("#shuffleBtn");
var TarotImg = [{shortname: "pe10", tarotImage: "./assets/imgs/Tarot/TenofPentacles.jpg"},{shortname: "pe09", tarotImage: "./assets/imgs/Tarot/NineofPentacles.jpg"}, {shortname: "pe08", tarotImage: "./assets/imgs/Tarot/EightofPentacles.jpg"},
{shortname: "pe07", tarotImage: "./assets/imgs/Tarot/SevenofPentacles.jpg"},{shortname: "pe06", tarotImage: "./assets/imgs/Tarot/SixofPentacles.jpg"},{shortname: "pe05", tarotImage: "./assets/imgs/Tarot/FiveofPentacles.jpg"},{shortname: "pe04", tarotImage: "./assets/imgs/Tarot/FourofPentacles.jpg"},
{shortname: "pe03", tarotImage: "./assets/imgs/Tarot/ThreeofPentacles.jpg"},{shortname: "pe02", tarotImage: "./assets/imgs/Tarot/TwoofPentacles.jpg"},{shortname: "peac", tarotImage: "./assets/imgs/Tarot/AceofPentacles.jpg"},{shortname: "peki", tarotImage: "./assets/imgs/Tarot/KingofPentacles.jpg"}, {shortname: "pepa", tarotImage: "./assets/imgs/Tarot/PageofPentacles.jpg"},
{shortname: "pequ", tarotImage: "./assets/imgs/Tarot/QueenofPentacles.jpg"},{shortname: "pekn", tarotImage: "./assets/imgs/Tarot/KnightofPentacles.jpg"},{shortname: "wa10", tarotImage: "./assets/imgs/Tarot/TenofWands.jpg"},{shortname: "wa09", tarotImage: "./assets/imgs/Tarot/NineofWands.jpg"}, {shortname: "wa08", tarotImage: "./assets/imgs/Tarot/EightofWands.jpg"},
{shortname: "wa07", tarotImage: "./assets/imgs/Tarot/SevenofWands.jpg"},{shortname: "wa06", tarotImage: "./assets/imgs/Tarot/SixofWands.jpg"},{shortname: "wa05", tarotImage: "./assets/imgs/Tarot/FiveofWands.jpg"},{shortname: "wa04", tarotImage: "./assets/imgs/Tarot/FourofWands.jpg"}, 
{shortname: "wa03", tarotImage: "./assets/imgs/Tarot/ThreeofWands.jpg"},{shortname: "wa02", tarotImage: "./assets/imgs/Tarot/TwoofWands.jpg"},{shortname: "waac", tarotImage: "./assets/imgs/Tarot/AceofWands.jpg"},{shortname: "waki", tarotImage: "./assets/imgs/Tarot/KingofWands.jpg"}, {shortname: "wapa", tarotImage: "./assets/imgs/Tarot/PageofWands.jpg"},
{shortname: "waqu", tarotImage: "./assets/imgs/Tarot/QueenofWands.jpg"},{shortname: "wakn", tarotImage: "./assets/imgs/Tarot/KnightofWands.jpg"},{shortname: "sw10", tarotImage: "./assets/imgs/Tarot/TenofSwords.jpg"},{shortname: "sw09", tarotImage: "./assets/imgs/Tarot/NineofSwords.jpg"}, {shortname: "sw08", tarotImage: "./assets/imgs/Tarot/EightofSwords.jpg"},
{shortname: "sw07", tarotImage: "./assets/imgs/Tarot/SevenofSwords.jpg"},{shortname: "sw06", tarotImage: "./assets/imgs/Tarot/SixofSwords.jpg"},{shortname: "sw05", tarotImage: "./assets/imgs/Tarot/FiveofSwords.jpg"},{shortname: "sw04", tarotImage: "./assets/imgs/Tarot/FourofSwords.jpg"},
{shortname: "sw03", tarotImage: "./assets/imgs/Tarot/ThreeofSwords.jpg"},{shortname: "sw02", tarotImage: "./assets/imgs/Tarot/TwoofSwords.jpg"},{shortname: "swac", tarotImage: "./assets/imgs/Tarot/AceofSwords.jpg"},{shortname: "swki", tarotImage: "./assets/imgs/Tarot/KingofSwords.jpg"}, {shortname: "swpa", tarotImage: "./assets/imgs/Tarot/PageofSwords.jpg"},
{shortname: "swqu", tarotImage: "./assets/imgs/Tarot/QueenofSwords.jpg"},{shortname: "swkn", tarotImage: "./assets/imgs/Tarot/KnightofSwords.jpg"},{shortname: "cu10", tarotImage: "./assets/imgs/Tarot/TenofCups.jpg"},{shortname: "cu09", tarotImage: "./assets/imgs/Tarot/NineofCups.jpg"}, {shortname: "cu08", tarotImage: "./assets/imgs/Tarot/EightofCups.jpg"},
{shortname: "cu07", tarotImage: "./assets/imgs/Tarot/SevenofCups.jpg"},{shortname: "cu06", tarotImage: "./assets/imgs/Tarot/SixofCups.jpg"},{shortname: "cu05", tarotImage: "./assets/imgs/Tarot/FiveofCups.jpg"},{shortname: "cu04", tarotImage: "./assets/imgs/Tarot/FourofCups.jpg"},
{shortname: "cu03", tarotImage: "./assets/imgs/Tarot/ThreeofCups.jpg"},{shortname: "cu02", tarotImage: "./assets/imgs/Tarot/TwoofCups.jpg"},{shortname: "cuac", tarotImage: "./assets/imgs/Tarot/AceofCups.jpg"},{shortname: "cuki", tarotImage: "./assets/imgs/Tarot/KingofCups.jpg"}, {shortname: "cupa", tarotImage: "./assets/imgs/Tarot/PageofCups.jpg"},
{shortname: "cuqu", tarotImage: "./assets/imgs/Tarot/QueenofCups.jpg"},{shortname: "cukn", tarotImage: "./assets/imgs/Tarot/KnightofCups.jpg"},{shortname: "ar14", tarotImage: "./assets/imgs/Tarot/Temperance.jpg"},{shortname: "ar18", tarotImage: "./assets/imgs/Tarot/TheMoon.jpg"},{shortname: "ar01", tarotImage: "./assets/imgs/Tarot/TheMagician.jpg"},
{shortname: "ar12", tarotImage: "./assets/imgs/Tarot/TheHangedMan.jpg"},{shortname: "ar09", tarotImage: "./assets/imgs/Tarot/TheHermit.jpg"},{shortname: "ar05", tarotImage: "./assets/imgs/Tarot/TheHeirophant.jpg"},{shortname: "ar07", tarotImage: "./assets/imgs/Tarot/TheChariot.jpg"},{shortname: "ar00", tarotImage: "./assets/imgs/Tarot/TheFool.jpg"},
{shortname: "ar11", tarotImage: "./assets/imgs/Tarot/Justice.jpg"},{shortname: "ar15", tarotImage: "./assets/imgs/Tarot/TheDevil.jpg"},{shortname: "ar10", tarotImage: "./assets/imgs/Tarot/TheWheelofFortune.jpg"},{shortname: "ar04", tarotImage: "./assets/imgs/Tarot/TheEmporer.jpg"},{shortname: "ar02", tarotImage: "./assets/imgs/Tarot/TheHighPriestess.jpg"},
{shortname: "ar03", tarotImage: "./assets/imgs/Tarot/TheEmpress.jpg"},{shortname: "ar19", tarotImage: "./assets/imgs/Tarot/TheSun.jpg"},{shortname: "ar20", tarotImage: "./assets/imgs/Tarot/Judgement.jpg"},{shortname: "ar13", tarotImage: "./assets/imgs/Tarot/Death.jpg"},{shortname: "ar21", tarotImage: "./assets/imgs/Tarot/TheWorld.jpg"},
{shortname: "ar17", tarotImage: "./assets/imgs/Tarot/TheStar.jpg"},{shortname: "ar06", tarotImage: "./assets/imgs/Tarot/TheLovers.jpg"},{shortname: "ar08", tarotImage: "./assets/imgs/Tarot/Strength.jpg"},{shortname: "ar16", tarotImage: "./assets/imgs/Tarot/TheTower.jpg"}];
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
          var tarotDisplay = matchTarot(data.cards[i]);
            htmlCard += `
            <div class="flip-card">
                <h3>${data.cards[i].name}</h3>
            <div class="flip-card-inner">
              <div class="flip-card-front">
              <img class="cardImg" src="${tarotDisplay.tarotImage}">
                          </div>
              <div class="flip-card-back">
                <h4>Meaning Upright:</h4>
                <p class="cardText">${data.cards[i].meaning_up}</p>
                <h4>Meaning Reversed:</h4>
                <p class="cardText">${data.cards[i].meaning_rev}</p>             
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
function matchTarot(data){
  const selectedTarot = TarotImg.find(ele => ele.shortname === data.name_short);
   return selectedTarot;
}
drawBtn.addEventListener("click", drawCard);