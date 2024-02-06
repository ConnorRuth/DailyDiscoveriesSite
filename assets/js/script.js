var userInput = document.getElementById("fortune");
var userForm = document.getElementById("fortForm");
var submitBtn = document.getElementById("submitBtn");
var displayFort = document.getElementById("artFort");

userForm.addEventListener("submit", function(event){
  event.preventDefault();

  var fortune = userInput.ariaValueMax

  fetch("https://eightballapi.com/api" + fortune)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    displayFort.textContent = data.magic.answer;
  })
  .catch(function(error){
    console.log("an error has occurred", error)
  })
  userInput.value = "";
})