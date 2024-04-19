document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os links "Saber Mais"
    var knowMoreLinks = document.querySelectorAll(".know-more");

    // Adiciona um ouvinte de evento de clique a cada link "Saber Mais"
    knowMoreLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Obtém o identificador do destino a partir do atributo data-target
            var targetId = link.getAttribute("data-target");

            // Seleciona o elemento de informações adicionais com base no identificador
            var additionalInfo = document.getElementById(targetId);

            // Mostra o card adicional correspondente
            additionalInfo.style.display = "flex";
        });
    });

    // Seleciona todos os botões de fechar
    var closeBtns = document.querySelectorAll(".close-btn");

    // Adiciona um ouvinte de evento de clique a cada botão de fechar
    closeBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            // Obtém o elemento pai do botão de fechar (o card adicional)
            var additionalInfo = btn.parentNode.parentNode;

            // Oculta o card adicional
            additionalInfo.style.display = "none";
        });
    });
});