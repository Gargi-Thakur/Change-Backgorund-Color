var button = document.querySelector('button');
var colors = ['dodgerblue', 'slateblue', 'gold', 'violet', 'cyan', 'pink', 'teal', 'salmon', 'olive'];

button.addEventListener('click', changeColor);

function changeColor(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}