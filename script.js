//Configurações do MODAL
var modal = document.getElementById('modal')
var iframeModal = document.getElementById('iframeModal')

function mostraModal(page) {
    iframeModal.src = `./${page}`
    setTimeout(() => {
        modal.style = "display: block;"  
    }, 500);
}
function escondeModal() {
    modal.style = "display:none;"
}






