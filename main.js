var duck = document.getElementById('root');
var duck2 = document.getElementById('root2');
var sky = document.getElementsByTagName('main')
var scoreText = document.getElementById('score')
var hitbox = document.getElementById('hitbox');
var hitbox2 = document.getElementById('hitbox2');
var myAudio = document.getElementById('battle');
var body = document.getElementsByTagName('body');
// console.log(hitbox)
var score = 0;

function setHalfVolume() {
    myAudio.volume = 0.05;
    var music = myAudio.play();
}
window.onload = music;
var music = myAudio.play();
function turnUp() {
    myAudio.volume = 10;
}

scoreText.innerHTML = "Votre score est de :" + score;
var incTir = 0;
var tir = document.getElementsByClassName('lazer');
document.body.addEventListener("click", function() {
    tir[incTir].play();
    if (incTir >= tir.length-1) {
        incTir = 0;
    }else{
        incTir++;
    }

})
function move() {
    window.setInterval(animation, 800);
}

function animation() {
    var topPos1 = Math.random() * 90 + "%";
    var leftpos1 = Math.random() * 90 + "%";
    duck.style.top = topPos1;
    duck.style.left = leftpos1;
    hitbox.style.top = topPos1;
    hitbox.style.left = leftpos1;
    var topPos2 = Math.random() * 75 + "%";
    var leftpos2 = Math.random() * 45 + "%";
    duck2.style.top = topPos2;
    duck2.style.left = leftpos2;
    hitbox2.style.top = topPos2;
    hitbox2.style.left = leftpos2;
};
move()

duck.style.transition = "2.5s";
duck2.style.transition = "2.5s";
hitbox.style.transition = "2.5s";
hitbox2.style.transition = "2.5s";
//hitbox.style.backgroundColor = "red";
hitbox.addEventListener("click", function() {
    score++;
    scoreText.innerHTML = "Votre score est de :" + score;
    duck.style.display = "none";
    hitbox.style.display = "none"
    setTimeout(function() {
        duck.style.display = "block"
        hitbox.style.display = "block"
    }, 3000);
});
// hitbox2.style.backgroundColor = "green";
hitbox2.addEventListener("click", function() {
    score++;
    scoreText.innerHTML = "Votre score est de :" + score;
    hitbox2.style.display = "none"
    duck2.style.display = "none";
    setTimeout(function() {
        hitbox2.style.display = "block"
        duck2.style.display = "block"
    }, 3000)



});
