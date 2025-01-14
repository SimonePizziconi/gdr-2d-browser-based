// Prendo il bottone di inizio gioco e cambio la classe al Modal da none a block
let modal = document.getElementById('modal');
let startButton = document.getElementById('startGameButton');
let modalOverlay = document.querySelector('.overlay'); // Assicurati di avere un'overlay per il clic fuori dalla modale

startButton.addEventListener('click', function () {
  // Mostra la modale
  modal.style.display = 'block';
  modalOverlay.style.display = 'block';
});

// Se l'utente clicca sull'overlay (fuori dalla modale), chiudi la modale
modalOverlay.addEventListener('click', function () {
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
});

// Se l'utente clicca dentro la modale, non succede nulla
modal.addEventListener('click', function (event) {
  // Evitiamo che il clic all'interno della modale la chiuda
  event.stopPropagation();
});
