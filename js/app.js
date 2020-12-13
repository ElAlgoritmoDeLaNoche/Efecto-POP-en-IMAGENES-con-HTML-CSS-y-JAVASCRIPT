function popImagenes() {

    let pop = document.createElement('span');
    let size = Math.random() * 200;
    let section = document.querySelector('section');

    let imagenes = [
        'url("img/meGusta.png")',
        'url("img/meEncanta.png")',
        'url("img/meDivierte.png")',
        'url("img/meAsombra.png")',
        'url("img/meEntristece.png")',
        'url("img/meEnoja.png")',
    ];

    pop.style.left = Math.random() * innerWidth + 'px';
    pop.style.top = Math.random() * innerHeight + 'px';

    let background = imagenes[Math.floor(Math.random() * imagenes.length)];

    pop.style.width = size + 'px';
    pop.style.height = size + 'px';
    pop.style.backgroundImage = background;

    section.appendChild(pop);

    setTimeout(() => {
        pop.remove();
    }, 4000);

}