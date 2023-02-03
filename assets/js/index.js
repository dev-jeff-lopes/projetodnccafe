
const cards = document.querySelectorAll('.meuCard');

cards.forEach(meuCard => {
  meuCard.onmouseover = function() {
    this.querySelector('.btn-buy').style.display = 'block';
  };
  
  meuCard.onmouseout = function() {
    this.querySelector('.btn-buy').style.display = 'none';
  };
});


const abreModal = document.querySelector("#abre-modal")
const fechaModal = document.querySelector("#fecha-modal")
const modal = document.querySelector("#modal")
const planoFundo = document.querySelector("#plano-fundo")
const arrayEvento = [abreModal, fechaModal]

function chaveModal(){
    modal.classList.toggle("ocultar")
    planoFundo.classList.toggle("ocultar")
}

arrayEvento.forEach(e => e.addEventListener("click", chaveModal))