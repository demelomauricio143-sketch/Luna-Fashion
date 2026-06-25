document.addEventListener("DOMContentLoaded", () => {

    const btnPromo = document.getElementById("btnPromo");
    const mensagemPromo = document.getElementById("mensagemPromo");

    btnPromo.addEventListener("click", () => {
        mensagemPromo.textContent =
        "🔥 Até 50% OFF em peças selecionadas!";
    });

    document.getElementById("formContato").addEventListener("submit", function(e){
        e.preventDefault();
        alert("Mensagem enviada com sucesso!");
    });

});