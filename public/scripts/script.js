var quizzButton = document.querySelector("main section:nth-of-type(2) button");
var quizz = document.querySelector("main section:nth-of-type(2) iframe");
var signButton = document.querySelector("div button");
var downloadGedeelte = document.querySelector("footer");

function downloadAan() {
    downloadGedeelte.classList.add("uitklappen");
}

function quizzAan() {
    quizz.classList.toggle("uitklappen");
}

quizzButton.addEventListener("click", quizzAan);
signButton.addEventListener("click", downloadAan);

// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     $("#mobile-link").attr("href", "fb://page/764575913924713");
// }
