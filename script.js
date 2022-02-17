var header = document.getElementById("body")
var modal = document.getElementById('modal')
var iframeModal = document.getElementById('iframeModal')

function mostraModal(page) {
    iframeModal.src = `./${page}`
    modal.style = "display: block;" 
}
function escondeModal() {
    modal.style = "display:none;"
}

