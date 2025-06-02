document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelector('.amor');
    const gif = document.createElement('img');

    gif.src = './img/a.gif';
    gif.id = 'gifElement';
    gif.classList.add('gif');
    document.body.appendChild(gif);

    cart.addEventListener('mouseover', () => {
        gif.classList.add('show');
        gif.classList.remove('hide');
    });

    cart.addEventListener('mouseout', () => {
        gif.classList.add('hide');
        gif.classList.remove('show');
    });

    gif.addEventListener('dragstart', (event) => {
        event.preventDefault();
    });
});