// Declare our variables
const resDiv = document.querySelector('#results');
const resBtn = document.querySelector('#getData');

// Add event listener to the button
resBtn.addEventListener('click', () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};

// Function to get the advice
function getAdvice() {

  fetch('	https://api.adviceslip.com/advice').then(response => {
    return response.json();
  }).then(adviceData => {
    const Adviceobj = adviceData.slip;
    resDiv.innerHTML = `<p>${Adviceobj.advice}</p>`;
  }).catch(error => {
    console.log(error);
  });

}