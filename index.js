var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImg1 = "images/";

var nameOfDice1 = "dice";

var randomImg2 = ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImg1 + randomNumber1 + nameOfDice1 + randomImg2);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImg3 = "images/";

var nameOfDice2 = "dice";

var randomImg4 = ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImg3 + randomNumber2 + nameOfDice2 + randomImg4);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}