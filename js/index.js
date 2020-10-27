// Your code goes here
const busImage = document.querySelector('img');
busImage.addEventListener('mouseenter', (event) => {
    busImage.style.opacity = '.75';
})

busImage.addEventListener('mouseleave', (event) => {
    busImage.style.opacity = '1';
})

const body = document.querySelector('body');
body.addEventListener('keypress', (event) => {
    body.style.backgroundColor = 'red';
})

body.addEventListener('keyup', (event) => {
    body.style.backgroundColor = 'white';
})

const mapImage = document.querySelectorAll('img')[1];
mapImage.addEventListener('dblclick', (event) => {
    mapImage.style.transform = 'rotateY(40deg)';
    mapImage.style.perspective = '400px';
})

mapImage.addEventListener('click', (event) => {
    mapImage.style.transform = 'rotateY(0deg)';
})

const boatImage = document.querySelectorAll('img')[2];
boatImage.addEventListener('mouseover', (event) => {
    boatImage.style.transform = 'rotate(180deg)';
})

boatImage.addEventListener('mouseout', (event) => {
    boatImage.style.transform = 'rotate(360deg)';
})

const destinationImage = document.querySelectorAll('img')[3];
let scale = 1;
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -.01;
    scale = Math.min(Math.max(.125, scale), 4);
    destinationImage.style.transform = `scale(${scale})`;
}
destinationImage.addEventListener('wheel', zoom);


const navOne = document.querySelectorAll('.nav-link')[0];
const navTwo = document.querySelectorAll('.nav-link')[1];
const navThree = document.querySelectorAll('.nav-link')[2];
const navFour = document.querySelectorAll('.nav-link')[3];
navOne.addEventListener('click', (event) => {
    event.preventDefault();
})

navTwo.addEventListener('click', (event) => {
    event.preventDefault();
})

navThree.addEventListener('click', (event) => {
    event.preventDefault();
})

navFour.addEventListener('click', (event) => {
    event.preventDefault();
})
