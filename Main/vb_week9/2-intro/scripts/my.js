let myImage = document.querySelector('#changeMe');
let myFigure = document.querySelector('figure');
const myHeading = document.querySelector('#headDisplay');

myImage.onclick = function() {

  let mySrc = myImage.getAttribute('src');

  if (mySrc === 'img/night.jpg'){
    myImage.setAttribute('src', 'img/day.jpg');
    myHeading.textContent = 'Day time!';
    myFigure.style.width = '30%'

  } else {myImage.setAttribute('src', 'img/night.jpg');
  myHeading.textContent = 'Night time!';
  myFigure.style.width = '20%'
}
}
