document.getElementById('editar-btn').addEventListener('click', function() {
    const nomeTeste = document.getElementById('nome-teste');
    const isEditable = nomeTeste.contentEditable === "true";

    nomeTeste.contentEditable = !isEditable;
    nomeTeste.focus();
    this.textContent = isEditable ? '🖉' : '✔️'; // Troca ícone entre editar e confirmar
});
