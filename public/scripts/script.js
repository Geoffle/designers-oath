var quizzButton = document.querySelector('main section:nth-of-type(2) button');
var quizz = document.querySelector('main section:nth-of-type(2) iframe');
var signElement = document.querySelector('main section:last-of-type p');
var signGetal = parseInt(signElement.innerText);



function quizzAan() {
    quizz.classList.toggle('uitklappen');
}

quizzButton.addEventListener('click', quizzAan);
