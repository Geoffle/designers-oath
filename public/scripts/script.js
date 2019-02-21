var quizzButton = document.querySelector('main section:nth-of-type(2) button');
var quizz = document.querySelector('main section:nth-of-type(2) iframe');
var signElement = document.querySelector('main section:last-of-type p');
var signGetal = parseInt(signElement.innerText);
var signButton = document.querySelector('div button');
var downloadGedeelte = document.querySelector('footer');

function downloadAan() {
    downloadGedeelte.classList.add('uitklappen');
}

function quizzAan() {
    quizz.classList.toggle('uitklappen');
}

quizzButton.addEventListener('click', quizzAan);
signButton.addEventListener('click', downloadAan);
