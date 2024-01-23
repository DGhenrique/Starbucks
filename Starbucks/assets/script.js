document.getElementById("likeButton").addEventListener("click", function () {
    const likeButton = document.getElementById('likeButton');

    likeButton.classList.add('like-animate');

    setTimeout(() => {
        likeButton.classList.remove('like-animate');
    }, 300);

    likeButton.classList.add('clicked');

    setTimeout(() => {
        likeButton.classList.remove('clicked');
    }, 1000);

    const currentEmoji = likeButton.innerHTML;

    const nextEmoji = (currentEmoji === '☕') ? '❤️' : '☕';

    likeButton.innerHTML = nextEmoji;

    if (nextEmoji === '☕') {
    }
});

let imagem = document.querySelector(".copo")
let circulo = document.querySelector(".circulo")

function trocaImagem(endereco) {
    imagem.src = endereco
}

function trocaCor(cor) {
    circulo.style.background = cor
}