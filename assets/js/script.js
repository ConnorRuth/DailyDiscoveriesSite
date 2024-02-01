var sign = document.getElementById('sign');
var day = document.getElementById('day');
var submitBtn = document.getElementById('submitBtn');


submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
  
    var zodiacSign = sign.value;
    var selectedDay = day.value;
  
    var apiUrl = `https://aztro.sameerkumar.website/?sign=${zodiacSign}&day=${selectedDay}`;
  
    fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log( "response body:", data);
        var horoscope = data.description;
        document.getElementById("artHoro").textContent = horoscope;
        document.getElementById("artHoro").style.display = "block";
      })
      .catch(function(error) {
        console.log(error);
      });
    });


