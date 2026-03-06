let button = document.getElementbyId ('no');
let height = window.innerHeight - 50;
let width = window.innerWidth - 50;

button.addEventListener( 'mouseover', function () {
    button.style.position = 'absolute';
    button.style.top = math.random() * height + "px";
    button.style.left = math.random() * width + "px";
} )