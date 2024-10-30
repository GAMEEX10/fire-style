const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const buttonElements = document.querySelectorAll('.button');
let buttonMeasurements = [];
function measureButtons(){
    buttonMeasurements = [];
    buttonElements.forEach(button =>{
        buttonMeasurements.push(button.getBoundingClientRect());
    });
}
measureButtons();
console.log(buttonMeasurements);
let particlesArray = [];
class particle {
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.weight = Math.random() * 1.5 + 1.5;
        this.directionX = Math.random() *2;
    }
    update(){
        this.y -= this.weight;
        this.x += this.directionX;
        if(this.size > 0.3) this.size -= 0.2;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle ='orange';
        ctx.fill();
    }
}

let activeButton =0;
buttonElements.forEach(button => button.addEventListener('mouseenter', function(){
    activeButton = button.dataset.number;
    }));
buttonElements.forEach(button => button.addEventListener('mouseleave', function(){
    activeButton = -1;
    }));

function handleParticles(){
    for (let i =0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
        if(particlesArray[i].size <= 1){
            particlesArray[i].splice(i, 1);
            i--;
        }
    }
}





