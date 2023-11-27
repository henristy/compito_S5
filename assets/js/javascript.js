

window.addEventListener('scroll', () => {
   if (Math.round(window.scrollY) > 468) {
        document.querySelector('header').className='scrolledNavbar';
        document.querySelector('nav a:last-child').className='scrolledButton';
    } else {
        document.querySelector('header').className='';
        document.querySelector('nav a:last-child').className='';
    }
})



setInterval(()=> {
    let randomM = document.querySelectorAll('g')[Math.floor(Math.random() * document.querySelectorAll('g').length)];
    randomM.classList.add('hide')
}, 50);

setInterval(()=> {
    let random = document.querySelectorAll('g')[Math.floor(Math.random() * document.querySelectorAll('g').length)];
    random.classList.remove('hide');
}, 20);


