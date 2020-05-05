const colorBtn = document.querySelector('.colorBtn');

const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'red', 'green', '#3b5998'];

colorBtn.addEventListener('click', changeColor);

function changeColor(){
    //bodyBcg.style.backgroundColor = 'blue';
    let yert = Math.floor(Math.random()*4);
    colorBtn.style.backgroundColor = colors[yert];
}