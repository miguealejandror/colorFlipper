const colors = ["#7852ff", "#a39fab","#fe5741","#fe794c","#fe936f","#fe4c78","#bada55","#407294","#420420","#dcedc1","#ffe4e1"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){

    return Math.floor(Math.random()*colors.length);
}