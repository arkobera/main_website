let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (value < 380) {
        text.style.marginTop = value * 2.5 + 'px';
        leaf.style.top = value * -1.5 + 'px';
        leaf.style.left = value * 1.5 + 'px';
        hill5.style.left = value * 1.5 + 'px';
        hill4.style.left = value * -1.5 + 'px';
        hill1.style.top = value * 1 + 'px';
    }
    console.log(value);
})

const games = ['snakegame.png','rockpaperscissor.png','tictactoe.png']
let indx = 0
document.getElementById('right').addEventListener('click',()=>{
   indx = (indx+1)%games.length;
   document.getElementById('back').style.backgroundImage=`url(${games[indx]})`;
})

document.getElementById('left').addEventListener('click',()=>{
    indx = (indx-1+games.length)%games.length
    document.getElementById('back').style.backgroundImage=`url(${games[indx]})`;
})