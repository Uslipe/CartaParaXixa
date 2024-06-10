document.addEventListener('DOMContentLoaded', function() {
    var envelope = document.getElementById('envelope');

    envelope.addEventListener('click', function(event) {
        if (!event.target.closest('.cartao')) { // Verifica se o clique não foi no cartão
            // Alternar a classe 'open' no envelope para abrir/fechar
            this.classList.toggle('open');
            // Obtém o elemento do cartão
            var cartao = document.querySelector('.cartao');
            // Alternar a classe 'open' no cartão para abrir/fechar
            cartao.classList.toggle('open');
        }
    });
});
