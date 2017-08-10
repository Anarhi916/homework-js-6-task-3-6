// Задание 3
let conteiner = document.querySelector('.conteiner');
var blocks = '';
for (let i = 1; i < 300; i++) {    
    blocks += '<div class="conteiner__inside"></div>';    
}
conteiner.innerHTML = blocks;

conteiner.addEventListener('mouseover', radius);

function radius(e){
    e.target.style.borderRadius = '30px';
}

// Задание 4
let images = document.querySelectorAll('.imges');
let task4 = document.querySelector('.task4');

for (let i = 0; i < images.length; i++){
    images[i].addEventListener('click', background);
}

function background(e){
    task4.style.backgroundImage = 'url('+e.srcElement.currentSrc+')';
    task4.style.backgroundSize = 'contain';
}

// Задание 5
let task5 = document.querySelector('.task5');
let margin = 100;
task5.addEventListener('click', move);

function move(){
    task5.style.marginTop = margin + 'px';
    margin += 100;
}

// Задание 6
let triger = document.querySelector('.triger');
let button = document.querySelector('.button');
let position = 1;
triger.addEventListener('click', trigerPosition);


function trigerPosition(){
     if(position == 1){
     button.style.marginLeft = '137px';
     position = 2;
     console.log(1);
     }
    else if(position == 2){
     button.style.marginLeft = '272px';
     position = 3;
     console.log(2);
     }
    else if(position == 3){
     button.style.marginLeft = '2px';
     position = 1;
     console.log(0);
     }


}