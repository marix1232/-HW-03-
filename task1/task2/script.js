const trafficLightEl = document.querySelector('#trafficLight');
let currentColor = 'green'; 

function changeLight(newColor) {
  trafficLightEl.style.background = newColor;
  currentColor = newColor;
  trafficLightEl.removeEventListener('click', makeGreen);
  trafficLightEl.removeEventListener('click', makeYellow);
  trafficLightEl.removeEventListener('click', makeRed);

  switch (newColor) {
    case 'green':
      trafficLightEl.addEventListener('click', makeYellow);
      break;
    case 'yellow':
      trafficLightEl.addEventListener('click', makeRed);
      break;
    case 'red':
      trafficLightEl.addEventListener('click', makeGreen);
      break;
  }
}


function makeGreen() {
  changeLight('green');
}

function makeYellow() {
  changeLight('yellow');
}

function makeRed() {
  changeLight('red');
}

trafficLightEl.addEventListener('click', makeGreen); 
