document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.amor');
    const gif = document.createElement('img');

    gif.src = './img/a.gif';
    gif.id = 'gifElement';
    gif.classList.add('gif');
    document.body.appendChild(gif);

    card.addEventListener('mouseover', () => {
        gif.classList.add('show');
        gif.classList.remove('hide');
    });

    card.addEventListener('mouseout', () => {
        gif.classList.add('hide');
        gif.classList.remove('show');
    });

    gif.addEventListener('dragstart', (event) => {
        event.preventDefault();
    });
});