// Your code goes here
const h1 = document.querySelector('.logo-heading');
h1.addEventListener('mouseover', (event) => {
    event.target.style.transition = '1s ease-in-out';
    event.target.style.color = 'red';
})

h1.addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black';
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        document.body.style.backgroundImage = 'linear-gradient(0.25turn, yellow, red, blue)';
    }
})

document.addEventListener('dblclick', (event) => {
    document.body.style.background = 'white';
})

const busImage = document.querySelector('img');
busImage.addEventListener('mousedown', (event) => {
    event.target.style.transition = '1.5s';
    event.target.style.transform = 'scale(1.2)';
})
busImage.addEventListener('mouseup', (event) => {
    event.target.style.transform = 'scale(1)';
})

const container = document.querySelector('.container');
container.addEventListener('transitionstart', (event) => {
    event.target.style.transition = '3s ease-in-out';
    event.target.style.backgroundColor = 'yellow';
})

const funImage = document.querySelector('.content-section .img-content img');
funImage.addEventListener('contextmenu', (event) => {
    event.target.style.transition = '1s ease-in-out';
    event.target.style.transform = 'scale(1.1)';
})

const destination = document.querySelector('.content-destination h2');
destination.addEventListener('mousemove', (event) => {
    event.target.style.transition = '1s ease-in-out';
    event.target.style.color = 'skyblue';
})

document.addEventListener('auxclick', (event) => {
    event.target.style.transition = '2s ease-in-out';
    event.target.style.transform = 'rotate(360deg)';
})

const links = document.querySelector('.nav');
links.addEventListener('click', (event) => {
    event.preventDefault();
})