var sign = document.getElementById('sign');
var day = document.getElementById('day');
var submitBtn = document.getElementById('submitBtn');

console.log("event listener attached");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  
  var zodiacSign = sign.value;
  
  var apiUrl = `/${zodiacSign}`;
  
  fetch(apiUrl)
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); // Handle response as text
  })
  .then(function(data) {
    try {
      var horoscope = JSON.parse(data).description;
      document.getElementById("artHoro").textContent = horoscope;
      document.getElementById("artHoro").style.display = "block";
    } catch (error) {
      console.log('Error parsing JSON:', error);
    }
  })
  .catch(function(error) {
    console.log(error);
  });
});